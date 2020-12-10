public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts (String accountId){
        system.debug('Id is >>'+accountId);
        List<Contact> contactList = [SELECT LastName,Title 
                                    FROM CONTACT WHERE Contact.AccountId =:accountId]; 
        return contactList;
    }

}
