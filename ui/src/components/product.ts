import { Component } from '@Core/component';
import type { Locator } from '@playwright/test';

export class Product extends Component {
    protected LOCATORS = {
        myPick: this.locator.locator('[data-testid="myPickWrapper"]'),
    };

    public async pick(): Promise<void> {
        await this.LOCATORS.myPick.click();
    }

    public async getId(): Promise<string> {
        return (await this.locator.getAttribute('data-test-id')) || '';
    }

    public async isMyPickActive(): Promise<string> {
        return (await this.LOCATORS.myPick.getAttribute('data-test-active')) || '';
    }
}
