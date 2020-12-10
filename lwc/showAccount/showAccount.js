import { LightningElement, api, track, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';


export default class ShowAccount extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track numberOfContacts;
    @track applicationDeveloperContacts = [];
    @track customerSuccessContacts = [];
    @track fields = ['Name', 'NumberOfEmployees', 'My_Field__c', 'Phone', 'BillingStreet', 'BillingCity', 'BillingState', 'BillingPostalCode'];


    @wire(getContacts, { accountId: '$recordId' })
    wiredContacts({ data, error }) {
        if (data) {
            let tmpCustomerSuccessContacts = [];
            let tmpApplicationDeveloperContacts = [];
            let count;
            count = data.length;
            for (var i = 0; i < data.length; i++) {
                if (data[i].Title === 'Customer Success') {
                    tmpCustomerSuccessContacts.push(data[i]);
                } else if (data[i].Title === 'Application Developer') {
                    tmpApplicationDeveloperContacts.push(data[i]);
                }

            }
            this.customerSuccessContacts = tmpCustomerSuccessContacts;
            this.applicationDeveloperContacts = tmpApplicationDeveloperContacts;
            this.numberOfContacts = count;
        } else if (error) {
            this.error = error;
        }

    }
}
