Feature: Login funtionality of Sandbox demo

    Scenario Outline:  Check user can login
        Given I am on the home page
        And I input "<username>" in the "#username" field
        And I input "<password>" in the "#password" field
        And I click on "Log in" button
        Then I should be logged in and see the "<text>"


        Examples:
        
            | username | password  | text      |
            | admin    | sandbox24 | Hi, Admin |
            | manager  | sandbox24 | Hi, Max   |
            | teacher  | sandbox24 | Hi, Terri |
            | student  | sandbox24 | Hi, Sam   |