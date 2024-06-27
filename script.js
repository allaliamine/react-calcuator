//function that creates the calculator
function Calculator(){
  
    //using state hook to update values on screen
    const [screen, newValue] = React.useState({
        current_value: "0",
        total: "0",
        isFirst: true,
        op:""
    });
    
    function getNumber(number){

        let newNumber

        if (screen.isFirst) {
            newNumber = number;
        }else {
            newNumber = screen.current_value + number;
        }

        newValue({ current_value : newNumber, total: screen.total, isFirst: false, op: screen.op});
    }
    
    function getOperator(number) {
        const total = CalculateResult();


        newValue({current_value: total.toString(), total: total.toString(), isFirst: true, op: number});
    }

    function CalculateResult() {

        let total = parseFloat(screen.total);

        // console.log(screen);

        switch(screen.op){
            case "+":
                total += parseFloat(screen.current_value);
            break;

            case "-":
                total -= parseFloat(screen.current_value);
            break;

            case "*":
                total *= parseFloat(screen.current_value);
            break;

            case "/":
                total /= parseFloat(screen.current_value);
            break;

            default :
            total = parseFloat(screen.current_value);
        }

        return total;
    }
    

    function clearAll(){
        newValue({
            current_value: "0",
            total: "0",
            isFirst: true,
            op:""
        });
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
        
        <CalculatorButton value= "C" onClick={clearAll}/>
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
