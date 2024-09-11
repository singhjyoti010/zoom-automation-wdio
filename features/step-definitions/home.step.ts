import { Given, When, Then } from "@wdio/cucumber-framework";
import { LoginPage } from "../pageobjects/login.page";
import { userCredentials } from "../../utils/helperConstants";
import { HomePage } from "../pageobjects/home.page";

const loginPage = new LoginPage();
const homePage = new HomePage();

Given('user1 is at the home page', async () => {
    await browser.url('/signin');
    await loginPage.login(userCredentials.user1, userCredentials.password);
})

When('user1 checks left nav list items', async () => { 
    await homePage.goToMeetings();
})