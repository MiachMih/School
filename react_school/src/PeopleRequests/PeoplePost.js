import React, {Component} from 'react'
import axios from 'axios'

class PeoplePost extends Component{
  constructor(props){
    super(props)
    this.state = {
      fName:"",
      lName:"",
      occupation:props.occupation,
      regexp: /^[a-zA-Z\b]+$/
    }
  }

  changeHandler = (e) => {
    let personName = e.target.value
    if (personName === "" || this.state.regexp.test(personName)){
    this.setState({[e.target.name]: personName})
    }
  }

  submitHandler = (e) =>{
    e.preventDefault()
    if(this.state.fName.trim() === "" || this.state.lName.trim() === ""){
     return
   }
    axios.post('http://localhost:8080/school/people',
                  {fname: this.state.fName.replace(/\s/g, ''),
                   lname: this.state.lName.replace(/\s/g, ''),
                   occupation: this.state.occupation})
      .then(response => {
        this.setState({fName:"", lName:""})
        e.target.reset()
        this.props.post()
      })
      .catch(error => {
        console.log(error)
      })

  }

  render(){
    return(
      <div>
        <form onSubmit = {this.submitHandler}>
          <div>
            <input type="text" name="fName" value={this.state.fName} placeholder="first name" onChange={this.changeHandler}/>
            <input type="text" name="lName" value={this.state.lName} placeholder="last name" onChange={this.changeHandler}/>
          <button type="submit">Add</button>
          </div>
        </form>
      </div>
      )
    }

  }

export default PeoplePost