import { Component } from '@Core/component';
import type { Locator } from '@playwright/test';

export class TopStrip extends Component {
    protected LOCATORS = {
        account: this.locator.locator(
            '//button[contains(.,"Welcome") or contains(.,"My Account")]'
        ),
        createAccount: this.locator.locator('//span[contains(., "Create Account")]'),
        myAccount: this.locator.locator('//li[@data-testid="My Account_/customer/account"]/a'),
    };

    public async accountClick(): Promise<void> {
        await this.LOCATORS.account.click();
    }

    public async createAccount(): Promise<void> {
        await this.LOCATORS.account.hover();
        await this.LOCATORS.createAccount.click();
    }

    public async myAccountClick(): Promise<void> {
        await this.LOCATORS.account.hover();
        await this.LOCATORS.myAccount.click();
    }
}
