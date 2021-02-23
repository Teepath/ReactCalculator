import React from 'react';
const Output = (props)=>{
  return(
    <div>
     <input type="text" id="result" className="output" value={props.output} readOnly/>
      </div>
  )
}

export default Output