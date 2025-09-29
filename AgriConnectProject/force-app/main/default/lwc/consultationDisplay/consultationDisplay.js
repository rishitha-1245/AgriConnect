import { LightningElement, wire } from 'lwc';
import getConsultations from '@salesforce/apex/ConsultationController.getConsultations';

export default class ConsultationDisplay extends LightningElement {
    consultations;
    error;

    @wire(getConsultations)
    wiredConsultations({ error, data }) {
        if (data) {
            this.consultations = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.consultations = undefined;
        }
    }
}
