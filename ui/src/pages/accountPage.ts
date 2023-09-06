import { Container } from '@Core/container';
import { MyDetails } from '@Components/myDetails';
import { ChangeDetails } from '@Components/changeDetails';

export class AccountPage extends Container {
    protected LOCATORS = {
        myDetailsButton: this.page.locator('//a[@data-id="myDetails"]'),
        myDetails: this.page.locator('//div[@data-testid="section-myDetails"]'),
        changeDetails: this.page.locator('//div[contains(text(),"Feel free")]/..'),
    };

    public MyDetails = new MyDetails(this.LOCATORS.myDetails, this.page);
    public ChangeDetails = new ChangeDetails(this.LOCATORS.changeDetails, this.page);

    public async goToMyDetails(): Promise<void> {
        await this.LOCATORS.myDetailsButton.click();
    }
}
