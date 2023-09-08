import { HomePage } from '@Pages/homePage';
import { test, expect } from '@Test';
import { faker } from '@faker-js/faker';

test.describe('check subscription event in Datalayer', () => {
    test('event should fire after click sign up button', async ({ homePage, dataLayer }) => {
        await homePage.open();

        const expectedEvent = {
            event: 'GeneralInteraction',
            eventCategory: 'Footer - D',
            eventAction: 'Newsletter Subscription',
            eventLabel: 'Success',
        };

        await homePage.Subscribe.insertEmail(faker.internet.email());
        await homePage.Subscribe.singUp();

        const [event] = await dataLayer.waitForDataLayer({
            event: 'GeneralInteraction',
            eventCategory: 'Footer - D',
            eventAction: 'Newsletter Subscription',
        });

        expect(event).toStrictEqual(expectedEvent);
    });
});
