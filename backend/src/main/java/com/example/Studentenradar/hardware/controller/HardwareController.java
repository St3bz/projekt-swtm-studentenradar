package com.example.studentenradar.hardware.controller;

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

import com.example.studentenradar.hardware.model.Hardware;
import com.example.studentenradar.hardware.service.HardwareBusinessService;

@RestController
@RequestMapping("/api/v1/hardware")
public class HardwareController {
    private HardwareBusinessService service;

    @Autowired
    HardwareController(HardwareBusinessService service) {
        super();
        this.service = service;
    }

    @GetMapping
    public List<Hardware> getHardware() {
        return service.getHardware();
    }

    @PostMapping
    public Hardware addHardware(@RequestBody Hardware hardware) {
        return service.addHardware(hardware);
    }

    @GetMapping("/{id}")
    public Optional<Hardware> getHardwareById(@PathVariable(name = "id") int id) {
        return service.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteHardware(@PathVariable(name = "id") int id) {
        return service.deleteHardware(id);
    }

    @PutMapping("/update/{id}")
    public Hardware updateHardware(@RequestBody Hardware hardware, @PathVariable(name = "id") int id) {
        return service.updateHardware(id, hardware);
    }
}
