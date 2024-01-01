package com.example.studentenradar.student.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentenradar.student.model.Address;
import com.example.studentenradar.student.repository.AddressRepository;

@Service
public class AddressBusinessService {
    private AddressRepository addressRepository;

    @Autowired
    AddressBusinessService(AddressRepository addressRepository) {
        super();
        this.addressRepository = addressRepository;
    }

    public Optional<Address> getById(int id) {
        return addressRepository.findById(id);
    }

    public List<Address> getAddresses() { // not needed, just for testing
        return addressRepository.findAll();
    }

    public Address addAddress(Address address) {
        return addressRepository.save(address);
    }

    public boolean deleteAddress(int id) {
        Optional<Address> address = addressRepository.findById(id);

        if (address.isPresent()) {
            addressRepository.delete(address.get());
            return true;
        }
        return false;
    }

    public Address updateAddress(int id, Address updatedAddress) {
        Optional<Address> address = addressRepository.findById(id);

        if (address.isPresent()) {
            Address foundAddress = address.get();

            foundAddress.setStreet(updatedAddress.getStreet());
            foundAddress.setHouseNumber(updatedAddress.getHouseNumber());
            foundAddress.setZipCode(updatedAddress.getZipCode());
            foundAddress.setCity(updatedAddress.getCity());

            return addressRepository.save(foundAddress);
        }
        return null;
    }
}
