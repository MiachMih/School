import React, {Component} from 'react'
import axios from 'axios'

class GradeSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentGrade:this.props.grade.grade
        }
        this.updateHandler = this.updateHandler.bind(this)
    }

    updateHandler(event){
        let grade = event.target.value
        axios.patch(`http://localhost:8080/school/grade/${this.props.grade.id}`, {grade: event.target.value})
        .then(response => {
            this.setState(prevState => ({currentGrade: grade}))
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })
    }

    render(){
        return(
        <select value={this.state.currentGrade} onChange={this.updateHandler}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>                                                                                            
        </select>
        )}
}

export default GradeSelect