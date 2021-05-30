package com.example.demo.subject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(path="/school/subject")
public class SubjectController {
    @Autowired
    private SubjectService subjectService;

    @CrossOrigin
    @GetMapping
    public List<Subject> getSubjects() {
        return subjectService.getSubjects();
    }

    @CrossOrigin
    @PostMapping
    public void registerNewSubjects(@RequestBody Subject subject){
        subjectService.addNewSubjects(subject);
    }

    @CrossOrigin
    @DeleteMapping(path="{subjectId}")
    public void deleteSubject(@PathVariable("subjectId") String subjectId){
        subjectService.deleteSubject(subjectId);
    }

    @CrossOrigin
    @PutMapping(path = "{subjectId")
    public void updateSubject(@PathVariable("subjectId") String subjectId,
                              @PathVariable(required = true) Integer teacherId){
        subjectService.updateSubject(subjectId, teacherId);
    }
}
