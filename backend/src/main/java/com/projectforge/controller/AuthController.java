package com.projectforge.controller;

import com.projectforge.dto.LoginRequest;
import com.projectforge.dto.LoginResponse;
import com.projectforge.dto.RegisterRequest;
import com.projectforge.entity.User;
import com.projectforge.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}