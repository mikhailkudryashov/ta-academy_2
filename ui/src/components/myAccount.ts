import { Component } from '@Core/component';
import type { Locator } from '@playwright/test';

export class MyAccount extends Component {
    private LOCATORS = {
        createAccount: this.locator.locator('//span[contains(., "Create Account")]'),
        myAccount: this.locator.locator('//li[@data-testid="My Account_/customer/account"]/a'),
    };

    public async createAccount(): Promise<void> {
        await this.LOCATORS.createAccount.click();
    }

    public async myAccountClick(): Promise<void> {
        await this.LOCATORS.myAccount.click();
    }
}
