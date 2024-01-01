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
@Table(name = "student_contract")
public class StudentContract {

    @EmbeddedId
    StudentContractId id;

    @OneToOne
    @MapsId("studentId")
    @JoinColumn(name = "student_id")
    Student student;
    
    @OneToOne
    @MapsId("contractId")
    @JoinColumn(name = "contract_id")
    Contract contract;

    @Column(name = "contract_status")
    private String contractStatus;

    @Column(name = "acceptance_status")
    private Integer acceptanceStatus;

    public StudentContract(){
    }
    
    public StudentContract(StudentContractId id, Student student, Contract contract, String contractStatus,
            int acceptanceStatus) {
        this.id = id;
        this.student = student;
        this.contract = contract;
        this.contractStatus = contractStatus;
        this.acceptanceStatus = acceptanceStatus;
    }

    public StudentContractId getId() {
        return id;
    }

    public void setId(StudentContractId id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }

    public String getContractStatus() {
        return contractStatus;
    }

    public void setContractStatus(String contractStatus) {
        this.contractStatus = contractStatus;
    }

    public int getAcceptanceStatus() {
        return acceptanceStatus;
    }

    public void setAcceptanceStatus(int acceptanceStatus) {
        this.acceptanceStatus = acceptanceStatus;
    } 
}
