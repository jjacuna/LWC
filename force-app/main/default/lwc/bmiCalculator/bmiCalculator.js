import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    //private property *does not autoupdate to HTML
    cardTitle='BMI Calculator';

    weight;
    height;

    //private reactive property
    bmi;


    //need track for non-primative data types to be tracked to be rendered by the UI
    @track bmiData = {
        weight : 0,
        height : 0,
        result : 0

    };

    changePrivateProeprtyHandler(){
        this.carTitle = 'Changed Value';
        console.log('value: '+ this.cardTitle);

    }

    onHeightChange(event){
        this.bmiData.height = parseFloat(event.target.value);

    }

    onWeightChange(event){
        //get input number value, convert to string to float value and assign to weight variable
        this.bmiData.weight = parseFloat(event.target.value);
    }

    calculateBMI (){
        try{
        this.bmiData.result = this.bmiData.weight / (this.bmiData.height * this.bmiData.height);
        } catch (error){
            this.bmiData.Result = undefined;
        }
    }
}