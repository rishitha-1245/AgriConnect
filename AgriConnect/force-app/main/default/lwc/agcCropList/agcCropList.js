import { LightningElement, wire } from 'lwc';
import getCrops from '@salesforce/apex/AgcCropController.getCrops';
import { NavigationMixin } from 'lightning/navigation';

export default class AgcCropList extends NavigationMixin(LightningElement) {
  crops;
  error;
  errorMessage;

  @wire(getCrops)
  wiredCrops({ data, error }) {
    if (data) {
      this.crops = data;
      this.error = undefined;
      this.errorMessage = undefined;
    } else if (error) {
      this.crops = undefined;
      this.error = error;
      this.errorMessage = error.body ? error.body.message : JSON.stringify(error);
    }
  }

  handleCropSelect(event) {
    const cropId = event.detail.id;
    this[NavigationMixin.Navigate]({
      type: 'standard__recordPage',
      attributes: { recordId: cropId, objectApiName: 'Crop_Listing__c', actionName: 'view' }
    });
  }
}
