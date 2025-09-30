import { LightningElement, api } from 'lwc';
import approveOrder from '@salesforce/apex/AgcOrderController.approveOrder';
import cancelOrder from '@salesforce/apex/AgcOrderController.cancelOrder';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class AgcOrderProcessor extends NavigationMixin(LightningElement) {
  @api recordId;

  async handleApprove() {
    try {
      const res = await approveOrder({ orderId: this.recordId });
      this.dispatchEvent(new ShowToastEvent({ title: 'Success', message: res, variant: 'success' }));
      // refresh or navigate
    } catch (error) {
      this.dispatchEvent(new ShowToastEvent({ title: 'Error', message: error.body ? error.body.message : JSON.stringify(error), variant: 'error' }));
    }
  }

  async handleCancel() {
    try {
      const res = await cancelOrder({ orderId: this.recordId });
      this.dispatchEvent(new ShowToastEvent({ title: 'Canceled', message: res, variant: 'warning' }));
    } catch (error) {
      this.dispatchEvent(new ShowToastEvent({ title: 'Error', message: error.body ? error.body.message : JSON.stringify(error), variant: 'error' }));
    }
  }
}
