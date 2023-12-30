package com.example.Studentenradar.supervisor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Studentenradar.supervisor.model.Supervisor;

@Repository
public interface SupervisorRepository extends JpaRepository<Supervisor, Integer>{
}
