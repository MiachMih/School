package com.example.demo.people;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@RestController // This means that this class is a Controller
@CrossOrigin
@RequestMapping(path="/school/people") // This means URL's start with /demo (after Application path)
public class PeopleController {

  @Autowired
  private PeopleService peopleService;

  @CrossOrigin
  @GetMapping
  public List<People> getPeople() {
    // This returns a JSON or XML with the users
    return peopleService.getPeople();
  }
  @CrossOrigin
  @PostMapping
  public void registerNewPeople(@RequestBody People people){
    peopleService.addNewpeople(people);
  }
  @CrossOrigin
  @DeleteMapping(path="{peopleId}")
  public void deletePeople(@PathVariable("peopleId") Integer peopleId,
                           @PathVariable(required = false) String fName,
                           @PathVariable(required = false) String lName,
                           @PathVariable(required = false) String occupation){
    peopleService.deletePeople(peopleId);
  }
  @CrossOrigin
  @PutMapping(path = "{peopleId}")
  public void updatePeople(@PathVariable("peopleId") Integer peopleId,
                           @PathVariable(required = false) String fName,
                           @PathVariable(required = false) String lName,
                           @PathVariable(required = false) String occupation){
      peopleService.updatePeople(peopleId, fName, lName, occupation);
  }
}
