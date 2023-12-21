package com.example.studentenradar.contract.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.studentenradar.contract.model.StudentContract;
import com.example.studentenradar.contract.model.StudentContractId;

@Repository
public interface StudentContractRepository extends JpaRepository<StudentContract, StudentContractId> {
}
