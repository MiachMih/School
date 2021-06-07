package com.example.demo.grade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(path="/school/grade")
public class GradeController {

    @Autowired
    GradeService gradeService;

    @CrossOrigin
    @GetMapping
    public List<Grade> getGrade(){
        return gradeService.getGrade();
    }

    @CrossOrigin
    @PostMapping
    public void registerNewSubjects(@RequestBody Grade grade){
        gradeService.addNewGrade(grade);
    }

    @CrossOrigin
    @DeleteMapping(path="{gradeId}")
    public void deleteSubject(@PathVariable("gradeId") Integer gradeId){
        gradeService.deleteGrade(gradeId);
    }

    @CrossOrigin
    @PatchMapping(path = "{gradeId}")
    public void updateSubject(@PathVariable("gradeId") Integer gradeId,
                              @RequestBody(required = true) Grade grade){
        gradeService.updateGrade(gradeId, grade);
    }
}
