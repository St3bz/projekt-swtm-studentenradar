package com.example.studentenradar.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.studentenradar.project.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer>{
    List<Project> findByNameContainingIgnoreCase(String term);
}