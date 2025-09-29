import { LightningElement, wire } from 'lwc';
import getMarketplaceItems from '@salesforce/apex/MarketplaceController.getMarketplaceItems';

export default class MarketplaceDisplay extends LightningElement {
    items;
    error;

    @wire(getMarketplaceItems)
    wiredItems({ error, data }) {
        if (data) {
            this.items = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.items = undefined;
        }
    }
}
