package com.example.Studentenradar.student.controller;

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

import com.example.Studentenradar.student.model.Address;
import com.example.Studentenradar.student.service.AddressBusinessService;

@RestController
@RequestMapping("/api/v1/addresses")
public class AddressController {
    private AddressBusinessService service;

    @Autowired
    AddressController(AddressBusinessService service) {
        super();
        this.service = service;
    }

    @GetMapping
    public List<Address> getAddresses() {
        return service.getAddresses();
    }

    @PostMapping
    public Address addAddress(@RequestBody Address address) {
        return service.addAddress(address);
    }

    @GetMapping("/{id}")
    public Optional<Address> getAddressById(@PathVariable(name = "id") int id) {
        return service.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteAddress(@PathVariable(name = "id") int id) {
        return service.deleteAddress(id);
    }

    @PutMapping("/update/{id}")
    public Address updateAddress(@RequestBody Address address, @PathVariable(name = "id") int id) {
        return service.updateAddress(id, address);
    }
}
