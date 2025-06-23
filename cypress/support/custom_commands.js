
let dashboard

beforeEach(()=>{
    Cypress.on("uncaught:exception", ()=>{return false})
    cy.fixture('elements').then((locator)=>{
        dashboard = locator.dashboardPage
    })
})


Cypress.Commands.add('fill_any_input_field', (text, field) => {
    cy.get(field).fill(text);
})

Cypress.Commands.add('click_button', (text) => {
    cy.get('button').contains(text).click();
})


Cypress.Commands.add('confirm_user_is_logged_in', (text) => {
    cy.get(dashboard.welcomeText).contains(text);
})
