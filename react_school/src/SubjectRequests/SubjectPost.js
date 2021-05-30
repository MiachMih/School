import React, {Component} from 'react'
import SubjectGetTeachers from './SubjectGetTeachers.js'
import axios from 'axios'

class SubjectPost extends Component{
  constructor(props){
    super(props)
    this.state = {
      subjectId: "",
      teacherId: "",
      regexp: /^[a-zA-Z0-9\b]+$/
    }
  }

  changeHandler = (e) => {
    let subject = e.target.value
    if (subject === "" || this.state.regexp.test(subject)){
    this.setState({[e.target.name]: subject})
    }
  }

  submitHandler = (e) =>{
    e.preventDefault()
    if(this.state.subjectId.trim() === "" || this.state.teacherId === "" || !Number(this.state.teacherId)){
     return
   }
    axios.post('http://localhost:8080/school/subject',
                  {id: this.state.subjectId.replace(/\s/g, ''),
                   teacherId: this.state.teacherId})
      .then(response => {
        this.setState({subjectId:"", teacherId:""})
        e.target.reset()
        this.props.post()
      })
      .catch(error => {
        console.log(error)
        this.setState({subjectId:"", teacherId:""})
        e.target.reset()
        return(<div>This subject already exists</div>)
      })

  }

  render(){
    return(
      <div>
        <form onSubmit = {this.submitHandler}>
          <div>
            <input type="text" name="subjectId" value={this.state.subjectId} placeholder="subject id" onChange={this.changeHandler}/>
            <select name="teacherId" onChange={this.changeHandler}>
                <option key="empty">Choose a teacher</option>
                <SubjectGetTeachers />
            </select>
          <button type="submit">Add</button>
          </div>
        </form>
      </div>
      )
    }

  }

export default SubjectPost
