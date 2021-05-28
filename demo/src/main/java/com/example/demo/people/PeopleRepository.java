package com.example.demo.people;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PeopleRepository extends JpaRepository<People, Integer> {
  // @Query("SELECT p FROM People p WHERE p.id=1")
   Optional<People> findPeopleById(int id);
}
