import { LoginPage } from "./pages/login_page";
import { Navigation } from "./pages/catalog/nav.js"
import { CategoryPage } from "./pages/catalog/category_page.js"

let loginPage = new LoginPage();
let nav = new Navigation();
let createCategory = new CategoryPage();

describe("Create Category", () => {
  const testData = require("../fixtures/example.json");
  const genData = require("../fixtures/categoryData.json");

  testData.valid_creds.forEach((data) => {
    it("Login with valid credentials", () => {
      cy.visit("/");
      loginPage.login(data.email, data.password);
      nav.navToCategory()
      createCategory.generalForm(genData.catName, genData.catDisplayLabel)
      createCategory.seoForm(genData.itemDescription)
    });
  });
});
