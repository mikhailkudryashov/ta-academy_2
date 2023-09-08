import { Component } from '@Core/component';
import type { Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class Wishlist extends Component {
    protected LOCATORS = {
        pickedItem: this.locator.locator('//li[@data-test-name="itemMyPicks"]'),
    };

    public async getPickedProducts(): Promise<Locator[]> {
        await expect(this.LOCATORS.pickedItem).toBeAttached();
        return await this.LOCATORS.pickedItem.all();
    }

    public async getProductId(product: Locator): Promise<string> {
        return (
            (await product.locator('//div[@data-productid]').getAttribute('data-productid')) || ''
        );
    }
}
