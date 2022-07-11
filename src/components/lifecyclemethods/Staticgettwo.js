import React, { Component } from "react";

class Staticgettwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Currentvalue: 0,
    };
  }
      static getDerivedStateFromProps(props,state){
  {
      return{
          Currentvalue:props.increase
      }
  };
      }
//   componentDidMount() {
//     this.setState({ Currentvalue: this.props.increase });
//   }
  render() {
    return (
      <div>
        <h2>Staticgettwo</h2>
        <h3>current value:{this.state.Currentvalue}</h3>
      </div>
    );
  }
}
export default Staticgettwo;
