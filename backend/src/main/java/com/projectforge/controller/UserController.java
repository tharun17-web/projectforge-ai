package com.projectforge.controller;

import com.projectforge.dto.DashboardResponse;
import com.projectforge.entity.User;
import com.projectforge.repository.UserRepository;
import com.projectforge.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.projectforge.dto.UpdateProfileRequest;
import com.projectforge.dto.UserProfileResponse;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final DashboardService dashboardService;
    private final UserRepository userRepository;

    @GetMapping("/dashboard")
    public DashboardResponse dashboard(Authentication authentication) {

        User user = userRepository
                .findByEmail(authentication.getName())
                .orElseThrow();

        return dashboardService.getDashboard(user);
    }
    @GetMapping("/profile")
    public UserProfileResponse getProfile(Authentication authentication) {

        return dashboardService.getProfile(authentication.getName());

    }

    @PutMapping("/profile")
    public UserProfileResponse updateProfile(
            Authentication authentication,
            @RequestBody UpdateProfileRequest request) {

        return dashboardService.updateProfile(
                authentication.getName(),
                request
        );

    }
}