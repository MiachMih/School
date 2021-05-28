import React, {Component} from "react"

class Conditional extends Component{
  constructor(){
    super()
    this.state = {
      isLogged: false,
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount(){
    console.log("online")
  }

  clickHandler(){
    this.setState(prevState => {
      return{isLogged: !prevState.isLogged}
    })
  }

  render(){
    let displayText =  this.state.isLogged ? "Currently Logged in": "Currently Logged out"
    let buttonText = this.state.isLogged ? "Log out" : "Log in"

    return(
      <div>
        <h1>{displayText}</h1>
        <button onClick={this.clickHandler}>{buttonText}</button>
      </div>
    )
  }

}

export default Conditional;
