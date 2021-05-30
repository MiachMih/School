import React, {Component} from 'react'
import PeopleDelete from './PeopleDelete.js'
import axios from 'axios'

class PeopleGet extends Component{
  constructor(props){
    super(props)
    this.state = {
      people: [],
      errorMsg: ''
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
      <div>
      {
        people.length ?
        people.map(person => {
          if(this.props.occupation === person.occupation) {
          return <div key={person.id}><PeopleDelete id={person.id} delete={this.props.delete}/> id:{person.id} name:{person.fname} {person.lname}</div>
        }
        return null;
      }) :
        null
      }
      {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
      )
    }

  }

export default PeopleGet
