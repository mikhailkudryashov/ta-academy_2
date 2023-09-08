import { test, expect } from '@Test';
import { CategoryPage } from '@Pages/categoryPage';

test.describe('check product in wishlist', () => {
    test('product in wishlist should be the same as picked', async ({
        page,
        baseURL,
        categoryPage,
        dataLayer,
    }) => {
        await categoryPage.open('sunglasses');

        await test.step('check url', () => {
            const url = page.url();
            expect(url).toBe(`${baseURL}sunglasses`);
        });

        const expectedEvent = {
            event: 'CategoryInteraction',
            eventCategory: 'Category - D',
            eventAction: 'Product',
            eventLabel: 'Add to Wishlist',
        };

        const productId = await categoryPage.FirstProduct.getId();
        await categoryPage.FirstProduct.pick();
        const isMyPickActive = await categoryPage.FirstProduct.isMyPickActive();

        expect(isMyPickActive).toBe('true');

        const [event] = await dataLayer.waitForDataLayer({
            event: 'CategoryInteraction',
            eventCategory: 'Category - D',
            eventAction: 'Product',
        });

        expect(event).toStrictEqual(expectedEvent);

        await categoryPage.Header.wishlistOpen();

        const [pickedItem] = await categoryPage.Wishlist.getPickedProducts();
        console.log(pickedItem);
        const pickedItemId = await categoryPage.Wishlist.getProductId(pickedItem);

        expect(pickedItemId).toBe(productId);
    });
});
