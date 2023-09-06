import { test, expect } from '@Test';
import { faker } from '@faker-js/faker';

test.describe('create account and change info', () => {
    test('changed account info should be saved', async ({
        homePage,
        page,
        dataLayer,
        baseURL,
        accountPage,
    }) => {
        await homePage.open();

        await homePage.topStrip.accountClick();
        await homePage.topStrip.createAccount();

        await homePage.registration.registration(
            faker.internet.email(),
            faker.person.firstName(),
            faker.person.lastName(),
            faker.internet.password()
        );

        const expectedEvent = {
            event: 'GeneralNonInteraction',
            eventCategory: 'Login',
            eventAction: 'Login Status',
            eventLabel: 'Registered - Email',
        };

        await expect(async () => {
            const [event] = await dataLayer.waitForDataLayer({
                event: 'GeneralNonInteraction',
                eventCategory: 'Login',
                eventAction: 'Login Status',
            });
            expect(event).toStrictEqual(expectedEvent);
        }).toPass();

        await homePage.topStrip.myAccountClick();

        await test.step('check url', () => {
            const url = page.url();
            expect(url).toBe(`${baseURL}customer/account`);
        });

        await accountPage.goToMyDetails();
        await accountPage.MyDetails.editInformation();

        const newDetails = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        };

        await accountPage.ChangeDetails.changeFullName(newDetails.firstName, newDetails.lastName);
        await accountPage.goToMyDetails();

        const customerDetails = {
            firstName: await accountPage.MyDetails.getFirstName(),
            lastName: await accountPage.MyDetails.getLastName(),
        };

        expect(customerDetails).toStrictEqual(newDetails);
    });
});
