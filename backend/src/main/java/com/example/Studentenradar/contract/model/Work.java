package com.example.studentenradar.contract.model;

import com.example.studentenradar.student.model.Student;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

@Entity
@Table(name = "work")
@JsonIgnoreProperties("student")
public class Work {

    @EmbeddedId
    WorkId id;

    @Column(name = "working_hours")
    private int workingHours;

    @MapsId("studentId")
    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    private Student student;

    public Work() {
    }

    public Work(WorkId id, int workingHours) {
        this.id = id;
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
