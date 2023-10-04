/// <reference types="cypress" />

import { SearchPageElements } from "../../../page-objects/page-elements/searchPageElements"

const search_element = new SearchPageElements


describe('Validation of the search function', () => {
  beforeEach(() => {
    search_element.visitGoogleWebsite()
    
  })

  it('Search for a Automation word', () => {

    search_element.clickAcceptPopUpModal()
    search_element.searchForWordAutomation()
    search_element.clickOnSearchWithGoogleButton()
    search_element.clickOnWikipediaLink()
    search_element.checkFirstAutomationProcess()
})

})
