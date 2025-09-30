import{ LightningElement, api, wire } from 'lwc';
import getFarmerInfo from '@salesforce/apex/AgcCropController.getFarmerInfo';
import { NavigationMixin } from 'lightning/navigation';

export default class AgcFarmerInfo extends NavigationMixin(LightningElement) {
    @api recordId;

    farmerName;
    farmerPhone;
    farmerId;
    errorMessage;

    @wire(getFarmerInfo, { cropId: '$recordId' })
    wiredFarm({ error, data }) {
        if (data) {
            this.farmerName = data.farmerName;
            this.farmerPhone = data.farmerPhone;
            this.farmerId = data.farmerId;
            this.errorMessage = undefined;
        } else if (error) {
            this.errorMessage = error.body ? error.body.message : JSON.stringify(error);
        }
    }

    get showPhone() {
        return this.farmerPhone;
    }

    get farmerPhoneLink() {
        return this.farmerPhone ? `tel:${this.farmerPhone}` : '';
    }

    openFarmerRecord() {
        if (!this.farmerId) return;

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.farmerId,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }
}
