export default abstract class BasePage {
    protected readonly timeout: number = 10000;

    public visit(): void {
        cy.intercept('GET', '/api/casino/games*').as('casinoGames');
        cy.visit("https://boostcasino.com/");
        cy.wait('@casinoGames', {timeout: this.timeout});
    }

    protected get(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(selector, { timeout: this.timeout });
    }

    protected click(selector: string): void {
        this.get(selector)
            .should('be.visible')
            .click({ force: true });
    }

    protected type(selector: string, text: string): void {
        this.get(selector).should('be.visible').clear().type(text);
    }
}
