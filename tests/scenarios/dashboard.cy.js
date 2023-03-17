import * as dashboard from "../page/dashboard.page"
import * as value from "../data/dashboard.data"

describe('Function signup', () => {

    it('User can create customer with valid data', () => {
        cy.visit(Cypress.env('baseUrl') + ('/Customer/Create'))
        cy.get(dashboard.Name).type(value.CREATE_CUSTOMER.name)
        cy.get(dashboard.Company).type(value.CREATE_CUSTOMER.company)
        cy.get(dashboard.Address).type(value.CREATE_CUSTOMER.address)
        cy.get(dashboard.City).type(value.CREATE_CUSTOMER.city)
        cy.get(dashboard.Phone).type(value.CREATE_CUSTOMER.phone)
        cy.get(dashboard.Email).type(value.CREATE_CUSTOMER.email)
        cy.get(dashboard.ButtonSubmit).click()

    });
})