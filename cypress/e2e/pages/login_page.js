export class LoginPage{

    email_input = "#\\:r0\\:"
    password_input = ".css-exxviu > .MuiInputBase-root > .MuiInputBase-input"
    login_button = ".bg-\\[\\#FF7019\\]"

    login_titlePage = ".Login_header__J3QTC"

    enterEmail(email){
        cy.get(this.email_input).clear().type(email).blur()
    }

    enterPassword(password){
        cy.get(this.password_input).clear().type(password)
    }

    clickLogin() {
        cy.get(this.login_button).click()
    }
    
    errorLogin() {
        cy.get(this.login_titlePage).should("be.visible")
    }
    
    login(email, password) {
        this.enterEmail(email)
        this.enterPassword(password)
        this.clickLogin()
    }
}