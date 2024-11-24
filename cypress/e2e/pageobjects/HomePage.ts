import BasePage from './BasePage';

interface HomePageSelectors {
    searchInput: string;
}

const searchGamesAlias = 'searchGames';
export default class HomePage extends BasePage {
    private readonly selectors: HomePageSelectors = {
        searchInput: '#\\:r0\\:'
    };

    public searchForGame(query: string): void {
        cy.intercept('GET', '/api/casino/games/search*').as(searchGamesAlias);
        this.type(this.selectors.searchInput, query);
        cy.wait(`@${searchGamesAlias}`).then((interception) => {
            // @ts-ignore
            expect(interception.response.statusCode).to.eq(200);
            // @ts-ignore
            expect(interception.response.body).to.have.property('data');
            // @ts-ignore
            const games = interception.response.body.data;
            expect(games.length).to.be.greaterThan(0);
        });
        cy.wait(1000);
    }

    public verifySearchInputIsVisible(): void {
        cy.get(this.selectors.searchInput).should('be.visible');
    }

    public verifyGameListIsVisible(): void {
        cy.get('div.sc-dIouRR').should('be.visible');
    }

    public acceptAllCookies(): void {
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    }

    public verifyGamesMatchingTitleAreVisible(gameTitle: string): void {
        cy.get('div.sc-dIouRR').each(($game) => {
            cy.wrap($game).within(() => {
                cy.get('h6')
                    .invoke('text')
                    .then((text) => {
                        expect(text.toLowerCase()).to.contain(gameTitle.toLowerCase());
                    });
            });
        });
    }

    public clickPlayButtonForGame(gameTitle: string): void {
        cy.get('div.sc-idiyUo').find('div.sc-dIouRR').first().within(() => {
            cy.get('h6').invoke('text').should((text) => {
                expect(text.toLowerCase()).to.contain(gameTitle.toLowerCase());
            });
            cy.get('button').contains('Play').click();
        });
    }

    public verifyGameIsLoaded(): void {
        cy.get('#ax-game-iframe', { timeout: 10000 }).should('be.visible');
    }
}
