import React from 'react'

function FRagmentschild() {
    const numbers=[{
        id:1,
        name:'rockers'
    }]
  return (
      
    <React.Fragment>
        {
            numbers.map((item,index)=>(
                <React.Fragment >
                    <h1>title</h1>
                    <h2>{index}{item.id}</h2>
                    </React.Fragment>
            ))
        }
        {/* <td>rock</td>
        <td>rockers</td> */}
        </React.Fragment> 
         )
}
export default FRagmentschild