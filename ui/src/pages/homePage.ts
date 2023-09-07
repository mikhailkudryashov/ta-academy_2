import { FeaturedIn } from '@Components/featuredIn';
import { Container } from '@Core/container';
import { MyAccount } from '@Components/myAccount';
import { Registration } from '@Components/registration';
import { Header } from '@Components/header';

export class HomePage extends Container {
    protected LOCATORS = {
        featuredIn: this.page.locator('//section[contains(., "As featured in.")]'),
        myAccount: this.page.locator('//header[@id="page-header"]/div[2]/div[2]/div/div[2]/div[7]'),
        registration: this.page.locator('//form[@id="form-popup-register"]/../..'),
        header: this.page.locator('//header[@id="page-header"]'),
    };

    public FeaturedIn = new FeaturedIn(this.LOCATORS.featuredIn, this.page);
    public myAccount = new MyAccount(this.LOCATORS.myAccount, this.page);
    public registration = new Registration(this.LOCATORS.registration, this.page);
    public header = new Header(this.LOCATORS.header, this.page);

    public async open(): Promise<void> {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
}
