export class HomeControls {
    /**
     * defining selectors using getter methods related to Home Page
     */
    /**Left nav list items */
    get homeListItem() {
        return $('//*[contains(text(),"Home") and @tracking-id="leftNavOnboarding"]');
    }

    get profileListItem() {
        return $('//*[contains(text(),"Profile") and @tracking-id="leftNavProfile"]');
    }

    get meetingsListItem() {
        return $('//*[@tracking-id="leftNavMeetings"]');
    }

    get webinarsListItem() {
        return $('//*[contains(@tracking-id,"leftNavWebinar")]');
    }

    get personalContactsListItem() {
        return $('//*[contains(@tracking-id,"Contact")]');
    }
    //...

    /**Main section */
    get userHeader() {
        return $('//h3[text()="Emma Grace"]');
    }
}