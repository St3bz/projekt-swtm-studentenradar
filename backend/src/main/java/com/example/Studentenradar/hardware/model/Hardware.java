package com.example.Studentenradar.hardware.model;

import java.util.List;

import com.example.Studentenradar.student.model.Student;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "hardware")
public class Hardware {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column
    private String article;

    @Column
    private String specifications;

    @ManyToMany(mappedBy = "ownedHardware")
    private List<Student> students;

    public Hardware() {
    }

    public Hardware(int id, String article, String specifications) {
        this.id = id;
        this.article = article;
        this.specifications = specifications;
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

    public void setArticle(String article) {
        this.article = article;
    }

    public String getSpecifications() {
        return specifications;
    }

    public void setSpecifications(String specifications) {
        this.specifications = specifications;
    }

    @Override
    public String toString() {
        return "Hardware [id=" + id + ", article=" + article + ", specifications=" + specifications + "]";
    }
}
