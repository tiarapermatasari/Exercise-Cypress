import * as login from "../page/login.page"
import * as value from "../data/login.data"

describe('Function login', () => {

    it('User can login with valid data', () => {
        cy.visit('https://itera-qa.azurewebsites.net/login')
        cy.get(login.UsernameField).type(value.VALID_LOGIN.username)
        cy.get(login.PasswordField).type(value.VALID_LOGIN.password)
        cy.get(login.ButtonLogin).click()
        cy.get(login.WelcomeText).should('contain.text', "Welcome tiaraqa1")
    });

    it('User can logout', () => {
        cy.get(login.Logout).click()
        cy.get(login.LoginText).should('contain.text', "LOGIN")
    });
});