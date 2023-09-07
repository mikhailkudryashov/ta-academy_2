import { Component } from '@Core/component';
import type { Locator } from '@playwright/test';

export class Header extends Component {
    protected LOCATORS = {
        account: this.locator.locator(
            '//button[contains(.,"Welcome") or contains(.,"My Account")]'
        ),
    };

    public async accountClick(): Promise<void> {
        await this.LOCATORS.account.click();
    }
}
