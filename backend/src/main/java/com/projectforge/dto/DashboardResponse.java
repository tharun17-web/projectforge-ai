package com.projectforge.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DashboardResponse {

    private String fullName;
    private String email;
    private String experienceLevel;
    private String careerGoal;
    private Integer availableDays;
    private String preferredDifficulty;
    private Long recommendationsGenerated;

}