Feature: Game Search and Launch

Scenario: A logged-out user should find and open a game
    Given I navigate to Boost Casino
    And I allow all cookies
    Then The search input is visible
    And The list of games is visible
    When I search for "Book of Dead"
    Then Only games matching "Book of Dead" should show up
    When I click on the "Play" button for the game with title "Book of Dead"
    Then The game should load successfully
