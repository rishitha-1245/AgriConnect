import { LightningElement, wire } from 'lwc';
import getCropListings from '@salesforce/apex/CropListingController.getCropListings';

export default class CropQuickView extends LightningElement {
    crops;
    error;

    @wire(getCropListings)
    wiredCrops({ error, data }) {
        if (data) {
            this.crops = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.crops = undefined;
        }
    }
}
