Feature: Create Meeting
    Scenario: User should create Meeting
        Given user is at 'Meetings' page
        When user click 'schedule a Meeting'
        And user fills 'Topic', 'When', 'Duration', 'TimeZone', and 'Meeting ID'
        And user clicks on 'Save'
        Then meeting should be created