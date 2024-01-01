package com.example.Studentenradar.student.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Studentenradar.student.model.Education;
import com.example.Studentenradar.student.repository.EducationRepository;

@Service
public class EducationBusinessService {
    private EducationRepository educationRepository;

    @Autowired
    EducationBusinessService(EducationRepository educationRepository) {
        super();
        this.educationRepository = educationRepository;
    }

    public Optional<Education> getById(int id) {
        return educationRepository.findById(id);
    }

    public List<Education> getEducations() { // not needed, just for testing
        return educationRepository.findAll();
    }

    public Education addEducation(Education education) {
        return educationRepository.save(education);
    }

    public boolean deleteEducation(int id) {
        Optional<Education> education = educationRepository.findById(id);

        if (education.isPresent()) {
            educationRepository.delete(education.get());
            return true;
        }
        return false;
    }

    public Education updateEducation(int id, Education updatedEducation) {
        Optional<Education> education = educationRepository.findById(id);

        if (education.isPresent()) {
            Education foundEducation = education.get();

            foundEducation.setUniversity(updatedEducation.getUniversity());
            foundEducation.setCourseOfStudy(updatedEducation.getCourseOfStudy());
            foundEducation.setDesiredDegree(updatedEducation.getDesiredDegree());
            foundEducation.setSemester(updatedEducation.getSemester());
            foundEducation.setAverageGrade(updatedEducation.getAverageGrade());

            return educationRepository.save(foundEducation);
        }
        return null;
    }
}
