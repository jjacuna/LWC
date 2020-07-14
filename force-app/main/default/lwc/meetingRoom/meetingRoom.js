import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {

    //declare public property
    //this will be an object that holds {"roomName": "A-01", "roomCapacity":12}
    //value will come from parent component
    @api meetingRoomInfo;
    @api showRoomInfo = false;
}