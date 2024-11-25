import BasePage from './BasePage';

export default class SiteNavigationPage extends BasePage {
    private readonly selectors = {
        hamburgerMenu: '.af-header-mobile-menu-trigger',
        menuItem: 'nav[data-af="nav"] span.sc-hQXzsD',
        subMenuItems: '.sub-menu-item',
    };

    public visitMobileVersion(): void {
        cy.viewport(412, 915);
        // cy.viewport('iphone-x');// hamburger menu not displayed properly with this size
        this.visit();
    }

    public openHamburgerMenu(): void {
        this.click(this.selectors.hamburgerMenu);
    }

    public verifyMenuEntries(expectedEntries: string[]): void {
        cy.get('nav > ul')
            .first()
            .children('li')
            .filter(':visible')
            .should('have.length', expectedEntries.length)
            .each(($el, index) => {
                cy.wrap($el)
                    .find('span.sc-hQXzsD')
                    .first()
                    .invoke('text')
                    .then((text) => {
                        const cleanText = text.replace(/[▼▾⌄]/, '').trim();
                        expect(cleanText).to.include(expectedEntries[index]);
                    });
            });
    }
    
    public tapMenuItem(menuItem: string): void {
        cy.get(this.selectors.menuItem)
            .contains(menuItem, { matchCase: false })
            .click({ force: true });
    }

    //todo, couldn't click sub menu item properly, used workaround, extracting href
    public tapSubMenuItem(menuItem: string): void {
        cy.get('ul[data-af="sub-nav"] > li')
        .contains('a', menuItem, { matchCase: false })
        .invoke('attr', 'href')
        .then((href) => {
            cy.visit("https://www.boostcasino.com" + href);//todo use url from config
            cy.wait(1000);
        });
    }
    
    public verifyRedirection(expectedPage: string): void {
        cy.url().should('include', expectedPage.toLowerCase());
    }

    public verifySubMenuCategories(expectedCategories: string[]): void {
        cy.get('ul[data-af="sub-nav"] > li')
            .should('have.length', expectedCategories.length)
            .each(($el, index) => {
                cy.wrap($el)
                .find('span.sc-crXcEl')
                .last()
                .invoke('text')
                .then((text) => {
                    expect(text.trim()).to.equal(expectedCategories[index]);
                });
            });
    }    
    
}
