import { LightningElement, wire } from 'lwc';
import getKnowledge from '@salesforce/apex/KnowledgeController.getKnowledge';

export default class KnowledgeDisplay extends LightningElement {
    knowledgeList;
    error;

    @wire(getKnowledge)
    wiredKnowledge({ error, data }) {
        if (data) {
            this.knowledgeList = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.knowledgeList = undefined;
        }
    }
}
