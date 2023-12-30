package com.example.studentenradar.contract.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class WorkId implements Serializable{

    @Column
    int week;

    @Column(name = "student_id")
    int studentId;

    public WorkId(int week, int studentId) {
        this.week = week;
        this.studentId = studentId;
    }

    public int getWeek() {
        return week;
    }

    public void setWeek(int week) {
        this.week = week;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + week;
        result = prime * result + studentId;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        WorkId other = (WorkId) obj;
        if (week != other.week)
            return false;
        if (studentId != other.studentId)
            return false;
        return true;
    }
}
