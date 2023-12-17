package com.example.Studentenradar.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Studentenradar.Data.ProjectDataAccess;
import com.example.Studentenradar.Models.Project;

@Service
public class ProjectBusinessService implements ProjectBusinessServiceInterface{
    
    @Autowired
    ProjectDataAccess data;

    @Override
    public Optional<Project> getById(int id) {
    
        return data.getById(id);
    }

    @Override
    public List<Project> getProjects(){
        return data.getProjects();
    }

    @Override
    public Project addProject(Project project) {
        return data.addProject(project);
    }

    @Override
    public void deleteProject(int id) {
    
        data.deleteProject(id);
    }

    @Override
    public List<Project> searchProjects(String term) {
        return data.searchProjects(term);
    }

    @Override
    public Project updateProject(int id, Project project) {
        return data.updateProject(id, project);
    }
}