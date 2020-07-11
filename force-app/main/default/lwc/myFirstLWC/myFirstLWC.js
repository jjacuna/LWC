import { LightningElement, track } from 'lwc';

export default class myFirstLWC extends LightningElement {
    @track searchTerm;

    handleNewSearch(event){
        this.searchTerm = event.taget.value;
    }
}