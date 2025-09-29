import { LightningElement, wire } from 'lwc';
import getFarmerCrops from '@salesforce/apex/FarmerCropController.getFarmerCrops';

export default class FarmerCropDisplay extends LightningElement {
    farmerCrops;
    error;

    @wire(getFarmerCrops)
    wiredFarmerCrops({ error, data }) {
        if (data) {
            this.farmerCrops = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.farmerCrops = undefined;
        }
    }
}
