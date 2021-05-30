package com.example.demo.subject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, String>{
    Optional<Subject> findSubjectById(String id);
    
    @Query("select s from Subject s where s.teacherId = ?1")
    List<Subject> findAllSubjectsByTeacherId(int teacherId);
}
