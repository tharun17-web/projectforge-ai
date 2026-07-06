package com.projectforge.service;

import com.projectforge.dto.DashboardResponse;
import com.projectforge.entity.User;
import com.projectforge.repository.RecommendationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.projectforge.dto.UpdateProfileRequest;
import com.projectforge.dto.UserProfileResponse;
import com.projectforge.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {

    private final RecommendationRepository recommendationRepository;
    private final UserRepository userRepository;

    @Override
    public DashboardResponse getDashboard(User user) {

        return DashboardResponse.builder()
                .fullName(user.getFullName())
                .email(user.getEmail())
                .experienceLevel(user.getExperienceLevel())
                .careerGoal(user.getCareerGoal())
                .availableDays(user.getAvailableDays())
                .preferredDifficulty(user.getPreferredDifficulty())
                .recommendationsGenerated(
                        recommendationRepository.countByUser(user)
                )
                .build();
    }
    @Override
    public UserProfileResponse getProfile(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return UserProfileResponse.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .experienceLevel(user.getExperienceLevel())
                .careerGoal(user.getCareerGoal())
                .availableDays(user.getAvailableDays())
                .preferredDifficulty(user.getPreferredDifficulty())
                .build();
    }

    @Override
    public UserProfileResponse updateProfile(
            String email,
            UpdateProfileRequest request) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setFullName(request.getFullName());
        user.setExperienceLevel(request.getExperienceLevel());
        user.setCareerGoal(request.getCareerGoal());
        user.setAvailableDays(request.getAvailableDays());
        user.setPreferredDifficulty(request.getPreferredDifficulty());

        userRepository.save(user);

        return UserProfileResponse.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .experienceLevel(user.getExperienceLevel())
                .careerGoal(user.getCareerGoal())
                .availableDays(user.getAvailableDays())
                .preferredDifficulty(user.getPreferredDifficulty())
                .build();
    }
}