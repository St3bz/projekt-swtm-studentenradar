package com.example.Studentenradar.contract.controller;

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

import com.example.Studentenradar.contract.model.Work;
import com.example.Studentenradar.contract.model.WorkId;
import com.example.Studentenradar.contract.service.WorkBusinessService;

@RestController
@RequestMapping("/api/v1/work")
public class WorkController {
    private WorkBusinessService service;

    @Autowired
    WorkController(WorkBusinessService service) {
        super();
        this.service = service;
    }

    @GetMapping
    public List<Work> getWork() {
        return service.getWork();
    }

    @GetMapping("/{studentId}/{week}")
    public Optional<Work> getWorkById(
        @PathVariable(name = "studentId") int studentId,
        @PathVariable(name = "week") int week) {

        WorkId id = new WorkId(week, studentId);
        return service.getById(id);
    }

    @PostMapping("/{studentId}")
    public Work addWork(@RequestBody int hours, @PathVariable(name = "studentId") int studentId) {
        return service.addHours(studentId, hours);
    }

    @DeleteMapping("/{studentId}/{week}")
    public boolean deleteWork(
        @PathVariable(name = "studentId") int studentId,
        @PathVariable(name = "week") int week) {

        WorkId id = new WorkId(week, studentId);
        return service.deleteWork(id);
    }

    @PutMapping("/{studentId}")
    public Work updateWork(@RequestBody int hours, @PathVariable(name = "studentId") int studentId) {
        return service.updateWork(studentId, hours);
    }
}
