export class Navigation{
    catalog_nav = ":nth-child(2) > :nth-child(1) > button > .menuText"
    category = ":nth-child(2) > .menuList > .nav-links-sub > :nth-child(1) > :nth-child(1) > .menuItems > a > button > .menuText"
    brands = ":nth-child(2) > .menuList > .nav-links-sub > :nth-child(1) > :nth-child(2) > .menuItems > a > button > .menuText"
    models = ":nth-child(2) > .menuList > .nav-links-sub > :nth-child(1) > :nth-child(3) > .menuItems > a > button > .menuText"
    attributes = ":nth-child(4) > .menuItems > a > button > .menuText"

    openCatalog(){
        cy.get(this.catalog_nav).click()
    }

    navToCategory() {
        this.openCatalog()
        cy.get(this.category).click()
    }

    navToBrands(){
        this.openCatalog()
        cy.get(this.brands).click()
    }

    navToModels(){
        this.openCatalog()
        cy.get(this.models).click()
    }

    navToAttributes(){
        this.openCatalog()
        cy.get(this.attributes).click()
    }
}