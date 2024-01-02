package com.example.studentenradar.student.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentenradar.student.model.Education;
import com.example.studentenradar.student.repository.EducationRepository;

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

            if (updatedEducation.getUniversity() != null) {
                foundEducation.setUniversity(updatedEducation.getUniversity());
            }
            if (updatedEducation.getCourseOfStudy() != null) {
                foundEducation.setCourseOfStudy(updatedEducation.getCourseOfStudy());
            }
            if (updatedEducation.getDesiredDegree() != null) {
                foundEducation.setDesiredDegree(updatedEducation.getDesiredDegree());
            }
            if (updatedEducation.getSemester() != 0) {
                foundEducation.setSemester(updatedEducation.getSemester());
            }
            if (updatedEducation.getAverageGrade() != 0.0) {
                foundEducation.setAverageGrade(updatedEducation.getAverageGrade());
            }

            return educationRepository.save(foundEducation);
        }
        return null;
    }
}
