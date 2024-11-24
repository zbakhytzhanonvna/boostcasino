Feature: Language Switching
  As a user I want to switch languages using the menu dropdown
  So that I can view the website in my preferred language
  
  Background: 
    Given I am on the BoostCasino homepage

  Scenario: A user switches the language using the dropdown
    Then I should see the language dropdown in the header
    When I switch the language to "FI"
    Then the page should be displayed in "Finnish"
    When I switch the language to "EE"
    Then the page should be displayed in "Estonian"
    When I switch the language to "RU"
    Then the page should be displayed in "Russian"
