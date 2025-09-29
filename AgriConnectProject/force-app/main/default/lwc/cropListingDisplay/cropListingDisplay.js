import { LightningElement, wire } from 'lwc';
import getCropListings from '@salesforce/apex/CropListingController.getCropListings';

export default class CropListingDisplay extends LightningElement {
    cropListings;
    error;

    @wire(getCropListings)
    wiredCrops({ error, data }) {
        if (data) {
            this.cropListings = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.cropListings = undefined;
        }
    }
}
