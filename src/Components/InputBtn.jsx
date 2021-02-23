import React from 'react';



const InputButton = (props)=>{
  
  const {handlePress, handleClear, addition,handleEval, subtract, division, multiply} = props;
  return(
    <div>
        {props.item === "*"?   <button className={props.class} onClick={() => multiply(props.item)}> {props.item}</button>:
        props.item === "/"?   <button className={props.class} onClick={() => division(props.item)}> {props.item}</button>:
        props.item === "-"?   <button className={props.class} onClick={() => subtract(props.item)}> {props.item}</button>:
        props.item === "="?
            <button className={props.class} onClick={(e)=>handleEval(props.item)}> {props.item}</button>:
        props.item==="+"?
      <button className={props.class} onClick={() =>addition(props.item)}> {props.item}</button>:
        props.item !== "c"?
      <button className={props.class} onClick={(e)=>handlePress(props.item)}> {props.item}</button>
        :
      <button className={props.class} onClick={handleClear}> {props.item}</button>
      }
     
      </div>
  
  )
}

export default InputButton;