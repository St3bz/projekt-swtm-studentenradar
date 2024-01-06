package com.example.studentenradar.contract.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.studentenradar.contract.model.StudentContract;
import com.example.studentenradar.contract.model.StudentContractId;
import com.example.studentenradar.contract.service.StudentContractBusinessService;

@RestController
@RequestMapping("/api/v1/student-contracts")
public class StudentContractController {
    private StudentContractBusinessService service;

    @Autowired
    StudentContractController(StudentContractBusinessService service) {
        super();
        this.service = service;
    }

    @GetMapping
    public List<StudentContract> getStudentContract() {
        return service.getStudentContracts();
    }

    @GetMapping("/{studentId}/{contractId}")
    public Optional<StudentContract> getStudentContractById(
        @PathVariable(name = "studentId") int studentId,
        @PathVariable(name = "contractId") int contractId) {

        StudentContractId id = new StudentContractId(studentId, contractId);
        return service.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteStudentContract(@PathVariable(name = "id") StudentContractId id) {
        return service.deleteStudentContract(id);
    }

    @PutMapping("/update/{id}")
    public StudentContract updateStudentContract(@RequestBody StudentContract studentContract, @PathVariable(name = "id") StudentContractId id) {
        return service.updateStudentContract(id, studentContract);
    }
}
