package com.example.demo.people;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="people")
public class People{
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private int id;
  private String fName;
  private String lName;
  private String occupation;

  public People(){}

    public People(String fName, String lName, String occupation){
      this.fName = fName;
      this.lName = lName;
      this.occupation = occupation;
    }

  public People(int id, String fName, String lName, String occupation){
    this.id = id;
    this.fName = fName;
    this.lName = lName;
    this.occupation = occupation;
  }

  public int getId(){
    return this.id;
  }

  public String getFName(){
    return this.fName;
  }

  public String getLName(){
    return this.lName;
  }

  public String getOccupation(){
    return this.occupation;
  }

  public void setId(int id){
    this.id = id;
  }

  public void setFName(String fName){
    this.fName = fName;
  }

  public void setLName(String lName){
    this.lName = lName;
  }

  public void setOccupation(String occupation){
    this.occupation = occupation;
  }

}
