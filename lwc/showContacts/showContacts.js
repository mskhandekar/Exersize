import { LightningElement, api, track } from 'lwc';

export default class ShowContacts extends LightningElement {
    @track columns = [{
        label: 'Last Name',
        fieldName: 'LastName',
        type: 'text'
    },
    {
        label: 'Title',
        fieldName: 'Title',
        type: 'text'
    }];

    @api applicationDeveloperContacts = [];
    @api customerSuccessContacts = [];

}
