package com.example.Studentenradar.contract.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Studentenradar.contract.model.Work;
import com.example.Studentenradar.contract.model.WorkId;
import com.example.Studentenradar.contract.repository.WorkRepository;

@Service
public class WorkBusinessService {
    private WorkRepository workRepository;

    @Autowired
    WorkBusinessService(WorkRepository workRepository) {
        super();
        this.workRepository = workRepository;
    }

    public Optional<Work> getById(WorkId id) {
        return workRepository.findById(id);
    }

    public List<Work> getWork() { // not needed, just for testing
        return workRepository.findAll();
    }

    public Work addWork(Work work) {
        return workRepository.save(work);
    }

    public boolean deleteWork(WorkId id) {
        Optional<Work> work = workRepository.findById(id);

        if (work.isPresent()) {
            workRepository.delete(work.get());
            return true;
        }
        return false;
    }

    public Work updateWork(WorkId id, Work updatedWork) {
        Optional<Work> work = workRepository.findById(id);

        if (work.isPresent()) {
            Work foundWork = work.get();
            foundWork.setWorkingHours(updatedWork.getWorkingHours());
            return workRepository.save(foundWork);
        }
        return null;
    }
}
