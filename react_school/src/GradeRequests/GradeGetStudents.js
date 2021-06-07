import React, {Component} from 'react'
import axios from 'axios'

class GradeGetStudents extends Component{

    constructor(props){
        super(props)
        this.state = {
            students: [],
            errorMsg: ""
        }
    }   

    componentDidMount(){
        axios.get("http://localhost:8080/school/people")
        .then(response => {
            this.setState({students: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render(){
        const {students, errorMsg} = this.state
        return(
            students.length?
            students.map(student =>{
            if(student.occupation === "student"){
                return (<option key={student.id} value={student.id}>{student.id} {student.fname} {student.lname}</option>)
            }else{return null}})
            :<option key="-1" value ={null}>{errorMsg}</option>)
    }

}

export default GradeGetStudents