public with sharing class FarmerCropController {
    @AuraEnabled(cacheable=true)
    public static List<FarmerCrop__c> getFarmerCrops() {
        return [
            SELECT Id, Name, Crop_Listing__c, Farmer__c, Area_Planted_c__c, Season_c__c, CreatedById, LastModifiedById
            FROM FarmerCrop__c
        ];
    }
}