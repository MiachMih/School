import React, {Component} from 'react'
import axios from 'axios'

class GradeGetSubjects extends Component{

    constructor(props){
        super(props)
        this.state = {
            subjects:[],
            errorMsg:""
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:8080/school/subject")
        .then(response => {
            this.setState({subjects: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render(){
        const {subjects, errorMsg} = this.state
        return(
            subjects.length ?
            subjects.map(subject => 
            <option key={subject.id} value={subject.id}>{subject.id} by {subject.teacherName} id: {subject.teacherId} </option>)
            : <option key="-1" value ={null}>{errorMsg}</option>
            )
    }
}

export default GradeGetSubjects