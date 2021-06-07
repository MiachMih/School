package com.example.demo.grade;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import com.example.demo.subject.SubjectRepository;
import com.example.demo.subject.Subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ResponseBody;

@Service
public class GradeService {

    @Autowired
    private SubjectRepository subjectRepository;

    @Autowired
    private GradeRepository gradeRepository;

    public List<Grade> getGrade() {
        return gradeRepository.findAll();
    }

    public void addNewGrade(Grade grade) {
        Optional<Grade> gradeOptional = gradeRepository.findGradeById(grade.getId());
        if(gradeOptional.isPresent()){
            throw new IllegalStateException("id is taken");
        }
        Subject subject = subjectRepository.findById(grade.getSubjectId()).orElseThrow(()->new IllegalStateException(
            "subject with id " + grade.getSubjectId() + " does not exist"));
        for(Grade grd: getGrade()){
            if(Objects.equals(grd.getSubjectId(), subject.getId()) && Objects.equals(grd.getStudentId(), grade.getStudentId())){
                throw new IllegalStateException("subject is already taken");
            }
        }
        grade.setGrade("A");
        grade.setTeacherName(subject.getTeacherName());
        grade.setTeacherId(subject.getTeacherId());      
        gradeRepository.save(grade);
    }
    
    public void deleteGrade(Integer gradeId) {
        boolean exists = gradeRepository.existsById(gradeId);
        if(!exists){
            throw new IllegalStateException("Grade " + gradeId + " does not exist");
        }
        gradeRepository.deleteById(gradeId);
    }

    //@Transactional
    public void updateGrade(Integer gradeId, Grade gradeLetter) {
        Grade grade = gradeRepository.findById(gradeId).orElseThrow(()->new IllegalStateException(
            "grade with id " + gradeId + " do not exist"));
        if (!Objects.equals(grade.getGrade(), gradeLetter.getGrade())){
            grade.setGrade(gradeLetter.getGrade());
            gradeRepository.save(grade);
        }
    }

}
