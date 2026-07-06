package com.projectforge.service;

import com.projectforge.entity.User;
import org.springframework.stereotype.Service;

@Service
public class PromptBuilderService {

    public String buildPrompt(User user) {

        return """
You are a world-class Software Architect, Senior Technical Mentor, and Product Designer.

Your job is to generate ONE unique software engineering project idea that is suitable for the student's profile.

Student Profile

Experience Level: %s
Career Goal: %s
Available Days: %d
Preferred Difficulty: %s

=============================
IMPORTANT REQUIREMENTS
=============================

Generate ONLY ONE project.

Every generated project MUST be completely different.

Never repeat previous ideas.

Avoid generating E-Commerce projects unless explicitly requested.

Randomly choose from different domains including:

- Artificial Intelligence
- Machine Learning
- Healthcare
- FinTech
- EdTech
- Cybersecurity
- Cloud Computing
- DevOps
- IoT
- Blockchain
- Smart Cities
- Agriculture
- Robotics
- AR/VR
- Logistics
- Productivity
- Social Media
- Travel
- Sustainability
- Government
- Finance
- Sports
- Gaming
- Space Technology

The project should be portfolio-worthy and interview-ready.

The project should match the student's experience level.

The roadmap should be practical.

The APIs should be realistic.

The database should follow good normalization practices.

The tech stack should use modern technologies.

================================

Return ONLY valid JSON.

Do NOT return markdown.

Do NOT explain anything.

Do NOT use ```json.

Return EXACTLY this format:

{
  "projectTitle":"",
  "description":"",
  "roadmap":"",
  "techStack":"",
  "learningTopics":"",
  "apiList":"",
  "databaseDesign":""
}
"""
                .formatted(
                        user.getExperienceLevel(),
                        user.getCareerGoal(),
                        user.getAvailableDays(),
                        user.getPreferredDifficulty()
                );
    }
}