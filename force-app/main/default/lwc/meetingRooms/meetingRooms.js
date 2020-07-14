import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {


    meetingRoomsInfo = [
        {roomName : 'A-01', roomCapacity : '12'},
        {roomName : 'A-02', roomCapacity : '11'},
        {roomName : 'A-03', roomCapacity : '10'},
        {roomName : 'B-01', roomCapacity : '9'},
        {roomName : 'B-02', roomCapacity : '10'},
        {roomName : 'B-03', roomCapacity : '13'},
    ];
}