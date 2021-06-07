import React, {Component} from "react"
import SubjectGet from "./SubjectRequests/SubjectGet"
import SubjectPost from "./SubjectRequests/SubjectPost"

class Subjects extends Component{
  constructor(props) {
    super(props);
    this.state = {
      key: 0
    }
    this.setSubjectPostDelete = this.setSubjectPostDelete.bind(this)
  }

  setSubjectPostDelete(){
    this.setState((prevState) => ({key: prevState.key+1}))
  }

  render(){
    return(
      <div className="Subjects">
        <h1>Subjects</h1>
        <SubjectGet key={this.state.key} delete={this.setSubjectPostDelete}/>
        <SubjectPost post={this.setSubjectPostDelete}/>
      </div>
    )
  }
}

export default Subjects;
