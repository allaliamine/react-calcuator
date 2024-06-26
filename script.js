function Calculator(){
  
    function getNumber(number){
    //   alert("value is : "+ number)
    
    }
    
    function getOperator(){
      
    }
    
    
    return (
      <div className= "calculator">
        
        <div className="screen">0</div>
        
        <CalculatorButton value= "1" onClick={getNumber}/>
        <CalculatorButton value= "2" onClick={getNumber}/>
        <CalculatorButton value= "3" onClick={getNumber}/>
        <CalculatorButton value= "/" onClick={getOperator}/>
        
        <CalculatorButton value= "4" onClick={getNumber}/>
        <CalculatorButton value= "5" onClick={getNumber}/>
        <CalculatorButton value= "6" onClick={getNumber}/>
        <CalculatorButton value= "*" onClick={getOperator}/>
        
        <CalculatorButton value= "7" onClick={getNumber}/>
        <CalculatorButton value= "8" onClick={getNumber}/>
        <CalculatorButton value= "9" onClick={getNumber}/>
        <CalculatorButton value= "-" onClick={getOperator}/>
        
        <CalculatorButton value= "C" onClick={getOperator}/>
        <CalculatorButton value= "0" onClick={getNumber}/>
        <CalculatorButton value= "=" onClick={getOperator}/>
        <CalculatorButton value= "+" onClick={getOperator}/>
        
      </div>
    )
}
  
  
function CalculatorButton(props){
    return (
      <button onClick={ () => props.onClick(props.value) } >{props.value}</button>
    )
}
  
ReactDOM.render(<div className ="container"> <Calculator/> </div>, document.getElementById('root'));
