package com.projectforge.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecommendationResponse {

    private String projectTitle;
    private String description;
    private String roadmap;
    private String techStack;
    private String learningTopics;
    private String apiList;
    private String databaseDesign;
}