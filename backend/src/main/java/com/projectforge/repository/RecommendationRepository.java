package com.projectforge.repository;

import com.projectforge.entity.Recommendation;
import com.projectforge.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {

    List<Recommendation> findByUser(User user);

    long countByUser(User user);

    List<Recommendation> findTop5ByUserOrderByIdDesc(User user);

}