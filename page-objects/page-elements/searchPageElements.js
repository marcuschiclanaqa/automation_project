import { webLocatorsSearch } from "../../searchPageElements/search-page-locators"

export class SearchPageElements{

    locators = new webLocatorsSearch

    visitGoogleWebsite() {
        cy.visit(this.locators.BASE_URL)
        
        
    }

    clickAcceptPopUpModal() {
        cy.get(this.locators.POP_MODOL).click()
        
    }

    searchForWordAutomation() {
        cy.get(this.locators.SEARCH_BAR).type(this.locators.WORD_AUTOMATION)
        
    }

    clickOnSearchWithGoogleButton() {
        cy.get(this.locators.SEARCH_GOOGLE_BUTTON).click()
        
    }

    clickOnWikipediaLink() {
        cy.get(this.locators.WIKIPEDIA_LINK).click()
        
    }

    checkFirstAutomationProcess() {
        cy.origin('https://es.wikipedia.org/wiki/Automatización', () => {
        cy.get('p').should('contain', 'En 1771')
    })}

}
