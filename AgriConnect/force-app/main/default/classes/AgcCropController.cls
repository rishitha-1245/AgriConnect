public with sharing class AgcCropController {
    @AuraEnabled(cacheable=true)
    public static FarmerInfoWrapper getFarmerInfo(Id cropId) {
        // Fetch related farmer (Contact) for a Crop record
        Crop_Listing__c crop = [
            SELECT Id, Name, Farmer__r.Id, Farmer__r.Name, Farmer__r.Phone
            FROM Crop_Listing__c
            WHERE Id = :cropId
            LIMIT 1
        ];

        FarmerInfoWrapper wrapper = new FarmerInfoWrapper();
        if (crop.Farmer__r != null) {
            wrapper.farmerId = crop.Farmer__r.Id;
            wrapper.farmerName = crop.Farmer__r.Name;
            wrapper.farmerPhone = crop.Farmer__r.Phone;
        }
        return wrapper;
    }

    public class FarmerInfoWrapper {
        @AuraEnabled public Id farmerId { get; set; }
        @AuraEnabled public String farmerName { get; set; }
        @AuraEnabled public String farmerPhone { get; set; }
    }
}
