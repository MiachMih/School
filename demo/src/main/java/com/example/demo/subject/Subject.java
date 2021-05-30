package com.example.demo.subject;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="subject")
public class Subject {
    @Id
    private String id;
    @Column(name="teacherId")
    private Integer teacherId;
    @Column(name="teacherName")
    private String teacherName;
    // @Autowired
    // private PeopleRepository peopleRepository;

    public Subject(){}
    
    public Subject(String id, Integer teacherId){
        this.id = id;
        this.teacherId = teacherId;
        }

    public String getId() {
        return id;
    }

    public Integer getTeacherId() {
        return teacherId;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTeacherId(Integer teacherId) {
        this.teacherId = teacherId;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }
}
