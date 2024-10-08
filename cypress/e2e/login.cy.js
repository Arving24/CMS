import { LoginPage } from "./pages/login_page";

let loginPage = new LoginPage();

describe('Login Test',() => {
  const testData = require("../fixtures/example.json")

  it("Successfully load the page", () => {
    cy.visit('/');
    cy.get('.Login_loginText__X9Zvr').should("be.visible")
  })

  testData.valid_creds.forEach((data) => {
    it('Login with valid credentials', () => {
      cy.visit('/');
      loginPage.login(data.email, data.password);
      cy.get('.max-w-\\[250px\\]').should("be.visible")
    })
  })

  testData.invalid_creds.forEach((data) => {
    it('Login with invalidcredentials', () => {
      cy.visit('/');
      loginPage.login(data.email, data.password);
      loginPage.errorLogin()
    })
  })
  
})