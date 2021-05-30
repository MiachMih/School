package com.example.demo.subject;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import com.example.demo.people.People;
import com.example.demo.people.PeopleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SubjectService {
    @Autowired
    private SubjectRepository subjectRepository;
    
    @Autowired
    private PeopleRepository peopleRepository;

    public List<Subject> getSubjects(){
        return subjectRepository.findAll();
    }

    public void addNewSubjects(Subject subject) {
        Optional<Subject> subjectOptional = subjectRepository.findSubjectById(subject.getId());
        if(subjectOptional.isPresent()){
            throw new IllegalStateException("id is taken");
        }
        subject.setTeacherName(getTeacherName(subject.getTeacherId()));        
        subjectRepository.save(subject);
    }

    public void deleteSubject(String subjectId) {
        boolean exists = subjectRepository.existsById(subjectId);
        if(!exists){
            throw new IllegalStateException("Subject " + subjectId + " does not exist");
        }
        subjectRepository.deleteById(subjectId);
    }

    public String getTeacherName(int teacherId){
        People teacher = peopleRepository.findById(teacherId)
            .orElseThrow(() -> new IllegalStateException(
                "people with id " + teacherId + "do not exist"));
        return teacher.getLName() + " " + teacher.getFName();
    }

    @Transactional
    public void updateSubject(String subjectId, Integer teacherId){
        Subject subject = subjectRepository.findById(subjectId)
        .orElseThrow(()->new IllegalStateException(
            "subject with id " + subjectId + " do not exist"));
        if(teacherId != null && !Objects.equals(subject.getTeacherId(), teacherId)){
            subject.setTeacherId(teacherId);
            subject.setTeacherName(getTeacherName(teacherId));
        }

    }
}
