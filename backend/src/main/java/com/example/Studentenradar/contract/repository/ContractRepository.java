package com.example.Studentenradar.contract.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Studentenradar.contract.model.Contract;

@Repository
public interface ContractRepository extends JpaRepository<Contract, Integer> {
}
