package com.projectforge.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.projectforge.dto.RecommendationResponse;
import org.springframework.stereotype.Service;

@Service
public class JsonParserService {

    private final ObjectMapper mapper = new ObjectMapper();

    public RecommendationResponse parse(String json) {

        try {

            JsonNode root = mapper.readTree(json);

            RecommendationResponse response = new RecommendationResponse();

            response.setProjectTitle(getText(root.get("projectTitle")));
            response.setDescription(getText(root.get("description")));
            response.setRoadmap(flatten(root.get("roadmap")));
            response.setTechStack(flatten(root.get("techStack")));
            response.setLearningTopics(flatten(root.get("learningTopics")));
            response.setApiList(flatten(root.get("apiList")));
            response.setDatabaseDesign(flatten(root.get("databaseDesign")));

            return response;

        } catch (Exception e) {
            throw new RuntimeException("AI returned invalid JSON", e);
        }
    }

    private String getText(JsonNode node) {
        return node == null ? "" : node.asText();
    }

    private String flatten(JsonNode node) throws Exception {

        if (node == null) return "";

        if (node.isTextual()) {
            return node.asText();
        }

        return mapper.writerWithDefaultPrettyPrinter()
                .writeValueAsString(node);

    }
}