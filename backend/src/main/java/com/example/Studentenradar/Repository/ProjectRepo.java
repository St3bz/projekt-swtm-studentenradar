package com.example.Studentenradar.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Studentenradar.Models.Project;

public interface ProjectRepo extends JpaRepository<Project, Integer>{

    List<Project> findByNameContainingIgnoreCase(String term);
    
}
