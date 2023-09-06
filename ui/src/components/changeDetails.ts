import { Component } from '@Core/component';
import type { Locator } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class ChangeDetails extends Component {
    protected LOCATORS = {
        firstNameInput: this.locator.locator('//input[@placeholder="First Name"]'),
        lastNameInput: this.locator.locator('//input[@placeholder="Last Name"]'),
        saveButton: this.locator.locator('//button[contains(.,"Save")]'),
        closeButton: this.locator.locator('//button[contains(.,"Close")]'),
    };

    public async insertFirstName(firstName: string): Promise<void> {
        await this.LOCATORS.firstNameInput.fill(firstName);
    }

    public async insertLastName(lastName: string): Promise<void> {
        await this.LOCATORS.lastNameInput.fill(lastName);
    }

    public async saveChanges(): Promise<void> {
        await this.LOCATORS.saveButton.click();
    }

    public async close(): Promise<void> {
        await this.LOCATORS.closeButton.click();
    }

    public async changeFullName(firstName: string, lastName: string): Promise<void> {
        await this.insertFirstName(firstName);
        await this.insertLastName(lastName);
        await this.saveChanges();
        await this.close();
    }
}
