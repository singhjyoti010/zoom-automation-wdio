import { Given, When, Then } from "@wdio/cucumber-framework";
import { LoginPage } from "../pageobjects/method-defination/login.page";
import { HomePage } from "../pageobjects/method-defination/home.page";
import { userCredentials } from "../../utils/helperConstants";
import { MeetingPage } from "../pageobjects/method-defination/meeting.page";

const loginPage = new LoginPage();
const homePage = new HomePage();
const meetingPage = new MeetingPage();

Given("user is at 'Meetings' page", async () => {
    await browser.url('/signin');
    await loginPage.login(userCredentials.user1, userCredentials.password);
    await homePage.goToMeetings();
})

When("user click 'schedule a Meeting'", async() => {
    await meetingPage.clickScheduleMeeting();
})

When("user fills 'Topic', 'When', 'Duration', 'TimeZone', and 'Meeting ID'", async() => {
    await meetingPage.fillMeetingDetails();
})

When("user clicks on 'Save'", async () => {
    await meetingPage.clickSave();
})

Then("meeting should be created", async () => {
    await meetingPage.verifyMeetingCreated();
})