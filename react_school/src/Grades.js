import React, {Component} from "react"
import GradeGet from "./GradeRequests/GradeGet"
import GradePost from "./GradeRequests/GradePost"

class Grades extends Component {
  constructor(props){
    super(props)
    this.state = {
        key:0
    }
    this.gradePostDelete = this.gradePostDelete.bind(this)
}

gradePostDelete(){
  this.setState((prevState) => ({key:prevState.key+1}))
}

  render(){ 
      return(
      <div className="Grades">
        <h1>Grades</h1>
        <GradeGet key = {this.state.key} delete={this.gradePostDelete}/>
        <GradePost post={this.gradePostDelete}/>
      </div>
      )
  }
}

export default Grades;
