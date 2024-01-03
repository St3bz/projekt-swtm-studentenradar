package com.example.Studentenradar.hardware.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Studentenradar.hardware.model.Hardware;

@Repository
public interface HardwareRepository extends JpaRepository<Hardware, Integer> {
}