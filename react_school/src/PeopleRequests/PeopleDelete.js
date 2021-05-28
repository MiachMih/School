import React, {Component} from 'react'
import axios from 'axios'

class PeopleDelete extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
    this.onClickHandle = this.onClickHandle.bind(this)
  }

  onClickHandle() {
    axios.delete(`http://localhost:8080/school/people/${this.props.id}`)
    .then(response => {
      this.props.delete()
    })
    .catch(error => {
      console.log(error)
      this.setState({errorMsg: 'Error deleting data'})
    })
  }

    render(){
      return(
            <button type="button" onClick={this.onClickHandle}>x</button>
        )
      }

    }

  export default PeopleDelete
