import React, {Component} from "react"
import People from "./People.js"

class Students extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
      return(
      <div className="Students">
        <h1>Students</h1>
        <People occupation="student" />
      </div>
    )
  }
}

export default Students;
