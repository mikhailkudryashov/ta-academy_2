import { Component } from '@Core/component';

export class Header extends Component {
    private LOCATORS = {
        account: this.locator.locator(
            '//button[contains(.,"Welcome") or contains(.,"My Account")]'
        ),
        wishlist: this.locator.locator('[aria-label="View My Picks"]'),
    };

    public async accountClick(): Promise<void> {
        await this.LOCATORS.account.click();
    }

    public async wishlistOpen(): Promise<void> {
        await this.LOCATORS.wishlist.click();
    }
}
