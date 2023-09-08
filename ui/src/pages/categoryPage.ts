import { Container } from '@Core/container';
import type { Locator } from '@playwright/test';
import { Product } from '@Components/product';
import { Wishlist } from '@Components/wishlist';
import { Header } from '@Components/header';

export class CategoryPage extends Container {
    protected LOCATORS = {
        product: this.page.locator('[data-test-name="product"]'),
        footer: this.page.locator('//footer[contains(., "Live Chat" )]'),
        wishlist: this.page.locator('//div[@class="mypicks-tab-container"]'),
        header: this.page.locator('//header[@id="page-header"]'),
    };

    public FirstProduct = new Product(this.LOCATORS.product.first(), this.page);
    public Wishlist = new Wishlist(this.LOCATORS.wishlist, this.page);
    public Header = new Header(this.LOCATORS.header, this.page);

    public async open(
        url: 'contact-lenses' | 'sunglasses' | 'eyeglasses-collection'
    ): Promise<void> {
        await this.page.goto(`/${url}`, { waitUntil: 'domcontentloaded' });
    }

    public async scrollProducts(): Promise<void> {
        await this.LOCATORS.footer.scrollIntoViewIfNeeded();
    }

    public async getProducts(): Promise<Locator[]> {
        return await this.LOCATORS.product.all();
    }
}
