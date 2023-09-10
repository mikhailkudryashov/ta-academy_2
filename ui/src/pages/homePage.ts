import { FeaturedIn } from '@Components/featuredIn';
import { Container } from '@Core/container';
import { MyAccount } from '@Components/myAccount';
import { Registration } from '@Components/registration';
import { Header } from '@Components/header';
import { Subscribe } from '@Components/subscribe';

export class HomePage extends Container {
    private LOCATORS = {
        featuredIn: this.page.locator('//section[contains(., "As featured in.")]'),
        myAccount: this.page.locator(
            '//div[contains(@class, "myAccountAndOrders__tooltipContainer")]'
        ),
        registration: this.page.locator('//div[contains(@class, "newRegisterPopup__wrap")]'),
        header: this.page.locator('//header[@id="page-header"]'),
        subscribe: this.page.locator('//footer/div[1]'),
    };

    public FeaturedIn = new FeaturedIn(this.LOCATORS.featuredIn, this.page);
    public MyAccount = new MyAccount(this.LOCATORS.myAccount, this.page);
    public Registration = new Registration(this.LOCATORS.registration, this.page);
    public Header = new Header(this.LOCATORS.header, this.page);
    public Subscribe = new Subscribe(this.LOCATORS.subscribe, this.page);

    public async open(): Promise<void> {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
}
