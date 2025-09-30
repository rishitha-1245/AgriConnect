public with sharing class AgcOrderController {
    @AuraEnabled
    public static String approveOrder(Id orderId) {
        if (orderId == null) throw new AuraHandledException('Order Id is required');
        // Add your business logic here (update Order__c status etc.)
        Order__c o = [SELECT Id, Status__c FROM Order__c WHERE Id = :orderId LIMIT 1];
        o.Status__c = 'Approved';
        update o;
        return 'Approved';
    }

    @AuraEnabled
    public static String cancelOrder(Id orderId) {
        if (orderId == null) throw new AuraHandledException('Order Id is required');
        Order__c o = [SELECT Id, Status__c FROM Order__c WHERE Id = :orderId LIMIT 1];
        o.Status__c = 'Cancelled';
        update o;
        return 'Cancelled';
    }
}
