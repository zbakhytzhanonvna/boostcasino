import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from "../pageobjects/HomePage";

const homePage = new HomePage();

Given('I am on the BoostCasino homepage', () => {
    homePage.visit();
    homePage.acceptAllCookies();
});
