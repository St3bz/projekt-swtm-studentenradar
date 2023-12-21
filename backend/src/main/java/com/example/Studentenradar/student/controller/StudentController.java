package com.example.studentenradar.student.controller;

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

import com.example.studentenradar.hardware.model.Hardware;
import com.example.studentenradar.student.model.Student;
import com.example.studentenradar.student.service.StudentBusinessService;

@RestController
@RequestMapping("/api/v1/students")
public class StudentController {
    private StudentBusinessService service;

    @Autowired
    StudentController(StudentBusinessService service) {
        super();
        this.service = service;
    }

    @GetMapping
    public List<Student> getStudents() {
        return service.getStudents();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return service.addStudent(student);
    }

    @GetMapping("/{id}")
    public Optional<Student> getStudentById(@PathVariable(name = "id") int id) {
        return service.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteStudent(@PathVariable(name = "id") int id) {
        return service.deleteStudent(id);
    }

    @PutMapping("/update/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable(name = "id") int id) {
        return service.updateStudent(id, student);
    }

    @GetMapping("/{id}/hardware")
    public List<Hardware> getStudentHardwareById(@PathVariable(name = "id") int id) {
        return service.getStudentHardwareById(id);
    }
}