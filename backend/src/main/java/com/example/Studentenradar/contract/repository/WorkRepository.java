package com.example.Studentenradar.contract.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Studentenradar.contract.model.Work;
import com.example.Studentenradar.contract.model.WorkId;

@Repository
public interface WorkRepository extends JpaRepository<Work, WorkId> {
}
