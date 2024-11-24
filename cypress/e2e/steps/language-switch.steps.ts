import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pageobjects/HomePage';

const homePage = new HomePage();

Then('I should see the language dropdown in the header', () => {
  cy.get('.sc-hhFzXm').should('be.visible');
});

When('I switch the language to {string}', (language: string) => {
  homePage.switchLanguage(language);
});

Then('the page should be displayed in {string}', (language: string) => {
  homePage.verifyLanguage(language);
});
