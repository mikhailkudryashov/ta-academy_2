import { Component } from '@Core/component';

export class Wishlist extends Component {
    private LOCATORS = {
        pickedItemId: this.locator.locator('[data-productid]'),
    };

    public async getFirstProductId(): Promise<string> {
        return await this.LOCATORS.pickedItemId.first().getAttribute('data-productid');
    }
}
