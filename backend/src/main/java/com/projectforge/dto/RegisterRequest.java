package com.projectforge.dto;

import lombok.Data;

@Data
public class RegisterRequest {

    private String fullName;

    private String email;

    private String password;

    private String experienceLevel;

    private String careerGoal;

    private Integer availableDays;

    private String preferredDifficulty;

}