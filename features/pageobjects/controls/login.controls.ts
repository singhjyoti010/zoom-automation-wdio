// import { $ } from '@wdio/globals'

class LoginControls {
    /**
     * defining selectors using getter methods related to Login Page
     */
    public get emailInputField () {
        return $("//*[contains(@id, 'email')]");
    }

    public get passwordInputField () {
        return $("//*[contains(@id, 'password')]");
    }

    public get btnSubmit () {
        return $("//*[contains(@id, 'login')]");
    }

    public get errorBanner() {
        return $('.zm-message__content')
    }
}

export default new LoginControls();
