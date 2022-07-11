import React, { Component } from 'react'
import Propsc from './Propsc'

class Count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      count:0
    }
    }
increase=()=>{
    this.setState({count:this.state.count+1})
}
decrease=()=>{
  this.setState({count:this.state.count-1})
}
  render() {
    return (
      <div>
          <h1>hello {this.state.count}</h1> 
          <h1>{this.props.name}</h1>
          <button onClick={this.increase}>click here</button>
          <Propsc decrese={this.decrease} />
      </div>
    )
  }
}
export default Count