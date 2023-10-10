import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`Que un usuario este en la pagina de {string}`, (url) => {
    cy.visit("https://vientosdelaselva.com.ar/")
})