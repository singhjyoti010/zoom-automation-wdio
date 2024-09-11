import { HomeControls } from "./home.controls";
import { MeetingControls } from "./meeting.controls";

const homeControls = new HomeControls();
const meetingControls = new MeetingControls();

export class HomePage {
    public async goToMeetings() {
        // let mainWin = await browser.getWindowHandle();
        await homeControls.meetingsListItem.click();
        // let allWins = await browser.getWindowHandles();
        // await (meetingControls.meetingHeader).waitForDisplayed({timeout: 5000});
        await expect(meetingControls.meetingHeader).toBeDisplayed();
    }
}