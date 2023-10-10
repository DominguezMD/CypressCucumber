class Yvytu{
    getmenubtn(){
        return cy.get("#menu-nav a");
    }
}
module.exports = new Yvytu();