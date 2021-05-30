import React, {Component} from 'react'
import SubjectDelete from './SubjectDelete.js'
import axios from 'axios'

class SubjectGet extends Component{
  constructor(props){
    super(props)
    this.state = {
      subjects: [],
      errorMsg: ''
    }
  }
  componentDidMount(){
    axios.get('http://localhost:8080/school/subject')
    .then(response => {
      this.setState({subjects: response.data})
    })
    .catch(error => {
      console.log(error)
      this.setState({errorMsg: 'Error retreiving data'})
    })
  }

  render(){
    const {subjects, errorMsg} = this.state
    return(
      <div>
      {
        subjects.length ?
        subjects.map(subject => {
          return <div key={subject.id}><SubjectDelete id={subject.id} delete={this.props.delete}/> subject: {subject.id} teacher ID: {subject.teacherId} teacher Name: {subject.teacherName}</div>
      }) :
        null
      }
      {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
      )
    }

  }

export default SubjectGet