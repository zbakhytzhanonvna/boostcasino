import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from "../pageobjects/HomePage";

const homePage = new HomePage();

Then('The search input is visible', (): void => {
    homePage.verifySearchInputIsVisible();
});

Then('The list of games is visible', (): void => {
    homePage.verifyGameListIsVisible();
});

Then('Only games matching {string} should show up', (gameTitle: string): void => {
    homePage.verifyGamesMatchingTitleAreVisible(gameTitle);
});

When('I search for {string}', (gameTitle: string): void => {
    homePage.searchForGame(gameTitle);
});

When('I click on the "Play" button for the game with title {string}', (gameTitle: string): void => {
    homePage.clickPlayButtonForGame(gameTitle);
});

Then('The game should load successfully', (): void => {
    homePage.verifyGameIsLoaded();
});
