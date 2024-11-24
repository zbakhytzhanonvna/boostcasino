import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import NavigationPage from '../pageobjects/SiteNavigationPage';
import { DataTable } from '@cucumber/cucumber';

const navigationPage = new NavigationPage();


Given('I am on the BoostCasino homepage from a mobile device', () => {
    navigationPage.visitMobileVersion();
    navigationPage.acceptAllCookies();
});

When('I tap on the hamburger menu', () => {
    navigationPage.openHamburgerMenu();
});

Then('The menu should display the following entries:', (dataTable: DataTable) => {
    const expectedEntries = dataTable.raw().flat();
    navigationPage.verifyMenuEntries(expectedEntries);
});

When('I tap on {string}', (menuItem: string) => {
    navigationPage.tapMenuItem(menuItem);
});

When('I tap on submenu {string}', (menuItem: string) => {
    navigationPage.tapSubMenuItem(menuItem);
});

Then('I should be redirected to the {string} page', (pageName: string) => {
    navigationPage.verifyRedirection(pageName);
});

Then('The game categories sub-menu should display the following:', (dataTable: DataTable) => {
    const expectedCategories = dataTable.raw().flat();
    navigationPage.verifySubMenuCategories(expectedCategories);
});
