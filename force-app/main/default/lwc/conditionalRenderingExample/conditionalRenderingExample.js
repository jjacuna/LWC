import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {

    @track displayDiv = false;

    @track contactList = [
        {
            Id: 1,
            Name: 'Batman',
            Title: 'CEO',
        },
        {
            Id: 2,
            Name: 'Robin',
            Title: 'SideKick',
        },
        {
            Id: 3,
            Name: 'Alfred',
            Title: 'Butler',
        },
    ];

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }

}