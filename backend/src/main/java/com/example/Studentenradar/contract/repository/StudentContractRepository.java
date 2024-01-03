package com.example.Studentenradar.contract.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Studentenradar.contract.model.StudentContract;
import com.example.Studentenradar.contract.model.StudentContractId;

@Repository
public interface StudentContractRepository extends JpaRepository<StudentContract, StudentContractId> {
}
