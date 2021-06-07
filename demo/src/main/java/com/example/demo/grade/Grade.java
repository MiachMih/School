package com.example.demo.grade;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "grade")
public class Grade {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private int studentId;
    private String subjectId;
    private String grade;
    private int teacherId;
    private String teacherName;

    public Grade(){}

    public Grade(int id, int studentId, String subjectId){
        this.id = id;
        this.setStudentId(studentId);
        this.setSubjectId(subjectId);
    }

    public Grade(int studentId, String subjectId){
        this.setStudentId(studentId);
        this.setSubjectId(subjectId);
    }

    public int getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public int getId(){
        return this.id;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(String subjectId) {
        this.subjectId = subjectId;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }
}
