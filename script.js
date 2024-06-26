//function that creates the calculator
function Calculator(){
  
    //using state hook to update values on screen
    const [screen, newValue] = React.useState({
        current_value: "0",
        total: "0",
        op:""
    });
    
    function getNumber(number){
        //   alert("value is : "+ number)
        let newNumber
        if (screen.current_value === "0") {
            // changing 0 to the first value
            newNumber = number;
        }else {
            newNumber = screen.current_value + number;
        }
        newValue({ current_value : newNumber, total: screen.total});
    }
    
    function getOperator(number) {
        newValue()
      
    }

    function CalculateResult() {

        let total = parseInt(screen.total);

        switch(screen.op){
            case "+":
                total += parseInt(screen.current_value);
            break;

            case "-":
                total -= parseInt(screen.current_value);
            break;

            case "*":
                total *= parseInt(screen.current_value);
            break;

            case "/":
                total /= parseInt(screen.current_value);
            break;
        }
    }
    
    
    return (
      <div className= "calculator">
        
        <div className="screen">{screen.current_value}</div>
        
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
  
//function to create buttons and their values 
function CalculatorButton(props){
    return (
      <button onClick={ () => props.onClick(props.value) } >{props.value}</button>
    )
}
  
ReactDOM.render(<div className ="container"> <Calculator/> </div>, document.getElementById('root'));
