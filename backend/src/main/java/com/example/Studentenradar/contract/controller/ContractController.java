package com.example.Studentenradar.contract.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Studentenradar.contract.model.Contract;
import com.example.Studentenradar.contract.service.ContractBusinessService;

@RestController
@RequestMapping("/api/v1/contracts")
public class ContractController {
    private ContractBusinessService service;

    @Autowired
    ContractController(ContractBusinessService service) {
        super();
        this.service = service;
    }

    @GetMapping
    public List<Contract> getContract() {
        return service.getContracts();
    }

    @PostMapping
    public Contract addContract(@RequestBody Contract contract) {
        return service.addContract(contract);
    }

    @GetMapping("/{id}")
    public Optional<Contract> getContractById(@PathVariable(name = "id") int id) {
        return service.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteContract(@PathVariable(name = "id") int id) {
        return service.deleteContract(id);
    }

    @PutMapping("/update/{id}")
    public Contract updateContract(@RequestBody Contract contract, @PathVariable(name = "id") int id) {
        return service.updateContract(id, contract);
    }
}
