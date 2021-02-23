import React from 'react';
import Button from './InputBtn.jsx';



const ButtonLayout = (props)=>{
  
  const {itemA, classA, itemB, classB, itemC, classC, itemD, classD, handleClear, handlePress, addition, handleEval, subtract, division, multiply} = props;
  return(
    <div className="layout">
      <Button item={itemA} class={classA} handlePress={handlePress}
        multiply={multiply}
        />
      <Button item={itemB} class={classB} handlePress={handlePress}
        division={division}
        />
     
      <Button item={itemC} class={classC} handlePress={handlePress}
       addition={addition}
      
        handleEval={handleEval}
        />
       
      { classD ==="clear"?
      <Button item={itemD} class={classD}
        handleClear={handleClear}
        />
      :
     <Button item={itemD} class={classD} handlePress={handlePress}
  subtract={subtract}
       />
      }
      </div>
  )
}
export default ButtonLayout;