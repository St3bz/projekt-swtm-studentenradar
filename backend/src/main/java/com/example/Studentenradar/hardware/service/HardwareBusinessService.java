package com.example.studentenradar.hardware.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentenradar.hardware.model.Hardware;
import com.example.studentenradar.hardware.repository.HardwareRepository;

@Service
public class HardwareBusinessService {
    private HardwareRepository hardwareRepository;

    @Autowired
    HardwareBusinessService(HardwareRepository hardwareRepository) {
        super();
        this.hardwareRepository = hardwareRepository;
    }

    public Optional<Hardware> getById(int id) {
        return hardwareRepository.findById(id);
    }

    public List<Hardware> getHardware() {
        return hardwareRepository.findAll();
    }

    public Hardware addHardware(Hardware hardware) {
        return hardwareRepository.save(hardware);
    }

    public boolean deleteHardware(int id) {
        Optional<Hardware> hardware = hardwareRepository.findById(id);

        if (hardware.isPresent()) {
            hardwareRepository.delete(hardware.get());
            return true;
        }
        return false;
    }

    public Hardware updateHardware(int id, Hardware updatedHardware) {
        Optional<Hardware> hardware = hardwareRepository.findById(id);

        if (hardware.isPresent()) {
            Hardware foundHardware = hardware.get();

            foundHardware.setArticle(updatedHardware.getArticle());
            foundHardware.setSpecifications(updatedHardware.getSpecifications());

            return hardwareRepository.save(foundHardware);
        }
        return null;
    }
}
