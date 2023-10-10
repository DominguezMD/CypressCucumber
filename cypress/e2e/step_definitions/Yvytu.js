import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const yvytu = require("../../pages/yvytupage")


Given(`Que un usuario este en la pagina de {string}`, (url) => {
    cy.visit("https://vientosdelaselva.com.ar/");
    yvytu.getmenubtn().should("be.visible");
})