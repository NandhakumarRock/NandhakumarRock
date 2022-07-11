import React, { Component } from 'react'
import Staticgettwo from './Staticgettwo'


class Staticgetderivedfromstatefromprops extends Component {
    constructor(props) {
      super(props)
    
    this.state = {
     count:0
      }
    }
increase = () =>{
    this.setState({count:this.state.count+1})
}
  render() {
    return (
      <div><h3>hello this is a statement</h3>
      <h2>{this.state.count}</h2>
      <button onClick={this.increase}>click her</button>
      <Staticgettwo increase={this.state.count} />
      </div>
    )
  }
}
export default Staticgetderivedfromstatefromprops   