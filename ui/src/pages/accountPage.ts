import { Container } from '@Core/container';
import { MyDetails } from '@Components/myDetails';
import { ChangeDetails } from '@Components/changeDetails';

export class AccountPage extends Container {
    private LOCATORS = {
        myDetailsButton: this.page.locator('[data-id="myDetails"]'),
        myDetails: this.page.locator('[data-testid="section-myDetails"]'),
        changeDetails: this.page.locator('//div[contains(text(),"Feel free")]/..'),
    };

    public MyDetails = new MyDetails(this.LOCATORS.myDetails, this.page);
    public ChangeDetails = new ChangeDetails(this.LOCATORS.changeDetails, this.page);

    public async goToMyDetails(): Promise<void> {
        await this.LOCATORS.myDetailsButton.click();
    }
}
