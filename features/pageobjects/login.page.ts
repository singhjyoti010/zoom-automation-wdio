import loginControls from './login.controls';
import { HomeControls } from './home.controls';

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
        await browser.maximizeWindow();
        await loginControls.emailInputField.setValue(username);
        await loginControls.passwordInputField.setValue(password);
        await loginControls.btnSubmit.click();
        if(await $('.zm-message__content').isDisplayed()){
            await browser.pause(5000);
            await loginControls.btnSubmit.click();
        }
        await browser.saveScreenshot('./some/loginscreenshot.png');
        // await browser.pause(50000);
        console.log('hi all' + await homeControls.userHeader.isExisting());
        await browser.saveScreenshot('./some/screenshot.png');
        await homeControls.userHeader.waitForDisplayed({timeout: 30000});
        console.log(await homeControls.userHeader.isExisting());
    }
}
