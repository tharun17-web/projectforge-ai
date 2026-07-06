package com.projectforge.dto;

import lombok.Data;

@Data
public class UpdateProfileRequest {

    private String fullName;

    private String experienceLevel;

    private String careerGoal;

    private Integer availableDays;

    private String preferredDifficulty;

}