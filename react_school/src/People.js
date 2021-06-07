import React, {Component} from "react"
import PeoplePost from './PeopleRequests/PeoplePost.js'
import PeopleGet from './PeopleRequests/PeopleGet.js'

class People extends Component{
  constructor(props) {
    super(props);
    this.state = {
      key: 0
    }
    this.setPeoplePostDelete = this.setPeoplePostDelete.bind(this)
  }

  setPeoplePostDelete(){
    this.setState((prevState) => ({key: prevState.key+1}))
  }

  render(){
    return(
      <div className="People">
        <PeopleGet key={this.state.key} delete={this.setPeoplePostDelete} occupation={this.props.occupation}/>
        <PeoplePost post={this.setPeoplePostDelete} occupation={this.props.occupation}/>
      </div>
    )
  }
}

export default People;
