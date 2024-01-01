package com.example.Studentenradar.contract.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Studentenradar.contract.model.Contract;
import com.example.Studentenradar.contract.repository.ContractRepository;

@Service
public class ContractBusinessService {
    private ContractRepository contractRepository;

    @Autowired
    ContractBusinessService(ContractRepository contractRepository) {
        super();
        this.contractRepository = contractRepository;
    }

    public Optional<Contract> getById(int id) {
        return contractRepository.findById(id);
    }

    public List<Contract> getContracts() { // not needed, just for testing
        return contractRepository.findAll();
    }

    public Contract addContract(Contract contract) {
        return contractRepository.save(contract);
    }

    public boolean deleteContract(int id) {
        Optional<Contract> contract = contractRepository.findById(id);

        if (contract.isPresent()) {
            contractRepository.delete(contract.get());
            return true;
        }
        return false;
    }

    public Contract updateContract(int id, Contract updatedContract) {
        Optional<Contract> contract = contractRepository.findById(id);

        if (contract.isPresent()) {
            Contract foundContract = contract.get();

            foundContract.setEmploymentType(updatedContract.getEmploymentType());
            foundContract.setStartDate(updatedContract.getStartDate());
            foundContract.setEndDate(updatedContract.getEndDate());
            foundContract.setWeeklyHours(updatedContract.getWeeklyHours());
            foundContract.setSalary(updatedContract.getSalary());

            return contractRepository.save(foundContract);
        }
        return null;
    }
}
