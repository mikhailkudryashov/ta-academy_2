import { test, expect } from '@playwright/test';
import { DataLayer } from '@Utils/dataLayer';

test.describe('check product in wishlist', () => {
    test('product in wishlist should be the same as picked', async ({ page, baseURL }) => {
        await page.context().addCookies([
            {
                name: 'OptanonAlertBoxClosed',
                value: new Date().toISOString(),
                url: baseURL,
            },
        ]);
        await page.goto('/', { waitUntil: 'domcontentloaded' });

        const dataLayer = new DataLayer(page);
        const expectedEvent = {
            event: 'CategoryInteraction',
            eventCategory: 'Category - D',
            eventAction: 'Product',
            eventLabel: 'Add to Wishlist',
        };
        const sunglasses = page.locator('//nav//a[contains(., "Sunglasses")]');
        await sunglasses.click();
        await page.waitForLoadState('load');

        await test.step('check url', () => {
            const url = page.url();
            expect(url).toBe(`${baseURL}sunglasses`);
        });

        const product = page.locator('[data-test-name="product"]').first();
        const productId = await product.getAttribute('data-test-id');

        const myPick = product.locator('[data-testid="myPickWrapper"]');
        await myPick.click();
        const myPickIsActive = await myPick.getAttribute('data-test-active');
        expect(myPickIsActive).toBe('true');

        const [event] = await dataLayer.waitForDataLayer({
            event: 'CategoryInteraction',
            eventCategory: 'Category - D',
            eventAction: 'Product',
        });

        expect(event).toStrictEqual(expectedEvent);

        const wishlist = page.locator('[aria-label="View My Picks"]');
        await wishlist.click();
        const pickedItem = page.locator('[data-test-name="itemMyPicks"]');
        const pickedItemId = await pickedItem
            .locator('//div[@data-productid]')
            .getAttribute('data-productid');

        expect(pickedItemId).toBe(productId);
    });
});
