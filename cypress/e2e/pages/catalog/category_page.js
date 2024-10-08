export class CategoryPage{
    
    create_button = ".false > .bg-\\[\\#6BBD57\\]"
    pawn_page_icon = "#pawnPageImage"
    pawn_page_icon_image = ".false > .cursor-pointer"
    category_name = ":nth-child(2) > :nth-child(1) > .w-full"
    category_display_label = ".space-y-4 > :nth-child(2) > :nth-child(2) > .w-full"
    continue_seo = ".bg-\\[\\#6BBD57\\]"

    description = ":nth-child(1) > :nth-child(2) > .main-container > .editor-container > .editor-container__editor-wrapper > .editor-container__editor > .false > .ck-editor > .ck-editor__main > .ck-blurred"

    clickCreateButton() {
        cy.get(this.create_button).click()
    }

    uploadPawnPageIcon(){
        cy.get(this.pawn_page_icon).click({ force: true }).selectFile("./images/test.jpg", {force: true})
    }

    inputCatName(catName) {
        cy.get(this.category_name).clear().type(catName).blur()
    }

    inputCatDisplay(catDisplayLabel) {
        cy.get(this.category_display_label).clear().type(catDisplayLabel).blur()
    }

    clickContinueSeo() {
        cy.get(this.continue_seo).click()
    }

    inputDescription(itemDescription) {
        cy.get(this.description).clear().type(itemDescription).blur()
    }

    generalForm(catName, catDisplayLabel) {
        this.clickCreateButton()
        cy.wait(1000)
        cy.reload()
        this.uploadPawnPageIcon()
        this.inputCatName(catName)
        this.inputCatDisplay(catDisplayLabel)
        this.clickContinueSeo()
    }

    seoForm(itemDescription) {
        cy.wait(1500)
        this.inputDescription(itemDescription)
    }
}