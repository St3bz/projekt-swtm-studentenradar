package com.example.studentenradar.student.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentenradar.hardware.model.Hardware;
import com.example.studentenradar.student.model.Student;
import com.example.studentenradar.student.repository.StudentRepository;

@Service
public class StudentBusinessService {
    private StudentRepository studentRepository;

    @Autowired
    StudentBusinessService(StudentRepository studentRepository) {
        super();
        this.studentRepository = studentRepository;
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

    public List<Hardware> getStudentHardwareById(int id){
         Optional<Student> student = getById(id);

        if (student.isPresent()){
            return student.get().getOwnedHardware();
        }
        return Collections.emptyList();
    }
}
