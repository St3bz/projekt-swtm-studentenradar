package com.example.Studentenradar.student.controller;

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

import com.example.Studentenradar.student.model.Education;
import com.example.Studentenradar.student.service.EducationBusinessService;

@RestController
@RequestMapping("/api/v1/educations")
public class EducationController {
    private EducationBusinessService service;

    @Autowired
    EducationController(EducationBusinessService service) {
        super();
        this.service = service;
    }

    @GetMapping
    public List<Education> getEducation() {
        return service.getEducations();
    }

    @PostMapping
    public Education addEducation(@RequestBody Education education) {
        return service.addEducation(education);
    }

    @GetMapping("/{id}")
    public Optional<Education> getEducationById(@PathVariable(name = "id") int id) {
        return service.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteEducation(@PathVariable(name = "id") int id) {
        return service.deleteEducation(id);
    }

    @PutMapping("/update/{id}")
    public Education updateEducation(@RequestBody Education education, @PathVariable(name = "id") int id) {
        return service.updateEducation(id, education);
    }
}