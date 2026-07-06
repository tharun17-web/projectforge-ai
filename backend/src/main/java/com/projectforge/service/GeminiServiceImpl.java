package com.projectforge.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class GeminiServiceImpl implements GeminiService {

    private final WebClient geminiWebClient;

    @Override
    public String generateProject(String prompt) {

        Map<String, Object> body = Map.of(
                "model", "llama-3.1-8b-instant",
                "messages", new Object[]{
                        Map.of(
                                "role", "system",
                                "content",
                                """
                                        
                                        You are an expert Software Architect and Technical Mentor.
                                        
                                        You MUST return ONLY valid JSON.
                                        
                                        Never return markdown.
                                        Never return explanations.
                                        Never wrap with ```json.
                                        Never include extra text.
                                        
                                        Every project MUST be unique.
                                        
                                        Never repeat previous project ideas.
                                        
                                        Randomly choose projects from different domains such as:
                                        
                                        - Artificial Intelligence
                                        - Machine Learning
                                        - Healthcare
                                        - FinTech
                                        - EdTech
                                        - Cybersecurity
                                        - Cloud Computing
                                        - DevOps
                                        - IoT
                                        - Blockchain
                                        - Social Media
                                        - Logistics
                                        - Agriculture
                                        - Gaming
                                        - SaaS
                                        - Productivity
                                        - Travel
                                        - Smart City
                                        - Robotics
                                        - Data Analytics
                                        - AR/VR
                                        - Environmental Sustainability
                                        
                                        Each generated project should be significantly different.
                                        
                                        Generate realistic portfolio-quality software projects.
                                        
                                        Roadmaps should contain milestones.
                                        
                                        Tech stack should be modern.
                                        
                                        Learning topics should be practical.
                                        
                                        APIs should be realistic.
                                        
                                        Database design should be normalized.
                                        
                                        Return EXACTLY this JSON.
                                        
                                                Every field MUST be a STRING.
                                        
                                                Do NOT use arrays.
                                        
                                                Do NOT use nested objects.
                                        
                                                Do NOT return lists.
                                        
                                                Do NOT return JSON inside JSON.
                                        
                                                The values of roadmap, techStack, learningTopics,
                                                apiList and databaseDesign must all be plain text strings.
                                                
                                                If you cannot follow these rules, regenerate your response internally until it exactly matches the required JSON schema.
                                        
                                                Example:
                                        
                                                {
                                                  "projectTitle":"AI Resume Analyzer",
                                                  "description":"...",
                                                  "roadmap":"Week 1...\\nWeek 2...\\nWeek 3...",
                                                  "techStack":"React, Spring Boot, MySQL",
                                                  "learningTopics":"JWT, REST API, React Hooks",
                                                  "apiList":"GitHub API, OpenAI API",
                                                  "databaseDesign":"Users(id,name,email), Resume(id,user_id,file_url)"
                                                }
                                        
                                """
                        ),
                        Map.of(
                                "role", "user",
                                "content",
                                prompt + """

Generate a completely different project from previous generations.

Avoid e-commerce unless specifically requested.

Surprise the user with an innovative software idea.

"""
                        )
                },
                "temperature", 0.6,
                "max_tokens", 1800
        );

        Map response = geminiWebClient
                .post()
                .uri("/chat/completions")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(body)
                .retrieve()
                .bodyToMono(Map.class)
                .block();

        Map choice = (Map) ((java.util.List<?>) response.get("choices")).get(0);
        Map message = (Map) choice.get("message");

        String result = message.get("content").toString();

        result = result
                .replace("```json", "")
                .replace("```", "")
                .replace("\n", " ")
                .trim();

        int start = result.indexOf("{");
        int end = result.lastIndexOf("}");

        if (start >= 0 && end > start) {
            result = result.substring(start, end + 1);
        }
        System.out.println("========== AI RESPONSE ==========");
        System.out.println(result);
        System.out.println("=================================");

        return result;
    }
}