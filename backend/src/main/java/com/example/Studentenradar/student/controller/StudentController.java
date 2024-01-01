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
import com.example.studentenradar.student.model.Address;
import com.example.studentenradar.student.model.Education;
import com.example.studentenradar.student.model.Student;
import com.example.studentenradar.student.service.StudentBusinessService;
import com.example.studentenradar.supervisor.model.Supervisor;

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

    // singular student CRUD operations
    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return service.addStudent(student);
    }

    @GetMapping("/{id}")
    public Optional<Student> getStudentById(@PathVariable(name = "id") int id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public boolean deleteStudent(@PathVariable(name = "id") int id) {
        return service.deleteStudent(id);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable(name = "id") int id) {
        return service.updateStudent(id, student);
    }

    // hardware 
    @GetMapping("/{id}/hardware")
    public List<Hardware> getStudentHardwareById(@PathVariable(name = "id") int id) {
        return service.getStudentHardwareById(id);
    }

    // supervisor
    @GetMapping("/{id}/supervisor")
    public Supervisor getSupervisorOfStudent(@PathVariable(name = "id") int id) {
        return service.getSupervisorOfStudent(id);
    }

    @PostMapping("/{id}/supervisor")
    public Supervisor asssignSupervisorToStudent(@RequestBody int supervisorId, @PathVariable(name = "id") int id) {
        return service.asssignSupervisorToStudent(id, supervisorId);
    }

    @PutMapping("/{id}/supervisor")
    public Supervisor changeSupervisorOfStudent(@RequestBody int supervisorId, @PathVariable(name = "id") int id) {
        return service.changeSupervisorOfStudent(id, supervisorId);
    }

    @DeleteMapping("/{id}/supervisor")
    public boolean removeSupervisorOfStudent(@PathVariable(name = "id") int id) {
        return service.removeSupervisorOfStudent(id);
    }

    // address 
    @GetMapping("/{id}/address")
    public Address getStudentAddress(@PathVariable(name = "id") int id){
        return service.getStudentAddress(id);
    }

    @PostMapping("/{id}/address")
    public Address addStudentAddress(@RequestBody Address address, @PathVariable(name = "id") int id){
        return service.addStudentAddress(id, address);
    }

    @PutMapping("/{id}/address")
    public Address changeStudentAddress(@RequestBody Address address, @PathVariable(name = "id") int id){
        return service.changeStudentAddress(id, address);
    }

    //education
    /*@GetMapping("/{id}/education")
    public Education getStudentEducation(@PathVariable(name = "id") int id){
        return service.getStudentEducation(id);
    }

    @PostMapping("/{id}/education")
    public Education addStudentEducation(@RequestBody Education education, @PathVariable(name = "id") int id){
        return service.addStudentEducation(id);
    }

    @PutMapping("/{id}/education")
    public Education changeStudentEducation(@RequestBody Education education, @PathVariable(name = "id") int id){
        return service.changeStudentEducation(id);
    }
    */
}