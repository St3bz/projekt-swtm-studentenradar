package com.example.Studentenradar.Controllers;

import java.nio.file.AccessDeniedException;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/test")
public class Controller {

    @GetMapping("/")
    public String publicEndpoint() {
        return "Dieser Endpunkt ist öffentlich zugänglich.";
    }

    @GetMapping("/Administration")
    @PreAuthorize("hasRole('Administration')")
  //  @ResponseStatus(HttpStatus.OK)
    public String adminiEndpoint() {
        return "Dieser Endpunkt ist nur für die ADMINISTRATION zugänglich.";
    }

    @GetMapping("/It")
    @PreAuthorize("hasRole('It')")
  //  @ResponseStatus(HttpStatus.OK)
    public String itEndpoint() {
        return "Dieser Endpunkt ist nur für die IT zugänglich.";
    }

    @GetMapping("/Supervisor")
    @PreAuthorize("hasRole('Supervisor')")
  //  @ResponseStatus(HttpStatus.OK)
    public String supervisorEndpoint() {
        return "Dieser Endpunkt ist nur für die Betreuung zugänglich.";
    }

    @GetMapping("/Ceo")
    @PreAuthorize("hasRole('Ceo')")
  //  @ResponseStatus(HttpStatus.OK)
    public String ceoEndpoint() {
        return "Dieser Endpunkt ist nur für die Geschäftsführung zugänglich.";
    }
}
