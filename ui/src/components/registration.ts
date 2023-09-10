import { Component } from '@Core/component';
import type { Locator } from '@playwright/test';

export class Registration extends Component {
    private LOCATORS = {
        email: this.locator.locator('//input[@type="email"]'),
        signUp: this.locator.locator('//button[@type="submit"]'),
        firstName: this.locator.locator('//input[@name="firstName"]'),
        lastName: this.locator.locator('//input[@name="lastName"]'),
        password: this.locator.locator('//input[@name="password"]'),
    };

    public async signUpClick(): Promise<void> {
        await this.LOCATORS.signUp.click();
    }

    public async insertEmail(email: string): Promise<void> {
        await this.LOCATORS.email.fill(email);
    }

    public async insertFirstName(firstName: string): Promise<void> {
        await this.LOCATORS.firstName.fill(firstName);
    }

    public async insertLastName(lastName: string): Promise<void> {
        await this.LOCATORS.lastName.fill(lastName);
    }

    public async insertPassword(password: string): Promise<void> {
        await this.LOCATORS.password.fill(password);
    }

    public async insertInformation(
        firstName: string,
        lastName: string,
        password: string
    ): Promise<void> {
        await this.insertFirstName(firstName);
        await this.insertLastName(lastName);
        await this.insertPassword(password);
    }

    public async registration(
        email: string,
        firstName: string,
        lastName: string,
        password: string
    ): Promise<void> {
        await this.insertEmail(email);
        await this.signUpClick();
        await this.insertInformation(firstName, lastName, password);
        await this.signUpClick();
    }
}
