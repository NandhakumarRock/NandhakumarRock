import React from 'react'
import Arraymt from './Arraymt'

function Arraymap() {
    const hel=[{
        id:1,
        name:'indrakumar',
        company:'episode Tech'
    },
{
    id:2,
    name:'balamurugan',
    company:'episode Tech'
}
]

const Final = hel.map((dar,index)=><Arraymt c={dar} d={index}  />)
  return (
    <div>
        <h1>{Final}</h1>
        hello
        </div>
  )
}
export default Arraymap