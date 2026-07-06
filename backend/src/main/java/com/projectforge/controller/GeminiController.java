package com.projectforge.controller;

import com.projectforge.service.GeminiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class GeminiController {

    private final GeminiService geminiService;

    @GetMapping("/api/test/gemini")
    public String testGemini() {

        return geminiService.generateProject(
                "Say only: Gemini connection successful."
        );
    }
}