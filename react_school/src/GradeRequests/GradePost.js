import React, {Component} from 'react'
import GradeGetStudents from './GradeGetStudents.js'
import GradeGetSubjects from './GradeGetSubjects.js'
import axios from 'axios'

class GradePost extends Component{
    constructor(props){
        super(props)
        this.state = {
            studentId: "",
            subjectId: "",
            regexp: /^[a-zA-Z0-9\b]+$/
        }
        this.submitHandler = this.submitHandler.bind(this)
    }

    changeHandler = (e) => {
      let subject = e.target.value
      if (subject === "" || this.state.regexp.test(subject)){
      this.setState({[e.target.name]: subject})
      }
    }

    submitHandler(e){
      if(this.state.studentId.trim() === "" || this.state.subjectId.trim() === ""){return}
      axios.post('http://localhost:8080/school/grade',
                  {studentId: this.state.studentId, subjectId: this.state.subjectId})
      .then(response => {
        this.setState({studentId: "",subjectId: ""})
        this.props.post()
      })
      .catch(error => {
        console.log(error)
      })
    }

    render(){
      return(
        <form onSubmit={this.submitHandler}>
          <label>student </label>
          <select name="studentId" onChange={this.changeHandler}>
          <option key="student_empty">Choose a student</option>
            <GradeGetStudents />
          </select>
          <label> subject </label>
          <select name="subjectId" onChange={this.changeHandler}>
          <option key="subject_empty">Choose a subject</option>
            <GradeGetSubjects />
          </select>
          <button type="submit">Add</button>
        </form>
      )}

}

export default GradePost