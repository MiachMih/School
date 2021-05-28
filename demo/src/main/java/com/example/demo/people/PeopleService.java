package com.example.demo.people;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import java.util.Optional;import java.util.*;

@Service // This means that this class is a Controller
public class PeopleService {

  @Autowired
  private PeopleRepository peopleRepository;

  public List<People> getPeople() {
    return peopleRepository.findAll();
  }

  public void addNewpeople(People people){
    Optional<People> peopleOptional = peopleRepository.findPeopleById(people.getId());
    if(peopleOptional.isPresent()){
      throw new IllegalStateException("id taken");
    }
    peopleRepository.save(people);
  }

  public void deletePeople(Integer peopleId){
    boolean exists = peopleRepository.existsById(peopleId);
    if(!exists){
      throw new IllegalStateException("people with id "+ peopleId + " does not exist");
    }
    peopleRepository.deleteById(peopleId);
  }

  @Transactional
  public void updatePeople(Integer peopleId,
                           String lName,
                           String fName,
                           String occupation){
    People people = peopleRepository.findById(peopleId)
    .orElseThrow(() -> new IllegalStateException(
    "people with id " + peopleId + "do not exist"));
    if(fName != null && fName.length() > 0 && !Objects.equals(people.getFName(), fName)){
      people.setFName(fName);
    }
    if(lName != null && lName.length() > 0 && !Objects.equals(people.getLName(), lName)){
      people.setLName(lName);
    }
    if(occupation != null && occupation.length() > 0 && (occupation == "teacher" || occupation == "student") && !Objects.equals(people.getOccupation(), occupation)){
      people.setOccupation(occupation);
    }
  }
}
