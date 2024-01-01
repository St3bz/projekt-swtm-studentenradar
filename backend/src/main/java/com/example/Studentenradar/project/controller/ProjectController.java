package com.example.Studentenradar.project.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Studentenradar.project.model.Project;
import com.example.Studentenradar.project.service.ProjectBusinessService;
import com.example.Studentenradar.student.model.Student;

@RestController
@RequestMapping("/api/v1/projects")
public class ProjectController {
    private ProjectBusinessService service;

    // spring managed beans: dependency injection
    @Autowired
    ProjectController(ProjectBusinessService service) {
        super();
        this.service = service;
    }

    @GetMapping
    public List<Project> getProjects() {
        return service.getProjects();
    }

    @GetMapping("/search")
    public List<Project> searchProjects(@RequestParam(name = "searchTerm") String term) {
        return service.searchProjects(term);
    }

    @PostMapping
    public Project addProject(@RequestBody Project project) {
        return service.addProject(project);
    }

    @GetMapping("/{id}")
    public Optional<Project> getProjectById(@PathVariable(name = "id") int id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public boolean deleteProject(@PathVariable(name = "id") int id) {
        return service.deleteProject(id);
    }

    @PutMapping("/{id}")
    public Project updateProject(@RequestBody Project project, @PathVariable(name = "id") int id) {
        return service.updateProject(id, project);
    }

    @GetMapping("/{id}/members")
    public List<Student> getProjectMembers(@PathVariable(name = "id") int id) {
        return service.getProjectMembers(id);
    }

    @PostMapping("/{id}/member")
    public List<Student> addProjectMember(@PathVariable(name = "id") int id, @RequestBody int studentId){
        return service.addProjectMember(id, studentId);
    }

    @DeleteMapping("/{id}/member")
    public boolean removeProjectMember(@PathVariable(name = "id") int id, @RequestBody int studentId) {
        return service.removeProjectMember(id, studentId);
    }
}
