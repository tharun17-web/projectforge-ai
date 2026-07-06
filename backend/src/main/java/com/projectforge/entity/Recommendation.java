package com.projectforge.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "recommendations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Recommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String projectTitle;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String roadmap;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String techStack;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String learningTopics;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String apiList;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String databaseDesign;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}