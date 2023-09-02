import { test, expect } from '@playwright/test';
import { DataLayer } from '@Utils/dataLayer';
import { faker } from '@faker-js/faker';

test.describe('check subscription event in Datalayer', () => {
    test.beforeEach(async ({ page, baseURL }) => {
        await page.context().addCookies([
            {
                name: 'OptanonAlertBoxClosed',
                value: new Date().toISOString(),
                url: baseURL,
            },
        ]);
        await page.goto('/', { waitUntil: 'domcontentloaded' });
    });
    test('event should fire after click sign up button', async ({ page, baseURL }) => {
        const dataLayer = new DataLayer(page);
        const expectedEvent = {
            event: 'GeneralInteraction',
            eventCategory: 'Footer - D',
            eventAction: 'Newsletter Subscription',
            eventLabel: 'Success',
        };
        const emailInput = page.locator('//footer//input');
        await emailInput.fill(faker.internet.email());

        const signUpButton = page.locator('//footer//button[contains(., "Sign Up" )]');
        await signUpButton.click();

        const [event] = await dataLayer.waitForDataLayer({
            event: 'GeneralInteraction',
            eventCategory: 'Footer - D',
            eventAction: 'Newsletter Subscription',
        });

        expect(event).toStrictEqual(expectedEvent);
    });
});
