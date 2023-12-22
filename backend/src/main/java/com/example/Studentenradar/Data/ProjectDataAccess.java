package com.example.Studentenradar.Data;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.Studentenradar.Models.Project;
import com.example.Studentenradar.Repository.ProjectRepo;

@Repository     // For data access
public class ProjectDataAccess implements ProjectDataAccessInterface {
 
    @Autowired
    private ProjectRepo projectRepo;

    @Override
    public Optional<Project> getById(int id){
        
        return projectRepo.findById(id);
    }

    @Override 
    public List<Project> getProjects(){
        return projectRepo.findAll();
    }
    
    @Override
    public Project addProject(Project project){ // returns id
        return projectRepo.save(project);
    }
    
    @Override 
    public void deleteProject(int id){
        
        Project project = projectRepo.findById(id).get();
        projectRepo.delete(project);
    }
    
    @Override   
    public List<Project> searchProjects(String term){

        return projectRepo.findByNameContainingIgnoreCase(term);
    }

    @Override
    public Project updateProject(int id, Project updatedProject){
        
        Project project = projectRepo.findById(id).get();
        project.setName(updatedProject.getName());
        project.setDescription(updatedProject.getDescription());
        
        return projectRepo.save(project);
    }
}
