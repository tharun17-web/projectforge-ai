package com.projectforge.service;

import com.projectforge.dto.DashboardResponse;
import com.projectforge.entity.User;
import com.projectforge.dto.UpdateProfileRequest;
import com.projectforge.dto.UserProfileResponse;

public interface DashboardService {

    DashboardResponse getDashboard(User user);
    UserProfileResponse getProfile(String email);

    UserProfileResponse updateProfile(
            String email,
            UpdateProfileRequest request
    );

}