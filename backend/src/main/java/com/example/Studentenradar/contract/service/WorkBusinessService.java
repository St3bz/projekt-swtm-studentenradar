package com.example.Studentenradar.contract.service;

import java.time.LocalDate;
import java.time.temporal.WeekFields;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentenradar.contract.model.Work;
import com.example.studentenradar.contract.model.WorkId;
import com.example.studentenradar.contract.repository.WorkRepository;
import com.example.studentenradar.student.service.StudentBusinessService;

@Service
public class WorkBusinessService {
    private WorkRepository workRepository;

    private StudentBusinessService studentBusinessService; 

    @Autowired
    WorkBusinessService(WorkRepository workRepository,
                        StudentBusinessService studentBusinessService) {
        super();
        this.workRepository = workRepository;
        this.studentBusinessService = studentBusinessService;
    }

    public Optional<Work> getById(WorkId id) {
        return workRepository.findById(id);
    }

    public List<Work> getWork() { // not needed, just for testing
        return workRepository.findAll();
    }

    public Work addHours(int studentId, int hours) {
        LocalDate currentDate = LocalDate.now();
        int week = currentDate.get(WeekFields.ISO.weekOfWeekBasedYear());

        WorkId workId = new WorkId(week, studentId);

        if (workRepository.findById(workId).isPresent()){
            return null;
        }
        Work work = new Work(workId, hours);
        work.setStudent(studentBusinessService.getById(studentId).get());
        return workRepository.save(work);
    }

    // not needed ?
    public boolean deleteWork(WorkId id) {
        Optional<Work> work = workRepository.findById(id);

        if (work.isPresent()) {
            workRepository.delete(work.get());
            
            return true;
        }
        return false;
    }

    public Work updateWork(int studentId, int hours) {
        LocalDate currentDate = LocalDate.now();
        int week = currentDate.get(WeekFields.ISO.weekOfWeekBasedYear());

        WorkId workId = new WorkId(week, studentId);
        Optional<Work> work = workRepository.findById(workId);

        if (work.isPresent()){
            work.get().setWorkingHours(hours);
            return workRepository.save(work.get());
        }
        return null;
    }
}
