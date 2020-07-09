import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {

    //Track this parameter since its value will be returned to the 
    //HTML broswer
    @track currentResult;

    //These do not need to be tracked since the values do not get 
    //returned to the browser
    firstNumber;
    secondNumber;

    //when the input tags change look at which input name changed
    //then update that new value to the internal variables here 
    //to be used in the calculation handler methods
    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName =='firstNumber'){
            this.firstNumber = event.target.value;
        }else if (inputBoxName == 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }

    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} + ${secondN} is ${firstN + secondN}`;
    
    }

    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} - ${secondN} is ${firstN - secondN}`;
    
    }

    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} x ${secondN} is ${firstN * secondN}`;
    
    }

    divisionHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN} / ${secondN} is ${firstN / secondN}`;
    
    }



}