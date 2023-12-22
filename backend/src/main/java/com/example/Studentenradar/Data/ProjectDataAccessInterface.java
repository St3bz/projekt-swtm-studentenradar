package com.example.Studentenradar.Data;

import java.util.List;
import java.util.Optional;

import com.example.Studentenradar.Models.Project;

public interface ProjectDataAccessInterface {

    public Optional<Project> getById(int id);
    public List<Project> getProjects();
    
    public Project addProject(Project project); // returns id
    public void deleteProject(int id);
    
    public List<Project> searchProjects(String term);
    public Project updateProject(int id, Project updatedProject);
}
