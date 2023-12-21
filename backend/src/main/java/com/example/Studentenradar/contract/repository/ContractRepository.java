package com.example.studentenradar.contract.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.studentenradar.contract.model.Contract;

@Repository
public interface ContractRepository extends JpaRepository<Contract, Integer> {
}
