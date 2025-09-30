@isTest
private class AgcCropControllerTest {
    @isTest static void testGetCropsAndFarmerInfo() {
        Contact farmer = new Contact(FirstName='Test', LastName='Farmer', Phone='9999999999');
        insert farmer;

        Crop_Listing__c crop = new Crop_Listing__c(
            Name='TestCrop-1',
            Crop__c='Wheat',
            Quantity__c = 10,
            Price__c = 100.0,
            State__c = 'StateX',
            District__c = 'DistrictY',
            Farmer__c = farmer.Id
        );
        insert crop;

        Test.startTest();
            List<Crop_Listing__c> crops = AgcCropController.getCrops();
            System.assert(list.size() > 0);
            Map<String,String> info = AgcCropController.getFarmerInfo(crop.Id);
        Test.stopTest();

        System.assertEquals('Test Farmer', info.get('farmerName'));
    }
}
