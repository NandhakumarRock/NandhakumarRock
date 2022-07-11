import React, { Component } from 'react'

 class Ref extends Component {
     constructor(props) {
       super(props)
       this.inputRef=React.createRef()  //1st method
       this.cbRef=null
       this.setcbRef = element =>{
       this.cbRef = element
       }

     }
     componentDidMount(){
        //  this.inputRef.current.focus() 1st method
        if(this.cbRef){
            this.cbRef.focus()
        }
     }
     handular = () =>{
alert(this.inputRef.current.value)
     }
  render() {    
    return (
      <div><h1>ref</h1>
      <input type='text' ref={this.inputRef}/>
      <input type='text' ref={this.setcbRef}/>

      <button onClick={this.handular}>click here</button>
      </div>
    )
  }
}
export default Ref