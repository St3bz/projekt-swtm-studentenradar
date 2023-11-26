package com.example.Studentenradar;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class Controller {

    @GetMapping("/public")
    public String publicEndpoint() {
        return "Dieser Endpunkt ist öffentlich zugänglich.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('Administration')")
    public String adminEndpoint() {
        return "Dieser Endpunkt ist nur für die Verwaltung zugänglich.";
    }
}
