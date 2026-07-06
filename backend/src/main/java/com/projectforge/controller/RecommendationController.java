package com.projectforge.controller;

import com.projectforge.dto.RecommendationResponse;
import com.projectforge.entity.User;
import com.projectforge.repository.UserRepository;
import com.projectforge.service.RecommendationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/recommendation")
@RequiredArgsConstructor
public class RecommendationController {

    private final RecommendationService recommendationService;
    private final UserRepository userRepository;

    @GetMapping("/generate")
    public RecommendationResponse generate(Authentication authentication) {

        User user = userRepository
                .findByEmail(authentication.getName())
                .orElseThrow();

        return recommendationService.generateRecommendation(user);
    }
    @GetMapping("/history")
    public List<RecommendationResponse> history(Authentication authentication) {

        User user = userRepository
                .findByEmail(authentication.getName())
                .orElseThrow();

        return recommendationService.getRecommendationHistory(user);
    }
}