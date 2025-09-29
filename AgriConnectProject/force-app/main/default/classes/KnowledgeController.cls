public with sharing class KnowledgeController {
    @AuraEnabled(cacheable=true)
    public static List<Knowledge__c> getKnowledge() {
        return [
            SELECT Id, Name, Title__c, Content__c, CreatedById, LastModifiedById, OwnerId, RecordTypeId
            FROM Knowledge__c
        ];
    }
}
