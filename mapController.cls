public with sharing class mapController {
    @AuraEnabled(cacheable=true)
    public static List<XXXXXXXX> getInfo(){
        return[SELECT Id, Customer_Account__c, Origin_City__c, XXXXXXXXXX, OriXXXXXX,
        Destination_City__c, XXXXXXXXXX, Destination_State__c
        FROM XXXXXXXX ORDER BY Name LIMIT 20];
    }
}