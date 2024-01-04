package com.example.Studentenradar.contract.model;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "contract")
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "employment_type")
    private String employmentType;

    @Column(name = "start_date")
    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Column(name = "end_date")
    @Temporal(TemporalType.DATE)
    private Date endDate;

    @Column(name = "weekly_hours")
    private int weeklyHours;

    @Column
    private int salary;

    @OneToOne(mappedBy = "contract", cascade = CascadeType.ALL)
    private StudentContract studentContract;

    public Contract() {
    }

    public Contract(int id, String employmentType, Date startDate, Date endDate, int weeklyHours, int salary) {
        this.id = id;
        this.employmentType = employmentType;
        this.startDate = startDate;
        this.endDate = endDate;
        this.weeklyHours = weeklyHours;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmploymentType() {
        return employmentType;
    }

    public void setEmploymentType(String employmentType) {
        this.employmentType = employmentType;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public int getWeeklyHours() {
        return weeklyHours;
    }

    public void setWeeklyHours(int weeklyHours) {
        this.weeklyHours = weeklyHours;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Contract [id=" + id + ", employmentType=" + employmentType + ", startDate=" + startDate + ", endDate="
                + endDate + ", weeklyHours=" + weeklyHours + ", salary=" + salary + "]";
    }
}
