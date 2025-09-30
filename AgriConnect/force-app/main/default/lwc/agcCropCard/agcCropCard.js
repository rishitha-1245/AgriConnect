import { LightningElement, api } from 'lwc';
export default class AgcCropCard extends LightningElement {
  @api crop;

  onView() {
    this.dispatchEvent(new CustomEvent('cropselect', { detail: { id: this.crop.Id } }));
  }
}
