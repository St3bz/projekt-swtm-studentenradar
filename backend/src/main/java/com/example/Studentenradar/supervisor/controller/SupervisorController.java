package com.example.studentenradar.supervisor.controller;

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

import com.example.studentenradar.student.model.Student;
import com.example.studentenradar.supervisor.model.Supervisor;
import com.example.studentenradar.supervisor.service.SupervisorBusinessService;

@RestController
@RequestMapping("/api/v1/supervisors")
public class SupervisorController {
    private SupervisorBusinessService service;

    // spring managed beans: dependency injection
    @Autowired
    SupervisorController(SupervisorBusinessService service) {
        super();
        this.service = service;
    }

    @GetMapping
    public List<Supervisor> getSupervisors() {
        return service.getSupervisors();
    }

    @PostMapping
    public Supervisor addSupervisor(@RequestBody Supervisor supervisor) {
        return service.addSupervisor(supervisor);
    }

    @GetMapping("/{id}")
    public Optional<Supervisor> getSupervisorById(@PathVariable(name = "id") int id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public boolean deleteSupervisor(@PathVariable(name = "id") int id) {
        return service.deleteSupervisor(id);
    }

    @PutMapping("/{id}")
    public Supervisor updateProject(@RequestBody Supervisor supervisor, @PathVariable(name = "id") int id) {
        return service.updateSupervisor(id, supervisor);
    }

    @GetMapping("/{id}/students")
    public List<Student> getSupervisedStudents(@PathVariable(name = "id") int id) {
        return service.getSupervisedStudents(id);
    }

    // not needed
    @PostMapping("/{id}/student")
    public List<Student> addSupervisedStudent(@PathVariable(name = "id") int id, @RequestBody int studentId){
        return service.addSupervisedStudent(id, studentId);
    }

    @DeleteMapping("/{id}/student")
    public boolean removeSupervisedStudent(@PathVariable(name = "id") int id, @RequestBody int studentId) {
        return service.removeSupervisedStudent(id, studentId);
    }
}
