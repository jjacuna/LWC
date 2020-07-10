import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {

    //Track this parameter since its value will be returned to the 
    //HTML broswer
    @track currentResult;

    //this array tracks past calculations
    @track previousResult=[];

    //variable to track checkbox value to 
    //dynamically show/hide previous calculations
    @track showPreviousResults = false;

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


    //add method
    addHandler(){
        //convert string to integers
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //cacluates and create string as result
        this.currentResult = `Result of ${firstN} + ${secondN} is ${firstN + secondN}`;
        
        //add result to array for historic calculations
        this.previousResult.push(this.currentResult);
    
    }

    //subtrack method
    subHandler(){
        //convert string to integers
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //cacluates and create string as result
        this.currentResult = `Result of ${firstN} - ${secondN} is ${firstN - secondN}`;
    
        //add result to array for historic calculations
        this.previousResult.push(this.currentResult);
    }

    //multiply method
    multiplyHandler(){
        //convert string to integers
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //cacluates and create string as result
        this.currentResult = `Result of ${firstN} x ${secondN} is ${firstN * secondN}`;
        
        //add result to array for historic calculations
        this.previousResult.push(this.currentResult);   
    }


    //division method
    divisionHandler(){
        //convert string to integers
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //cacluates and create string as result
        this.currentResult = `Result of ${firstN} / ${secondN} is ${firstN / secondN}`;
    
        //add result to array for historic calculations
        this.previousResult.push(this.currentResult);
    }

    //method that toggles from the checkbox input
    showPreviousResultToggle(event){
        //update the value of the input checkbox to save to 
        //variable showPreviousResultToggle
        this.showPreviousResults = event.target.checked;
        console.log(this.showPreviousResults)

    }


}