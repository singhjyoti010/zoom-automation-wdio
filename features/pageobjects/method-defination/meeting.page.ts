import { MeetingControls } from "../controls/meeting.controls";
import { HomePage } from "./home.page";

const meetingControls = new MeetingControls();
const homePage = new HomePage();

export class MeetingPage {
    async clickScheduleMeeting() {
        await homePage.goToMeetings();
        await meetingControls.scheduleMeetingBtn.click();
        await meetingControls.backToMeetingsLink.waitForDisplayed({timeout: 5000});
    }

    async fillMeetingDetails(title: string) {
        await meetingControls.topicInput.setValue(title);
        await meetingControls.meetingIDPersonal.scrollIntoView();
        // await browser.pause(2000);
        const radioButton = await $('#zm-radio-group1-radio-4');
        await browser.execute(el => el.click(), radioButton);
        await meetingControls.meetingIDPersonal.click();
    }

    async clickSave(){
        await meetingControls.saveBtn.click();
        await meetingControls.meetingDetails.waitForDisplayed({timeout: 10000});
    }

    async verifyMeetingCreated() {
        await meetingControls.meetingDetails.isDisplayed();
    }
}