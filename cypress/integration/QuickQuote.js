/// <reference types="Cypress" />

const requiredData = {
    firstName: 'Tim',
    lastName: 'Kelly',
    amount: 24310,
}
const errorString = {
    firstName: 'Please enter your first name',
    lastName: 'Please enter your last name',
    amount: 'Please enter an amount greater than 0'
}
const baseURL = 'http://localhost:3000/'
const successURL = 'http://localhost:3000/currency-converter/result?fromCurrency=AUD&toCurrency=GBP&currencyValue=24310'
const invalidURL = 'http://localhost:3000/currency-converter/result?fromCurrency=AUD&toCurrency=GB&currencyValue=24310'

describe('QuickQuote', () => {
    it('Search for quote with all required field', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#first-name').type(requiredData.firstName)
        cy.get('#last-name').type(requiredData.lastName)
        cy.get('#amount').clear()
        cy.get('#amount').type(requiredData.amount)
        cy.contains('Get Quote').click();
        cy.url().should('eq', successURL)
    })
    it('Search for quote without a first name', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#last-name').type(requiredData.lastName)
        cy.get('#amount').clear()
        cy.get('#amount').type(requiredData.amount)
        cy.contains('Get Quote').click();
        cy.url().should('eq', baseURL)
        cy.contains(errorString.firstName)
    })
    it('Search for quote without last name', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#first-name').type(requiredData.firstName)
        cy.get('#amount').clear()
        cy.get('#amount').type(requiredData.amount)
        cy.contains('Get Quote').click();
        cy.url().should('eq', baseURL)
        cy.contains(errorString.lastName)
    })
    it('Search for quote without amount', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#first-name').type(requiredData.firstName)
        cy.get('#last-name').type(requiredData.lastName)
        cy.get('#amount').clear()
        cy.contains('Get Quote').click();
        cy.url().should('eq', baseURL)
        cy.contains(errorString.amount)
    })
    it('Search for quote without all required fields', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#amount').clear()
        cy.contains('Get Quote').click();
        cy.url().should('eq', baseURL)
        cy.contains(errorString.firstName)
        cy.contains(errorString.lastName)
        cy.contains(errorString.amount)
    })
})

describe('QuickQuoteResult', () => {
    it('The user sends an API request that returns a value', () => {
        cy.visit(successURL)
        cy.get('#quote-success')
        cy.get('#customer-rate')
        cy.get('#from-currency')
        cy.get('#to-currency')
        cy.contains('Start New Quote')
    })
    it('The user sends an API request that returns an error', () => {
        cy.visit(invalidURL)
        cy.get('#quote-error')
        cy.contains('Start New Quote')
    })
})