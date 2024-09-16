import { Given, When, Then } from "@wdio/cucumber-framework";
import { LoginPage } from "../pageobjects/method-defination/login.page";
import { HomePage } from "../pageobjects/method-defination/home.page";
import { userCredentials } from "../../utils/helperConstants";

const loginPage = new LoginPage();
const homePage = new HomePage();

Given("user is at 'Meetings' page", async () =>{
    await browser.url('/signin');
    await loginPage.login(userCredentials.user1, userCredentials.password);
    await homePage.goToMeetings();
})