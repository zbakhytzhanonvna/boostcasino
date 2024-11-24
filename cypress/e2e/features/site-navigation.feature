Feature: MainSite Navigation

  Background:
    Given I am on the BoostCasino homepage from a mobile device

  Scenario: A (logged out) user should be able to browse BoostCasino by the means of the hamburger menu
    When I tap on the hamburger menu
    Then The menu should display the following entries:
      | Home              |
      | Casino            |
      | Live Casino       |
      | Promotions        |
      | Customer Support  |
    When I tap on "Customer Support"
    Then I should be redirected to the "customer-support" page

    When I tap on the hamburger menu
    And I tap on "Casino"
    Then The game categories sub-menu should display the following:
      | Popular          |
      | New              |
      | Slots            |
      | Jackpots         |
      | Buy Feature      |
      | Hot Slots        |
      | Table Games      |
      | Drops & Wins     |
      | Cash Drop        |
      | Arcade           |
      | Cluster Games    |
      | Latest Provider  |
      | Exclusives       |
    When I tap on submenu "Popular"
    Then I should be redirected to the "popular-games" page

    When I tap on the hamburger menu
    And I tap on "Live Casino"
    Then The game categories sub-menu should display the following:
      | Popular    |
      | Game Shows |
      | Roulette   |
      | Blackjack  |
      | Baccarat   |
      | Poker      |

    When I tap on "Promotions"
    Then The game categories sub-menu should display the following:
      | Welcome Bonus            |
      | Boost XP                 |
      | Casino Promotions        |
      | Live Casino Promotions   |
      | All Promotions           |
