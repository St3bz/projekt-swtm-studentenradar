package com.example.studentenradar.contract.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.studentenradar.contract.model.Work;
import com.example.studentenradar.contract.model.WorkId;

@Repository
public interface WorkRepository extends JpaRepository<Work, WorkId> {
}
