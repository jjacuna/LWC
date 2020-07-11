import { LightningElement, track } from 'lwc';

export default class LeadList extends LightningElement {
    @track leads=[];
    @track searchTerm;


    handleSearchTermChange(event){
        this.searchTerm = event.target.value;
        const selectedEvent = new CustomEvent('newsearch', {detail: this.searchTerm});
        this.dispatchEvent(selectedEvent);
    }

    leads = [
        {
            "Id" : "LeadRef1",
            "Name": "Bruce Wayne",
            "Title": "CEO",
            "Company": "Wayne Enterprise",
            "Street" : "1 gateway plaza",
            "City": "Los Angeles",
            "State": "CA",
            "PostalCode": "90012"
        },
        {
            "Id" : "LeadRef2",
            "Name": "Tony Stark",
            "Title": "CEO",
            "Company": "Stark Industries",
            "Street" : "1 letterman drive",
            "City": "San Francisco",
            "State": "CA",
            "PostalCode": "94129"
        },
    ]
}