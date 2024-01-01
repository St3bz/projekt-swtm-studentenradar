package com.example.studentenradar.student.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentenradar.hardware.model.Hardware;
import com.example.studentenradar.student.model.Address;
import com.example.studentenradar.student.model.Student;
import com.example.studentenradar.student.repository.AddressRepository;
import com.example.studentenradar.student.repository.StudentRepository;
import com.example.studentenradar.supervisor.model.Supervisor;
import com.example.studentenradar.supervisor.repository.SupervisorRepository;

@Service
public class StudentBusinessService {
    private StudentRepository studentRepository;
    private SupervisorRepository supervisorRepository;
    private AddressRepository addressRepository;

    private AddressBusinessService addressBusinessService;

    @Autowired
    StudentBusinessService(StudentRepository studentRepository, SupervisorRepository supervisorRepository, AddressRepository addressRepository, AddressBusinessService addressBusinessService) {
        super();
        this.studentRepository = studentRepository;
        this.supervisorRepository = supervisorRepository;
        this.addressRepository = addressRepository;

        this.addressBusinessService = addressBusinessService;
    }

    public Optional<Student> getById(int id) {
        return studentRepository.findById(id);
    }

    public List<Student> getStudents() { 
        return studentRepository.findAll();
    }

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public boolean deleteStudent(int id) {
        Optional<Student> student = studentRepository.findById(id);

        if (student.isPresent()) {
            studentRepository.delete(student.get());
            return true;
        }
        return false;
    }

    public Student updateStudent(int id, Student updatedStudent) {
        Optional<Student> student = studentRepository.findById(id);

        if (student.isPresent()) {
            Student foundStudent = student.get();

            foundStudent.setFirstName(updatedStudent.getFirstName());
            foundStudent.setLastName(updatedStudent.getLastName());
            foundStudent.setEmail(updatedStudent.getEmail());
            foundStudent.setIsKnown(updatedStudent.getIsKnown());
            foundStudent.setRemark(updatedStudent.getRemark());

            return studentRepository.save(foundStudent);
        }
        return null;
    }

    // hardware
    public List<Hardware> getStudentHardwareById(int id){
        Optional<Student> student = studentRepository.findById(id);

        if (student.isPresent()){
            return student.get().getOwnedHardware();
        }
        return Collections.emptyList();
    }

    // supervisor
    public Supervisor getSupervisorOfStudent(int id){
        Optional<Student> student = studentRepository.findById(id);

        if (student.isPresent()){
            return student.get().getSupervisor();
        }
        return null;
    }

    public Supervisor asssignSupervisorToStudent(int id, int supervisorId){

        Optional<Student> student = studentRepository.findById(id);
        Optional<Supervisor> supervisor = supervisorRepository.findById(supervisorId);

         if (student.isPresent() && supervisor.isPresent()){
            if (student.get().getSupervisor() == null){
                student.get().setSupervisor(supervisor.get());
                supervisor.get().addStudent(student.get());

                studentRepository.save(student.get());
            }
            return student.get().getSupervisor();
        } 
        return null;
    }

    public Supervisor changeSupervisorOfStudent(int id, int supervisorId){

        Optional<Student> student = studentRepository.findById(id);
        Optional<Supervisor> supervisor = supervisorRepository.findById(supervisorId);

         if (student.isPresent() && supervisor.isPresent()){
            student.get().setSupervisor(supervisor.get());

            studentRepository.save(student.get());
            return student.get().getSupervisor();
        } 
        return null; 
    }

    public boolean removeSupervisorOfStudent(int id){
       Optional<Student> student = studentRepository.findById(id);

         if (student.isPresent()){
            student.get().setSupervisor(null);

            studentRepository.save(student.get());
            return true;
        }
        return false;
    }

    // address
    public Address getStudentAddress(int id){
        Optional<Student> student = studentRepository.findById(id);

        if (student.isPresent()){
            return student.get().getAddress();
        }
        return null;
    }

    public Address addStudentAddress(int id, Address address){
        Optional<Student> student = studentRepository.findById(id);
        
        Address createdAddress = addressBusinessService.addAddress(address);

        if (student.isPresent()){
            student.get().setAddress(createdAddress);
            studentRepository.save(student.get());
            return createdAddress;
        }
        return null;
    }

    public Address changeStudentAddress(int id, Address address){
        Optional<Student> student = studentRepository.findById(id);
        int addressId = student.get().getAddress().getId();

        Address updatedAddress = addressBusinessService.updateAddress(addressId, address);

        if (student.isPresent()){
            student.get().setAddress(updatedAddress);
            studentRepository.save(student.get());
            return updatedAddress;
        }
        return null;
    }

    // education

}
