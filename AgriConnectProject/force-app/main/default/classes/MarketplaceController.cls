public with sharing class MarketplaceController {
    @AuraEnabled(cacheable=true)
    public static List<Marketplace__c> getMarketplaceItems() {
        return [
            SELECT Id, Name, Price__c, Quantity__c, Status_c__c, CreatedById, LastModifiedById, OwnerId
            FROM Marketplace__c
        ];
    }
}
