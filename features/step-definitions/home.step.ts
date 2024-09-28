import { Given, When } from "@wdio/cucumber-framework";
import { LoginPage } from "../pageobjects/method-defination/login.page";
import { userCredentials } from "../../utils/helperConstants";
import { HomePage } from "../pageobjects/method-defination/home.page";

const loginPage = new LoginPage();
const homePage = new HomePage();

Given('user1 is at the home page', async () => {
    await loginPage.login(userCredentials.user1, userCredentials.password);
})

When('user1 checks left nav list items', async () => { 
    await homePage.goToMeetings();
})