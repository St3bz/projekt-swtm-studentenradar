package com.example.studentenradar.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.studentenradar.student.model.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {
}
