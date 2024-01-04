package com.example.studentenradar.contract.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentenradar.contract.model.Contract;
import com.example.studentenradar.contract.model.StudentContract;
import com.example.studentenradar.contract.model.StudentContractId;
import com.example.studentenradar.contract.repository.StudentContractRepository;
import com.example.studentenradar.student.model.Student;

@Service
public class StudentContractBusinessService {
    private StudentContractRepository studentContractRepository;
    
    private ContractBusinessService contractBusinessService;

    @Autowired
    StudentContractBusinessService(StudentContractRepository studentContractRepository, 
                                    ContractBusinessService contractBusinessService) {
        super();
        this.studentContractRepository = studentContractRepository;

        this.contractBusinessService = contractBusinessService;
    }

    public Optional<StudentContract> getById(StudentContractId id) {
        return studentContractRepository.findById(id);
    }

    public List<StudentContract> getStudentContracts() { // not needed, just for testing
        return studentContractRepository.findAll();
    }

    public boolean deleteStudentContract(StudentContractId id) {
        Optional<StudentContract> studentContract = studentContractRepository.findById(id);

        if (studentContract.isPresent()) {
            studentContractRepository.delete(studentContract.get());
            return true;
        }
        return false;
    }

    public StudentContract updateStudentContract(StudentContractId id, StudentContract updatedStudentContract) {
        Optional<StudentContract> studentContract = studentContractRepository.findById(id);

        if (studentContract.isPresent()) {
            StudentContract foundStudentContract = studentContract.get();

            studentContract.get().setContractStatus(updatedStudentContract.getContractStatus());
            studentContract.get().setAcceptanceStatus(updatedStudentContract.getAcceptanceStatus());

            return studentContractRepository.save(foundStudentContract);
        }
        return null;
    }

    public StudentContract addStudentContract (Contract contract, Student student){
        Contract createdContract = contractBusinessService.addContract(contract);

        StudentContractId id = new StudentContractId(student.getId(), createdContract.getId());
        StudentContract studentContract = new StudentContract(id);

        studentContract.setContract(createdContract);
        studentContract.setStudent(student);
        studentContract.setContractStatus("Vertrag in Bearbeitung");

        studentContractRepository.save(studentContract);
    
        return studentContract;
    }

    public Contract updateContract(StudentContract studentContract, Contract contract){
        studentContract.setContract(contractBusinessService.updateContract(studentContract.getContract().getId(), contract));
        studentContractRepository.save(studentContract);

        return studentContract.getContract();
    }
}

