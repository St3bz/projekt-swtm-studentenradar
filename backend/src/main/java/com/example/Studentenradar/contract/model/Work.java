package com.example.Studentenradar.contract.model;

import com.example.Studentenradar.student.model.Student;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "work")
public class Work {

    @EmbeddedId
    WorkId id;

    @OneToOne
    @MapsId("studentId")
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    Student student;

    @Column(name = "working_hours")
    private int workingHours;

    public Work() {
    }

    public Work(WorkId id, Student student, int workingHours) {
        this.id = id;
        this.student = student;
        this.workingHours = workingHours;
    }

    public WorkId getId() {
        return id;
    }

    public void setId(WorkId id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public int getWorkingHours() {
        return workingHours;
    }

    public void setWorkingHours(int workingHours) {
        this.workingHours = workingHours;
    }

    @Override
    public String toString() {
        return "Work [id=" + id + ", student=" + student + ", workingHours=" + workingHours + "]";
    }
}
