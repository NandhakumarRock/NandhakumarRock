import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'rock',
         count:0
      }
    }
    integer =()=>{
        this.setState({
            count:this.state.count+1
        })
    }
componentDidMount(){
setInterval(()=>this.setState({
    name:'episodetech',
    count:this.state.count+1

}),2000)
}
  render() {
      console.log('running')
    return (
      <div>
          <h1>hello java</h1> 
          <h2>{this.state.count}</h2>
          <Child name={this.state.name}  a={this.integer}/>
          <button onClick={this.integer}>click her</button>
      </div>
    )
  }
}
export default Parent