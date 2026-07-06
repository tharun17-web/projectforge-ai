package com.projectforge.service;

import com.projectforge.dto.RecommendationResponse;
import com.projectforge.entity.User;

import java.util.List;

public interface RecommendationService {

    RecommendationResponse generateRecommendation(User user);

    List<RecommendationResponse> getRecommendationHistory(User user);

}