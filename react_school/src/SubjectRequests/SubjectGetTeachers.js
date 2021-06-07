import React, {Component} from 'react'
import axios from 'axios'

class SubjectGetTeachers extends Component{
    constructor(props){
        super(props)
        this.state = {
            people:[],
            errorMsg: ""
        }   
    }

    componentDidMount(){
        axios.get('http://localhost:8080/school/people')
        .then(response => {
          this.setState({people: response.data})
        })
        .catch(error => {
          console.log(error)
          this.setState({errorMsg: 'Error retreiving data'})
        })
    }

    render(){
        const {people, errorMsg} = this.state
        return(
            people.length?
            people.map(teacher => {
                if("teacher" === teacher.occupation) 
                    return <option key={teacher.id} value={teacher.id}>id:{teacher.id} name:{teacher.lname} {teacher.fname}</option>
                 return null})
            : <option key="-1" value ={null}>{errorMsg}</option>
        )
    }


}

export default SubjectGetTeachers