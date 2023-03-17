import * as signup from "../page/signup.page"
import * as value from "../data/signup.data"

describe('Function signup', () => {

    it('User can signup with valid data', () => {
        cy.visit(Cypress.env('baseUrl') + ('/UserRegister/NewUser'))
        cy.get(signup.FirstName).type(value.VALID_SIGNUP.firstName)
        cy.get(signup.Surname).type(value.VALID_SIGNUP.surname)
        cy.get(signup.Epost).type(value.VALID_SIGNUP.epost)
        cy.get(signup.Mobile).type(value.VALID_SIGNUP.mobile)
        cy.get(signup.Username).type(value.VALID_SIGNUP.username)
        cy.get(signup.Password).type(value.VALID_SIGNUP.password)
        cy.get(signup.ConfirmPassword).type(value.VALID_SIGNUP.confirmPassword)
        cy.get(signup.ButtonSubmit).click()
        cy.get(signup.SuccessSignup).should('contain.text', "Registration Successful")

    });

    it('User cant signup with username already exist', () => {
        cy.visit(Cypress.env('baseUrl') + ('/UserRegister/NewUser'))
        cy.get(signup.FirstName).type(value.VALID_SIGNUP.firstName)
        cy.get(signup.Surname).type(value.VALID_SIGNUP.surname)
        cy.get(signup.Epost).type(value.VALID_SIGNUP.epost)
        cy.get(signup.Mobile).type(value.VALID_SIGNUP.mobile)
        cy.get(signup.Username).type(value.VALID_SIGNUP.username)
        cy.get(signup.Password).type(value.VALID_SIGNUP.password)
        cy.get(signup.ConfirmPassword).type(value.VALID_SIGNUP.confirmPassword)
        cy.get(signup.ButtonSubmit).click()
        cy.get(signup.FailedSignup).should('contain.text', "Username already exist")

    });
});