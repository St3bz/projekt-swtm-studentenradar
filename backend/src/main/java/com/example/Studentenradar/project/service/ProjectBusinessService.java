package com.example.studentenradar.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentenradar.project.model.Project;
import com.example.studentenradar.project.repository.ProjectRepository;
import com.example.studentenradar.student.model.Student;
import java.util.Collections;

@Service
public class ProjectBusinessService {
    private ProjectRepository projectRepository;

    @Autowired
    ProjectBusinessService(ProjectRepository projectRepository) {
        super();
        this.projectRepository = projectRepository;
    }

    public Optional<Project> getById(int id) {
        return projectRepository.findById(id);
    }

    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    public Project addProject(Project project) {
        return projectRepository.save(project);
    }

    public boolean deleteProject(int id) {
        Optional<Project> project = projectRepository.findById(id);

        if (project.isPresent()) {
            projectRepository.delete(project.get());
            return true;
        }
        return false;
    }

    public List<Project> searchProjects(String term) {
        return projectRepository.findByNameContainingIgnoreCase(term);
    }

    public Project updateProject(int id, Project updatedProject) {
        Optional<Project> project = projectRepository.findById(id);

        if (project.isPresent()) {
            Project foundProject = project.get();
            foundProject.setName(updatedProject.getName());
            foundProject.setDescription(updatedProject.getDescription());
            return projectRepository.save(foundProject);
        }
        return null;
    }

    public List<Student> getProjectMembersById(int id){
        Optional<Project> project = getById(id);

        if (project.isPresent()){
            return project.get().getStudents();
        }
        return Collections.emptyList();
    }
}