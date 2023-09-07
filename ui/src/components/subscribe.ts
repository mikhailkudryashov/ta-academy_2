import { Component } from '@Core/component';
import type { Locator } from '@playwright/test';

export class Subscribe extends Component {
    protected LOCATORS = {
        email: this.locator.locator('//input[@name="email"]'),
        singUp: this.locator.locator('//button[contains(., "Sign Up" )]'),
    };

    public async insertEmail(email: string): Promise<void> {
        await this.LOCATORS.email.fill(email);
    }

    public async singUp(): Promise<void> {
        await this.LOCATORS.singUp.click();
    }
}
