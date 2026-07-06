package com.projectforge.service;

import com.projectforge.dto.RecommendationResponse;
import com.projectforge.entity.Recommendation;
import com.projectforge.entity.User;
import com.projectforge.repository.RecommendationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RecommendationServiceImpl implements RecommendationService {

    private final PromptBuilderService promptBuilderService;
    private final GeminiService geminiService;
    private final RecommendationRepository recommendationRepository;
    private final JsonParserService jsonParserService;

    @Override
    public RecommendationResponse generateRecommendation(User user) {

        String prompt = promptBuilderService.buildPrompt(user);

        List<Recommendation> previous =
                recommendationRepository.findTop5ByUserOrderByIdDesc(user);

        if (!previous.isEmpty()) {

            prompt += "\n\nPreviously generated projects:\n";

            for (Recommendation recommendation : previous) {
                prompt += "- " + recommendation.getProjectTitle() + "\n";
            }

            prompt += "\nDo NOT generate projects similar to the above list.";
        }

        String aiResponse = geminiService.generateProject(prompt);

        RecommendationResponse response =
                jsonParserService.parse(aiResponse);

        Recommendation recommendation = Recommendation.builder()
                .projectTitle(response.getProjectTitle())
                .description(response.getDescription())
                .roadmap(response.getRoadmap())
                .techStack(response.getTechStack())
                .learningTopics(response.getLearningTopics())
                .apiList(response.getApiList())
                .databaseDesign(response.getDatabaseDesign())
                .user(user)
                .build();

        recommendationRepository.save(recommendation);

        return response;
    }
    @Override
    public List<RecommendationResponse> getRecommendationHistory(User user) {

        return recommendationRepository.findByUser(user)
                .stream()
                .map(recommendation ->
                        RecommendationResponse.builder()
                                .projectTitle(recommendation.getProjectTitle())
                                .description(recommendation.getDescription())
                                .roadmap(recommendation.getRoadmap())
                                .techStack(recommendation.getTechStack())
                                .learningTopics(recommendation.getLearningTopics())
                                .apiList(recommendation.getApiList())
                                .databaseDesign(recommendation.getDatabaseDesign())
                                .build()
                )
                .toList();
    }
}