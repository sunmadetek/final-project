
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-fill-command';
import '../support/custom_commands';

beforeEach(()=>{
    Cypress.on("uncaught:exception", ()=>{return false})
})
            