package com.example.studentenradar.hardware.model;

import java.util.List;

import com.example.studentenradar.student.model.Student;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "hardware")
@JsonIgnoreProperties("students")
public class Hardware {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column
    private String article;

    @Column
    private String specifications;

    @Column
    private String availability;

    @ManyToMany(mappedBy = "ownedHardware")
    private List<Student> students;

    public Hardware() {
    }

    public Hardware(int id, String article, String specifications) {
        this.id = id;
        this.article = article;
        this.specifications = specifications;
        this.availability = availability;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getArticle() {
        return article;
    }

    public String getAvailability() {
        return availability;
    }

    public void setArticle(String article) {
        this.article = article;
    }

    public String getSpecifications() {
        return specifications;
    }

    public void setSpecifications(String specifications) {
        this.specifications = specifications;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
      
    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public void addStudent(Student student){
        students.add(student);
    }

    public void removeStudent(Student student){
        students.remove(student);
      
    }

    @Override
    public String toString() {
        return "Hardware [id=" + id + ", article=" + article + ", specifications=" + specifications + ", availiability="
                + availability + "]";
    }
}
