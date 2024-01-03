package com.example.Studentenradar.student.service;

import java.util.List;
import java.util.Optional;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Studentenradar.student.model.Address;
import com.example.Studentenradar.student.repository.AddressRepository;

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

    public Address updateAddress(int id, Address updatedAddress){
        Optional<Address> address = addressRepository.findById(id);

        if (address.isPresent()) {
            Address foundAddress = address.get();

         /*   // copyProperties(Object dest, Object orig)
            try {
                BeanUtils.copyProperties(foundAddress, updatedAddress);
                foundAddress.setId(id); // null properties sollen nicht übernommen werden !!!! extra klasse
                return addressRepository.save(foundAddress);
            } catch (IllegalAccessException | InvocationTargetException e) {

                e.printStackTrace();
            }
            */

            if (updatedAddress.getStreet() != null) {
                foundAddress.setStreet(updatedAddress.getStreet());
            }
    
            if (updatedAddress.getHouseNumber() != 0) {
                foundAddress.setHouseNumber(updatedAddress.getHouseNumber());
            }
    
            if (updatedAddress.getZipCode() != 0) {
                foundAddress.setZipCode(updatedAddress.getZipCode());
            }
    
            if (updatedAddress.getCity() != null) {
                foundAddress.setCity(updatedAddress.getCity());
            }
    
            return addressRepository.save(foundAddress);
        }
    
        return null;
    }
}
