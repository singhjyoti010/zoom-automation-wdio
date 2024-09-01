import loginControls from './login.controls';

/**
 *  page containing specific methods for a specific page
 */
export class LoginPage {

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await loginControls.emailInputField.setValue(username);
        await loginControls.passwordInputField.setValue(password);
        await loginControls.btnSubmit.click();
    }
}
