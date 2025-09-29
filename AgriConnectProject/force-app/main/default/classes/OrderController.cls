public with sharing class OrderController {
    @AuraEnabled(cacheable=true)
    public static List<Order__c> getOrders() {
        return [
            SELECT Id, Name, Order_ID_c__c, Aadhaar_Number__c, Order_Date_c__c,
                   Buyer_c__c, Finance_Owner__c, Description__c, Order_Status_c__c,
                   Payment_Status_c__c, Price_c__c, Quantity__c, Status_c__c, Total_Amount_c__c, Amount_c__c
            FROM Order__c
        ];
    }
}
