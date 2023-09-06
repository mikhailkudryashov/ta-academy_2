import { Component } from '@Core/component';
import type { Locator } from '@playwright/test';

export class MyDetails extends Component {
    protected LOCATORS = {
        editInformation: this.locator.locator('//button[contains(.,"Edit Information")]'),
        firstName: this.locator.locator('//div[contains(text(),"First Name")]/.. /div[2]'),
        lastName: this.locator.locator('//div[contains(text(),"Last Name")]/.. /div[2]'),
    };

    public async editInformation(): Promise<void> {
        await this.LOCATORS.editInformation.click();
    }

    public async getFirstName(): Promise<string> {
        return (await this.LOCATORS.firstName.textContent()) || '';
    }

    public async getLastName(): Promise<string> {
        return (await this.LOCATORS.lastName.textContent()) || '';
    }
}
