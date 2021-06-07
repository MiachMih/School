import React, {Component} from 'react'
import GradeDelete from './GradeDelete.js'
import GradeSelect from './GradeSelect.js'
import axios from 'axios'

class GradeGet extends Component{
    constructor(props){
        super(props)
        this.state = {
            grades:[],
            errorMsg:""
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/school/grade')
        .then(response => {
          this.setState({grades: response.data})
    
        })
        .catch(error => {
          console.log(error)
          this.setState({errorMsg: 'Error retreiving data'})
        })
      }

    render(){
        const {grades, errorMsg} = this.state
      return(
          <div>
              {
            grades.length ?
            grades.map((grade) => {
                return <div key={grade.id}><GradeDelete gradeId={grade.id} delete={this.props.delete}/>{grade.studentId} {grade.subjectId} <GradeSelect grade={grade}/> {grade.teacherId} {grade.teacherName}</div>
            })
            : null
            }
        {errorMsg ? <div>{errorMsg}</div> : null}
        </div>
      )  
    }
}

export default GradeGet