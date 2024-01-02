package com.example.studentenradar.student.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentenradar.hardware.model.Hardware;
import com.example.studentenradar.hardware.service.HardwareBusinessService;
import com.example.studentenradar.project.model.Project;
import com.example.studentenradar.project.service.ProjectBusinessService;
import com.example.studentenradar.student.model.Address;
import com.example.studentenradar.student.model.Education;
import com.example.studentenradar.student.model.Student;
import com.example.studentenradar.student.repository.StudentRepository;
import com.example.studentenradar.supervisor.model.Supervisor;
import com.example.studentenradar.supervisor.service.SupervisorBusinessService;

@Service
public class StudentBusinessService {
    private StudentRepository studentRepository;

    private AddressBusinessService addressBusinessService;
    private EducationBusinessService educationBusinessService;
    private ProjectBusinessService projectBusinessService;
    private SupervisorBusinessService supervisorBusinessService;
    private HardwareBusinessService hardwareBusinessService;

    @Autowired
    StudentBusinessService(StudentRepository studentRepository,
                            AddressBusinessService addressBusinessService, EducationBusinessService educationBusinessService, 
                            ProjectBusinessService projectBusinessService, SupervisorBusinessService supervisorBusinessService,
                            HardwareBusinessService hardwareBusinessService) {
        super();
        this.studentRepository = studentRepository;

        this.addressBusinessService = addressBusinessService;
        this.educationBusinessService = educationBusinessService;
        this.projectBusinessService = projectBusinessService;
        this.supervisorBusinessService = supervisorBusinessService;
        this.hardwareBusinessService = hardwareBusinessService;
    }

    public Optional<Student> getById(int id) {
        return studentRepository.findById(id);
    }

    public List<Student> getStudents() { 
        return studentRepository.findAll();
    }

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public boolean deleteStudent(int id) {
        Optional<Student> student = studentRepository.findById(id);

        if (student.isPresent()) {
            studentRepository.delete(student.get());
            return true;
        }
        return false;
    }

    public Student updateStudent(int id, Student updatedStudent) {
        Optional<Student> student = studentRepository.findById(id);

        if (student.isPresent()) {
            Student foundStudent = student.get();

            if (updatedStudent.getFirstName() != null) {
                foundStudent.setFirstName(updatedStudent.getFirstName());
            }
            if (updatedStudent.getLastName() != null) {
                foundStudent.setLastName(updatedStudent.getLastName());
            }
            if (updatedStudent.getEmail() != null) {
                foundStudent.setEmail(updatedStudent.getEmail());
            }
            if (updatedStudent.getIsKnown() != null) {
                foundStudent.setIsKnown(updatedStudent.getIsKnown());
            }
            if (updatedStudent.getRemark() != null) {
                foundStudent.setRemark(updatedStudent.getRemark());
            }

            return studentRepository.save(foundStudent);
        }
        return null;
    }

    // address
    public Address getStudentAddress(int id){
        Optional<Student> student = studentRepository.findById(id);

        if (student.isPresent()){
            return student.get().getAddress();
        }
        return null;
    }

    public Boolean addStudentAddress(int id, Address address){
        Optional<Student> student = studentRepository.findById(id);
        Address createdAddress = addressBusinessService.addAddress(address);

        if (student.isPresent() && student.get().getAddress() == null){
            student.get().setAddress(createdAddress);
            studentRepository.save(student.get());
            return true;
        }
        return false;
    }

    public Address changeStudentAddress(int id, Address address){
        Optional<Student> student = studentRepository.findById(id);

        if (!student.isPresent()){
            return null;
        }

        int addressId = student.get().getAddress().getId();
        Address updatedAddress = addressBusinessService.updateAddress(addressId, address);

        student.get().setAddress(updatedAddress);
        studentRepository.save(student.get());

        return updatedAddress;
    }


    // education
    public Education getStudentEducation(int id){
        Optional<Student> student = studentRepository.findById(id);

        if (student.isPresent()){
            return student.get().getEducation();
        }
        return null;
    }

    public Boolean addStudentEducation(int id, Education education){
        Optional<Student> student = studentRepository.findById(id);
        Education createdEducation = educationBusinessService.addEducation(education);

        if (student.isPresent() && student.get().getEducation() == null){
            student.get().setEducation(createdEducation);
            studentRepository.save(student.get());
            return true;
        }
        return false;
    }

    public Education changeStudentEducation(int id, Education education){
        Optional<Student> student = studentRepository.findById(id);
        
        if (!student.isPresent()){
            return null;
        }

        int educationId = student.get().getEducation().getId();
        Education updatedEducation = educationBusinessService.updateEducation(educationId, education);

        student.get().setEducation(updatedEducation);
        studentRepository.save(student.get());
        return updatedEducation;
    }

    // supervisor
    public Supervisor getSupervisorOfStudent(int id){
        Optional<Student> student = studentRepository.findById(id);

        if (student.isPresent()){
            return student.get().getSupervisor();
        }
        return null;
    }

    public Supervisor asssignSupervisorToStudent(int id, int supervisorId){

        Optional<Student> student = studentRepository.findById(id);
        Optional<Supervisor> supervisor = supervisorBusinessService.getById(supervisorId);

         if (student.isPresent() && supervisor.isPresent()){
            if (student.get().getSupervisor() == null){
                student.get().setSupervisor(supervisor.get());
                supervisor.get().addStudent(student.get());

                studentRepository.save(student.get());
            }
            return student.get().getSupervisor();
        } 
        return null;
    }

    public Supervisor changeSupervisorOfStudent(int id, int supervisorId){

        Optional<Student> student = studentRepository.findById(id);
        Optional<Supervisor> supervisor = supervisorBusinessService.getById(supervisorId);

         if (student.isPresent() && supervisor.isPresent()){
            student.get().setSupervisor(supervisor.get());

            studentRepository.save(student.get());
            return student.get().getSupervisor();
        } 
        return null; 
    }

    public boolean removeSupervisorOfStudent(int id){
       Optional<Student> student = studentRepository.findById(id);

         if (student.isPresent()){
            student.get().setSupervisor(null);

            studentRepository.save(student.get());
            return true;
        }
        return false;
    }

    // project
    public Project getProjectOfStudent(int id){
        Optional<Student> student = studentRepository.findById(id);

        if (student.isPresent()){
            return student.get().getProject();
        }
        return null;
    }

    public Project asssignProjectToStudent(int id, int projectId){

        Optional<Student> student = studentRepository.findById(id);
        Optional<Project> project = projectBusinessService.getById(projectId);

         if (student.isPresent() && project.isPresent()){
            if (student.get().getProject() == null){
                student.get().setProject(project.get());
                project.get().addStudent(student.get());

                studentRepository.save(student.get());
            }
            return student.get().getProject();
        } 
        return null;
    }

    public Project changeProjectOfStudent(int id, int projectId){

        Optional<Student> student = studentRepository.findById(id);
        Optional<Project> project = projectBusinessService.getById(projectId);

         if (student.isPresent() && project.isPresent()){
            student.get().setProject(project.get());

            studentRepository.save(student.get());
            return student.get().getProject();
        } 
        return null; 
    }

    public Boolean removeProjectOfStudent(int id){
       Optional<Student> student = studentRepository.findById(id);

         if (student.isPresent()){
            student.get().setProject(null);

            studentRepository.save(student.get());
            return true;
        }
        return false;
    }

    // hardware
    public List<Hardware> getStudentHardwareById(int id){
        Optional<Student> student = studentRepository.findById(id);

        if (student.isPresent()){
            return student.get().getOwnedHardware();
        }
        return Collections.emptyList();
    }

    public List<Hardware> addStudentHardware(int id, int hardwareId){
        Optional<Student> student = studentRepository.findById(id);
        Optional<Hardware> hardware = hardwareBusinessService.getById(hardwareId);

        if (student.isPresent() && hardware.isPresent()){
            student.get().addHardware(hardware.get());
            hardware.get().addStudent(student.get());

            studentRepository.save(student.get());
            return getStudentHardwareById(id);
        }
        return Collections.emptyList();
    }

    public Boolean removeStudentHardware(int id, int hardwareId){
        Optional<Student> student = studentRepository.findById(id);
        Optional<Hardware> hardware = hardwareBusinessService.getById(hardwareId);

        if (student.isPresent() && hardware.isPresent() && student.get().getOwnedHardware().contains(hardware.get())){
            student.get().removeHardware(hardware.get());
            hardware.get().removeStudent(student.get());

            studentRepository.save(student.get());
            return true;
        }
        return false;


    }

}
