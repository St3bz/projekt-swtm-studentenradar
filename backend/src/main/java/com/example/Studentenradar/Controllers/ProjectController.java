package com.example.Studentenradar.Controllers;

import com.example.Studentenradar.Models.*;
import com.example.Studentenradar.Repository.ProjectRepo;
import com.example.Studentenradar.Services.ProjectBusinessService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/projects")
public class ProjectController {

    private ProjectBusinessService service;

    // spring managed beans: dependency injection
    @Autowired
    ProjectController(ProjectBusinessService service){
        super();
        this.service = service;
    }

    @GetMapping("/")
    public List<Project> getProjectsInJSON() {
        
        List<Project> projects = service.getProjects();

        return projects;
    }

    @GetMapping("/search/{searchTerm}")
    public List<Project> searchProjectsInJSON(@PathVariable(name="searchTerm") String term) {
        
        List<Project> projects = service.searchProjects(term);

        return projects;
    }

    @PostMapping("/")
    public Project addProject(@RequestBody Project project){    
        return service.addProject(project);
    }

    @GetMapping("/{id}")
    public Optional<Project> getById(@PathVariable(name="id") int id){    
        return service.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProject(@PathVariable(name="id") int id){    
        service.deleteProject(id);
    }

    @PutMapping("/update/{id}")
    public Project updateProject(@RequestBody Project project, @PathVariable(name="id") int id){    
        return service.updateProject(id, project);
    }
}
