import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given(/^I am on the home page$/, () => {
	cy.visit('/');
});


When(/^I input "([^"]*)" in the "([^"]*)" field$/, (text,field) => {
	cy.fill_any_input_field(text,field)
});


When(/^I click on "([^"]*)" button$/, (text) => {
	cy.click_button(text)
});


Then(/^I should be logged in and see the "([^"]*)"$/, (text) => {
	cy.confirm_user_is_logged_in(text)
});

Then(/^I should see the "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});
