import { LightningElement, track } from 'lwc';
import createCrop from '@salesforce/apex/AgcCropController.createCrop';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class AgcQuickCreateCrop extends NavigationMixin(LightningElement) {
  @track name=''; @track crop=''; @track quantity; @track price;

  handleInput(event) {
    this[event.target.name] = event.target.value;
  }

  async handleSave() {
    try {
      const id = await createCrop({ name: this.name, crop: this.crop, quantity: parseInt(this.quantity,10) || 0, price: parseFloat(this.price) || 0.0, state: null, district: null, farmerId: null });
      this.dispatchEvent(new ShowToastEvent({ title: 'Saved', message: 'Crop created', variant: 'success' }));
      this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: { recordId: id, objectApiName: 'Crop_Listing__c', actionName: 'view' }
      });
    } catch (err) {
      this.dispatchEvent(new ShowToastEvent({ title: 'Error', message: err.body ? err.body.message : JSON.stringify(err), variant: 'error' }));
    }
  }
}
