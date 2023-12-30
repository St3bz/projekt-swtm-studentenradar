package com.example.studentenradar.student.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "education")
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column
    private String university;

    @Column(name = "course_of_study")
    private String courseOfStudy;

    @Column(name = "desired_degree")
    private String desiredDegree;

    @Column
    private int semester;

    @Column(name = "average_grade")
    private float averageGrade;

    public Education() {
    }

    public Education(int id, String university, String courseOfStudy, int semester, float averageGrade) {
        this.id = id;
        this.university = university;
        this.courseOfStudy = courseOfStudy;
        this.semester = semester;
        this.averageGrade = averageGrade;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getCourseOfStudy() {
        return courseOfStudy;
    }

    public void setCourseOfStudy(String courseOfStudy) {
        this.courseOfStudy = courseOfStudy;
    }

    public String getDesiredDegree() {
        return desiredDegree;
    }

    public void setDesiredDegree(String desiredDegree) {
        this.desiredDegree = desiredDegree;
    }

    public int getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }

    public float getAverageGrade() {
        return averageGrade;
    }

    public void setAverageGrade(float averageGrade) {
        this.averageGrade = averageGrade;
    }

    @Override
    public String toString() {
        return "Education [id=" + id + ", university=" + university + ", courseOfStudy=" + courseOfStudy + ", semester="
                + semester + ", averageGrade=" + averageGrade + "]";
    }
}
