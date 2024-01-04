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

import com.example.studentenradar.contract.model.Contract;
import com.example.studentenradar.contract.model.StudentContract;
import com.example.studentenradar.hardware.model.Hardware;
import com.example.studentenradar.project.model.Project;
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

    // address 
    @GetMapping("/{id}/address")
    public Address getStudentAddress(@PathVariable(name = "id") int id){
        return service.getStudentAddress(id);
    }

    @PostMapping("/{id}/address")
    public Boolean addStudentAddress(@RequestBody Address address, @PathVariable(name = "id") int id){
        return service.addStudentAddress(id, address);
    }

    @PutMapping("/{id}/address")
    public Address changeStudentAddress(@RequestBody Address address, @PathVariable(name = "id") int id){
        return service.changeStudentAddress(id, address);
    }

    //education
    @GetMapping("/{id}/education")
    public Education getStudentEducation(@PathVariable(name = "id") int id){
        return service.getStudentEducation(id);
    }

    @PostMapping("/{id}/education")
    public Boolean addStudentEducation(@RequestBody Education education, @PathVariable(name = "id") int id){
        return service.addStudentEducation(id, education);
    }

    @PutMapping("/{id}/education")
    public Education changeStudentEducation(@RequestBody Education education, @PathVariable(name = "id") int id){
        return service.changeStudentEducation(id, education);
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

    // project
    @GetMapping("/{id}/project")
    public Project getProjectOfStudent(@PathVariable(name = "id") int id) {
        return service.getProjectOfStudent(id);
    }

    @PostMapping("/{id}/project")
    public Project asssignProjectToStudent(@RequestBody int projectId, @PathVariable(name = "id") int id) {
        return service.asssignProjectToStudent(id, projectId);
    }

    @PutMapping("/{id}/project")
    public Project changeProjectOfStudent(@RequestBody int projectId, @PathVariable(name = "id") int id) {
        return service.changeProjectOfStudent(id, projectId);
    }

    @DeleteMapping("/{id}/project")
    public boolean removeProjectOfStudent(@PathVariable(name = "id") int id) {
        return service.removeProjectOfStudent(id);
    }

    // hardware 
    @GetMapping("/{id}/hardware")
    public List<Hardware> getStudentHardwareById(@PathVariable(name = "id") int id) {
        return service.getStudentHardwareById(id);
    }

    @PostMapping("/{id}/hardware")
    public List<Hardware> addStudentHardware(@RequestBody int hardwareId, @PathVariable(name = "id") int id) {
        return service.addStudentHardware(id, hardwareId);
    }

    @DeleteMapping("/{id}/hardware")
    public Boolean removeStudentHardware(@RequestBody int hardwareId, @PathVariable(name = "id") int id) {
        return service.removeStudentHardware(id, hardwareId);
    }

    // contract 
    @GetMapping("/{id}/contract")
    public StudentContract getStudentContractById(@PathVariable(name = "id") int id) {
        return service.getStudentContractById(id);
    }

    
    @PostMapping("/{id}/contract")
    public StudentContract addStudentContract(@RequestBody Contract contract, @PathVariable(name = "id") int id) {
        return service.addStudentContract(id, contract);
    }

    
    @PutMapping("/{id}/contract")
    public Contract updateContract(@RequestBody Contract contract, @PathVariable(name = "id") int id) {
        return service.updateContract(id, contract);
    }

    @PutMapping("/{id}/contract-status")
    public StudentContract updateContractStatus(@RequestBody String status, @PathVariable(name = "id") int id) {
        return service.updateContractStatus(id, status);
    }

    @PutMapping("/{id}/contract-acceptance")
    public StudentContract updateContractAcceptanceStatus(@RequestBody Boolean status, @PathVariable(name = "id") int id) {
        return service.updateContractAcceptanceStatus(id, status);
    }

    @DeleteMapping("/{id}/contract")
    public Boolean removeStudentContract(@PathVariable(name = "id") int id) {
        return service.removeStudentContract(id);
    }
}