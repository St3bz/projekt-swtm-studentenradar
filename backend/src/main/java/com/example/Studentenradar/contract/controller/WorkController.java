package com.example.studentenradar.contract.controller;

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

import com.example.studentenradar.contract.model.Work;
import com.example.studentenradar.contract.model.WorkId;
import com.example.studentenradar.contract.service.WorkBusinessService;

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

    @PostMapping
    public Work addWork(@RequestBody Work work) {
        return service.addWork(work);
    }

    @GetMapping("/{id}")
    public Optional<Work> getWorkById(@PathVariable(name = "id") WorkId id) {
        return service.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteWork(@PathVariable(name = "id") WorkId id) {
        return service.deleteWork(id);
    }

    @PutMapping("/update/{id}")
    public Work updateWork(@RequestBody Work work, @PathVariable(name = "id") WorkId id) {
        return service.updateWork(id, work);
    }
}
