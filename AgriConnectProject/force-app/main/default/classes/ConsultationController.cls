public with sharing class ConsultationController {
    @AuraEnabled(cacheable=true)
    public static List<Consultation__c> getConsultations() {
        return [
            SELECT Id, Name, Consultation_Topic__c, Consultation_DateTime_c__c, Date_of_Birth__c,
                   Expert_c__c, Farmer_c__c, Message__c, Mode_c__c, Notes_c__c,
                   Rating_c__c, Status_c__c, Subject__c, Topic_c__c
            FROM Consultation__c
        ];
    }
}
