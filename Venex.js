import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const venex = require("../../pages/venexpage")


Given(`un usuario este en la pagina de {string}`, (url) => {
    cy.visit("https://www.venex.com.ar/");
    venex.getmenubtn().should("be.visible");
})