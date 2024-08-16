/// <reference types='cypress' />
import loginPage from '../pages/loginPage';
const tests = require("../fixtures/loginPage.json")

describe('Valid User and password', () => {
  beforeEach(() => {
    cy.visit('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login');
  })

  tests.forEach(test => {
    it(test.name, () => {
      loginPage.elements.title().should('contain.text', 'Paylocity Benefits Dashboard');
      loginPage.typeUsername(test.user);
      loginPage.typePassword(test.pass);
      loginPage.clickLogin();
  
    });

  });

  
});