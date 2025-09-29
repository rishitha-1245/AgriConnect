public with sharing class CropListingController {
    @AuraEnabled(cacheable=true)
    public static List<Crop_Listing__c> getCropListings() {
        return [
            SELECT Id, Name, Crop_c__c, Date_of_Birth__c, Farmer_c__c, Price_c__c, Quantity_c__c, Status_c__c, Unit_c__c
            FROM Crop_Listing__c
        ];
    }
}