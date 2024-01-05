package com.example.studentenradar.student.model;

import java.util.ArrayList;
import java.util.List;

import com.example.studentenradar.contract.model.StudentContract;
import com.example.studentenradar.contract.model.Work;
import com.example.studentenradar.hardware.model.Hardware;
import com.example.studentenradar.project.model.Project;
import com.example.studentenradar.supervisor.model.Supervisor;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "student")
@JsonIgnoreProperties("ownedHardware")
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column
    private String email;

    @Column(name = "is_known")
    private Boolean isKnown;

    @Column
    private String remark;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "education_id", referencedColumnName = "id")
    private Education education;

    @JsonBackReference(value="student-project")
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "project_id", referencedColumnName = "id")
    private Project project;
    
    @JsonBackReference(value="student-supervisor")
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "supervisor_id", referencedColumnName = "id")
    private Supervisor supervisor;

    @ManyToMany
    @JoinTable(
        name = "student_hardware",
        joinColumns = @JoinColumn(name = "student_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "hardware_id", referencedColumnName = "id"))
    private List<Hardware> ownedHardware;

    @JsonManagedReference(value = "student-contract")
    @OneToOne(mappedBy = "student")
    private StudentContract studentContract;

    @OneToMany(mappedBy = "student") 
    private List<Work> works = new ArrayList<>();

    public Student() {
    }

    public Student(int id, String firstName, String lastName, String email, Boolean isKnown, String remark) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isKnown = isKnown;
        this.remark = remark;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getIsKnown() {
        return isKnown;
    }

    public void setIsKnown(Boolean isKnown) {
        this.isKnown = isKnown;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Education getEducation() {
        return education;
    }

    public void setEducation(Education education) {
        this.education = education;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Supervisor getSupervisor() {
        return supervisor;
    }

    public void setSupervisor(Supervisor supervisor) {
        this.supervisor = supervisor;
    }

    public List<Hardware> getOwnedHardware() {
        return ownedHardware;
    }

    public void setOwnedHardware(List<Hardware> ownedHardware) {
        this.ownedHardware = ownedHardware;
    }

    public void addHardware(Hardware hardware){
        ownedHardware.add(hardware);
    }

    public void removeHardware(Hardware hardware){
        ownedHardware.remove(hardware);
    }

    public StudentContract getStudentContract() {
        return studentContract;
    }

    public void setStudentContract(StudentContract studentContract) {
        this.studentContract = studentContract;
    }

    @Override
    public String toString() {
        return "Student [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
                + ", isKnown=" + isKnown + ", remark=" + remark + ", address=" + address + ", education=" + education
                + ", project=" + project + ", supervisor=" + supervisor + "]";
    }
}
