import React from "react";
import Output from "./Components/Output.jsx"
import ButtonLayout from "./Components/ButtonLayout.jsx";

import "./styles.scss";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      output: "",
      item0: "0",
      item1: "1",
      item2: "2", 
      item3: "3",
      item4: "4",
       item5: "5",
       item6: "6",
      item7: "7",
       item8: "8",
      item9: "9",
      itemAdd: "+",
      itemSub: "-",
      itemMul: "*",
      itemDiv: "/",
      itemEq: "=",
      itemClear: "c", 
      prevNum:"",
      currentNum:"",
      operator:"",
      display:[],
      legalOperators:[this.props.itemDiv,this.props.itemAdd,this.props.itemMul],
    }; 
  }
  
    handleClear = ()=> {
     console.log("clear")
      this.setState({
        output: "",
        display:""
      })
    }
  
  addition=(val)=>{
    if(this.state.display.length < 1){
      return;
    }
    else if(this.state.display.endsWith(this.state.itemDiv) ||this.state.display.endsWith(this.state.itemMul) ){
      console.log(this.state.display)
        return;
      }
    this.state.prevNum = this.state.display 
    this.setState({
      display: [...this.state.prevNum, val].join(""),
      output: this.state.display.split('')
    }) 
    this.state.operator = this.state.itemAdd;
  
  }
  
   subtract = (val)=>{
     if(this.state.display[0]){
       this.state.prevNum = this.state.display;
       this.setState({
      display:val,
      output:""
    }) 
    }
     
    this.state.prevNum = this.state.display;
    this.setState({
      display: [...this.state.prevNum, val].join(""),
      output:""
    }) 
    this.state.operator = this.state.itemSub;
  }
  
    division=(val)=>{
     if(this.state.display.length < 1){
      return;
    }
      else if(this.state.display.endsWith(this.state.itemDiv) ||this.state.display.endsWith(this.state.itemMul ) ){
        return;
      }
    
      
    this.state.prevNum = this.state.display;
    this.setState({
      display: [...this.state.prevNum, val].join(""),
      output:""
    }) 
    this.state.operator = this.state.itemDiv;
  }
  
   multiply=(val)=>{
     if(this.state.display.length < 1){
      return;
    }
     
     else if(this.state.display.endsWith(this.state.itemAdd)){
       return
      }
    this.state.prevNum = this.state.display;
    this.setState({
      display: [...this.state.prevNum, val].join(""),
      output:""
    }) 
    this.state.operator = this.state.itemMul;
  }
  
  
  handleEval = ()=> {
     
   
    this.state.currentNum = this.state.display;
    if(this.state.display.length ===1){
      return
    }
    if(this.state.operator === this.state.itemAdd){
      this.setState({
        display:"",
       output: Math.floor(eval(this.state.display))
      })
    }else if(this.state.operator === this.state.itemSub){
       if(this.state.output.length ===1){
       this.setState({
         display:"",
         output:""
       })
      }
      
      this.setState({
        display:'',
        output:this.state.currentNum != this.state.item0? Math.floor(eval(this.state.display)):''
      })
    }else if(this.state.operator === this.state.itemDiv){

      this.setState({
        display:'',
        output:this.state.currentNum !== this.state.item0? Math.floor(eval(this.state.display)):''
      })
    
    }else if(this.state.operator === this.state.itemMul){
      this.setState({
        display:'',
        output: Math.floor(eval(this.state.display))
      })
    }else{
      this.setState({
        display:'',
        output:''
      }) ;
    }
    
     console.log(eval(this.state.display))
  }
  
  
  
  handlePress = (item)=>{
    console.log(item)
  if(this.state.display[0] == this.state.item0){
    return;
  }
   if(this.state.display.length <1 && this.state.display[0] != this.state.itemDiv){
    console.log("ok")
    this.setState({
      output: this.state.output + parseInt(item),
      display: [...this.state.display, parseInt(item)].join('')
    })
    } else{
       this.setState({
      output: this.state.output + item,
      display: [...this.state.display, parseInt(item)].join('')
    })
    }
   
  }
  render() {
    return (
      <div className="calculator">
        <Output output={this.state.display? this.state.display: this.state.output}/>
        <ButtonLayout itemA={this.state.item0} classA="digit-0" 
          itemB={this.state.item1} classB="digit-1"
          itemC={this.state.item2} classC="digit-2"
          itemD={this.state.item3} classD="digit-3"
            handleClear={this.handleClear}
            handlePress={this.handlePress}
           state={this.state}
          clear="clear"
          />
         <ButtonLayout itemA={this.state.item4} classA="digit-4" 
          itemB={this.state.item5} classB="digit-5"
          itemC={this.state.item6} classC="digit-6"
          itemD={this.state.item7} classD="digit-7"
           handleClear={this.handleClear}
            handlePress={this.handlePress}
            state={this.state}
           clear="clear"
           itemClear={this.state.itemClear}
          
          />
         <ButtonLayout itemA={this.state.item8} classA="digit-8" 
          itemB={this.state.item9} classB="digit-9"
          itemC={this.state.itemAdd} classC="op-add"
          itemD={this.state.itemSub} classD="op-sub"
           handlePress={this.handlePress}
           handleClear={this.handleClear}
           state={this.state}
           addition={this.addition}
           subtract={this.subtract}
           clear="clear"
          
           itemClear={this.state.itemClear}
          />
          <ButtonLayout itemA={this.state.itemMul} classA="op-mul" 
          itemB={this.state.itemDiv} classB="op-div"
          itemC={this.state.itemEq} classC="eq"
           itemD={this.state.itemClear} classD="clear"
           handleClear={this.handleClear}
            handlePress={this.handlePress}
            handleEval={this.handleEval}
            division={this.division}
            multiply={this.multiply}
            state={this.state}
           
          />
      </div>
    );
  }
}