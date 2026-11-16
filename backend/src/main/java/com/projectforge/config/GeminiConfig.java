
package com.projectforge.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class GeminiConfig {

    @Value("${groq.api.key}")
    private String apiKey;

    @Bean
    public WebClient geminiWebClient() {

        String cleanApiKey = apiKey == null
                ? ""
                : apiKey.replaceAll("[\\r\\n]", "").trim();

        if (cleanApiKey.isEmpty()) {
            throw new IllegalStateException(
                    "GROQ_API_KEY is missing or empty"
            );
        }

        return WebClient.builder()
                .baseUrl("https://api.groq.com/openai/v1")
                .defaultHeader(
                        HttpHeaders.AUTHORIZATION,
                        "Bearer " + cleanApiKey
                )
                .defaultHeader(
                        HttpHeaders.CONTENT_TYPE,
                        MediaType.APPLICATION_JSON_VALUE
                )
                .build();
    }
}
