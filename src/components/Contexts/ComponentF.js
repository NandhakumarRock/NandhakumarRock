import React, { Component } from 'react'
import { UserConsumer } from './Usercontext'


class ComponentF extends Component {
  render() {
    return (
        <UserConsumer>
            {username=>{
                return <h3>hello{username}</h3>
            }

            } 
        </UserConsumer>
    )
  }
}
export default ComponentF