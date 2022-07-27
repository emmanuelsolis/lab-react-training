
import React from 'react'

function BoxColor({r,g,b}) {
    const backgroundColor ={
        background: `rgb(${r},${g},${b})`
    }
  return (
    <div className='box-color' style={backgroundColor}>
        <h4 className="text-center">
            rgb( {r},{g},{b} )
        </h4>
    </div>
  )
}

export default BoxColor