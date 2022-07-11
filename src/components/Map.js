import React from 'react'

function Map() {
    const names =['1','2','3']
  return (
    <div>Map
        {
            names.map(x=><h1>{x*4}</h1>)
        }
    </div>
  )
}

export default Map