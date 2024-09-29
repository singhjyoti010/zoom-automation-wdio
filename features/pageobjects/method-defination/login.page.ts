import loginControls from '../controls/login.controls';
import { HomeControls } from '../controls/home.controls';

const homeControls = new HomeControls();
/**
 *  page containing specific methods for a specific page
 */
export class LoginPage {

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await browser.url('/signin');
        await browser.maximizeWindow();
        await loginControls.emailInputField.setValue(username);
        await browser.$('.banner-close-button').waitForClickable();
        await loginControls.passwordInputField.setValue(password);
        await browser.$('.banner-close-button').click();
        await browser.$('[aria-label="Open Preferences"]').waitForClickable();
        await loginControls.btnSubmit.click();
        await browser.saveScreenshot('./some/loginscreenshot.png');
        try {
            await loginControls.errorBanner.waitForDisplayed({ timeout: 4000 });
            if(await loginControls.errorBanner.isDisplayed()){
                await browser.pause(5000);
                await loginControls.btnSubmit.click();
            }
        } catch (e) {}
        //console.log('hi all' + await homeControls.userHeader.isExisting());
        await browser.saveScreenshot('./some/screenshot.png');
        await homeControls.userHeader.waitForDisplayed({timeout: 30000});
        await browser.saveScreenshot('./some/screenshot4.png');
        // console.log(await homeControls.userHeader.isExisting());
    }
}
