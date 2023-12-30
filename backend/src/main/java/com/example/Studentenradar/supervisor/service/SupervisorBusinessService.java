package com.example.Studentenradar.supervisor.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Studentenradar.student.model.Student;
import com.example.Studentenradar.student.repository.StudentRepository;
import com.example.Studentenradar.supervisor.model.Supervisor;
import com.example.Studentenradar.supervisor.repository.SupervisorRepository;

import java.util.Collections;

@Service
public class SupervisorBusinessService {
    private SupervisorRepository supervisorRepository;
    private StudentRepository studentRepository;

    @Autowired
    SupervisorBusinessService(SupervisorRepository supervisorRepository, StudentRepository studentRepository) {
        super();
        this.supervisorRepository = supervisorRepository;
        this.studentRepository = studentRepository;
    }

    public Optional<Supervisor> getById(int id) {
        return supervisorRepository.findById(id);
    }

    public List<Supervisor> getSupervisors() {
        return supervisorRepository.findAll();
    }

    public Supervisor addSupervisor(Supervisor supervisor) {
        return supervisorRepository.save(supervisor);
    }

    public boolean deleteSupervisor(int id) {
        Optional<Supervisor> supervisor = supervisorRepository.findById(id);

        if (supervisor.isPresent()) {
            supervisorRepository.delete(supervisor.get());
            return true;
        }
        return false;
    }

    public Supervisor updateSupervisor(int id, Supervisor updatedSupervisor) {
        Optional<Supervisor> supervisor = supervisorRepository.findById(id);

        if (supervisor.isPresent()) {
            Supervisor foundSupervisor = supervisor.get();
            foundSupervisor.setFirstName(updatedSupervisor.getFirstName());
            foundSupervisor.setLastName(updatedSupervisor.getLastName());
            return supervisorRepository.save(foundSupervisor);
        }
        return null;
    }

    public List<Student> getSupervisedStudents(int id) {
        Optional<Supervisor> supervisor = getById(id);

        if (supervisor.isPresent()) {
            return supervisor.get().getStudents();
        }
        return Collections.emptyList();
    }

    public List<Student> addSupervisedStudent(int id, int studentId){
        Optional<Supervisor> supervisor = supervisorRepository.findById(id);
        Optional<Student> student = studentRepository.findById(studentId);

        if (student.isPresent() && supervisor.isPresent()){
            if (student.get().getSupervisor() == null){
                student.get().setSupervisor(supervisor.get());
                supervisor.get().addStudent(student.get());

                studentRepository.save(student.get());
            }
            return supervisor.get().getStudents();
        }
        return Collections.emptyList();
    }

    public boolean removeSupervisedStudent(int id, int studentId) {
        Optional<Supervisor> supervisor = supervisorRepository.findById(id);
        Optional<Student> student = studentRepository.findById(studentId);

        if (student.isPresent() && supervisor.isPresent() &&  (student.get().getSupervisor() == supervisor.get())){
                student.get().setSupervisor(null);
                supervisor.get().removeStudent(student.get());

                studentRepository.save(student.get());
                return true; 
        }
        return false;
    }
}