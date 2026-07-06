package com.projectforge.service;

import com.projectforge.dto.RegisterRequest;
import com.projectforge.entity.User;
import com.projectforge.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.projectforge.dto.LoginRequest;
import com.projectforge.dto.LoginResponse;
import com.projectforge.security.jwt.JwtService;
import com.projectforge.dto.UserProfileResponse;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public User register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .experienceLevel(
                        request.getExperienceLevel() != null
                                ? request.getExperienceLevel()
                                : "Beginner"
                )
                .careerGoal(
                        request.getCareerGoal() != null
                                ? request.getCareerGoal()
                                : "Placement"
                )
                .availableDays(
                        request.getAvailableDays() != null
                                ? request.getAvailableDays()
                                : 30
                )
                .preferredDifficulty(
                        request.getPreferredDifficulty() != null
                                ? request.getPreferredDifficulty()
                                : "Medium"
                )
                .build();

        return userRepository.save(user);
    }
    @Override
    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse(
                token,
                "Login successful"
        );
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
}