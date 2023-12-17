package com.example.Studentenradar.Services;

import java.util.List;
import java.util.Optional;

import com.example.Studentenradar.Models.Project;

// interface in case there are multiple business services 
public interface ProjectBusinessServiceInterface {

    public Optional<Project> getById(int id);
    public List<Project> getProjects();
    
    public Project addProject(Project project); // returns id
    public void deleteProject(int id);
    
    public List<Project> searchProjects(String term);
    public Project updateProject(int id, Project project);

    
    

}
