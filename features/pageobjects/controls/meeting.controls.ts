export class MeetingControls {
    get meetingHeader() {
        return $('//h1[text()="Meetings"]');
    }

    get scheduleMeetingBtn() {
        return $('//*[contains(text(),"Schedule a Meeting")]/parent::button');
    }

    get backToMeetingsLink() {
        return $('//*[contains(text(),"Back to Meetings")]/parent::a');
    }

    get topicInput(){
        return $('#topic');
    }

    get meetingIDPersonal() {
        return $('#zm-radio-group1-radio-4');
    }

    get saveBtn() {
        return $('//*[contains(text(),"Save")]/parent::button[contains(@class,"save-btn")]');
    }

    get meetingDetails() {
        return $('#tab-detail');
    }
}