import React, { Component } from 'react'

class Userform extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         topics:''
      }
    }
    eventhandular=(event)=>{
        this.setState({username:event.target.value});
    }

    submission = () =>{
        alert(`your name is ${this.state.username} and topics ${this.state.topics}`)
    }
    selectchanging = (event) =>{
        this.setState({topics:event.target.value})
    }

  render() {
    return (
      <div>
          <form onSubmit={this.submission}>
          <h1>UserForm</h1>
          <input type="text" value={this.state.username} onChange={this.eventhandular} />
          <select value={this.state.topics} onChange={this.selectchanging}>
              <option value="react">react </option>
              <option value="js">javascript</option>
              <option value="java">java</option>
          </select>
          <input type="submit" value="submit" />
          </form>
      </div>
    )
  }
}
export default Userform