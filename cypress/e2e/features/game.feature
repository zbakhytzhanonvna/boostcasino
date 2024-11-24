Feature: Game Search and Launch

Background:
    Given I am on the BoostCasino homepage

Scenario: A logged-out user should find and open a game
    Then The search input is visible
    And The list of games is visible
    When I search for "Book of Dead"
    Then Only games matching "Book of Dead" should show up
    When I click on the "Play" button for the game with title "Book of Dead"
    Then The game should load successfully
