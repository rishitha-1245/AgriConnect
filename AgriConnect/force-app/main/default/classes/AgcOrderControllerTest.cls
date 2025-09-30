@isTest
private class AgcOrderControllerTest {
    @isTest static void testApproveCancel() {
        Order__c o = new Order__c(Name='TOrd1', Status__c='New');
        insert o;
        Test.startTest();
            String res = AgcOrderController.approveOrder(o.Id);
        Test.stopTest();
        o = [SELECT Id, Status__c FROM Order__c WHERE Id = :o.Id];
        System.assertEquals('Approved', o.Status__c);
    }
}
