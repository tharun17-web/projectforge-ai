package com.projectforge.service;

import com.projectforge.dto.RegisterRequest;
import com.projectforge.entity.User;
import com.projectforge.dto.LoginRequest;
import com.projectforge.dto.LoginResponse;
import com.projectforge.dto.UserProfileResponse;

public interface AuthService {

    User register(RegisterRequest request);
    LoginResponse login(LoginRequest request);
    UserProfileResponse getProfile(String email);

}