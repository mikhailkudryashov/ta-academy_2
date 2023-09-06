import { FeaturedIn } from '@Components/featuredIn';
import { Container } from '@Core/container';
import { TopStrip } from '@Components/topStrip';
import { Registration } from '@Components/registration';

export class HomePage extends Container {
    protected LOCATORS = {
        featuredIn: this.page.locator('//section[contains(., "As featured in.")]'),
        topStrip: this.page.locator('//header/div[2]/div[2]'),
        registration: this.page.locator('//form[@id="form-popup-register"]/../..'),
    };

    public FeaturedIn = new FeaturedIn(this.LOCATORS.featuredIn, this.page);
    public topStrip = new TopStrip(this.LOCATORS.topStrip, this.page);
    public registration = new Registration(this.LOCATORS.registration, this.page);

    public async open(): Promise<void> {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
}
