import React, {Component} from "react"
import People from "./People.js"

class Teachers extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div className="Teachers">
        <h1>Teachers</h1>
        <People occupation="teacher" />
      </div>
    )
  }
}

export default Teachers;
