/// <reference types='cypress' />
import dashboardPage from '../pages/dashboardPage';
import loginPage from '../pages/loginPage';
const tests = require("../fixtures/dashboardPage.json")

describe('login test', () => {
  beforeEach(() => {
    cy.visit("https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login", {
    })
  })

  tests.forEach(test => {
    it('Valid User and password', () => {
      loginPage.elements.title().should('contain.text', 'Paylocity Benefits Dashboard')
      loginPage.typeUsername(Cypress.env('user'))
      loginPage.typePassword(Cypress.env('pass'))
      loginPage.clickLogin()
    
      let numberOfTRs;
      cy.get('tbody').find('tr').then(($td) => {
        numberOfTRs = $td.length;
        if (test.cancelButton == 1) {
          dashboardPage.clickAddEmployee()
          dashboardPage.typeFirsName(test.firstName)
          dashboardPage.typeLastName(test.LastName)
          dashboardPage.typeDependant(test.dependants)
          dashboardPage.clickCancel()
          cy.get('tbody').find('tr').should('have.length', numberOfTRs);
        } else if (test.addButton == 1){
          dashboardPage.clickAddEmployee()
          dashboardPage.typeFirsName(test.firstName)
          dashboardPage.typeLastName(test.LastName)
          dashboardPage.typeDependant(test.dependants)
          dashboardPage.clickAdd()
          //numberOfTRs = numberOfTRs + 1;
          cy.get('tbody').find('tr').should('have.length', (numberOfTRs + 1));

          cy.get('tbody').find('tr').last().find('td').each(($td, index) => {
            if (index >= 1 && index <= 6) {
              let value = (test.dependants * 500) + 1000
              let total  = value / (26)
              const expectedValues = [
                'William',
                'Smith',
                '3',
                '52000.00',
                '2000.00',
                total.toFixed(2)
              ];
              
              const tdText = $td.text().trim();
              cy.log(`Extracted text from <td> ${index + 1}: `, tdText);
              
              expect(tdText).to.contain(expectedValues[index - 1]);
            }
          });
          }if (test.delete == 1) {
            cy.get('.fa-times').eq(1).click();
            cy.get('.modal-footer #deleteEmployee').should('be.visible').click({force : true});
            cy.get('tbody').find('tr').should('have.length', (numberOfTRs));
          }else if (test.edit == 1) {
            cy.get('.fa-edit').eq(1).click();
            dashboardPage.typeFirsName(test.firstName);
            dashboardPage.typeLastName(test.LastName);
            dashboardPage.typeDependant(test.dependants);
            cy.get('.modal-footer #updateEmployee').should('be.visible').click({force : true});
            cy.get('tbody').find('tr').last().find('td').each(($td, index) => {
              if (index >= 1 && index <= 6) {
                let value = (test.dependants * 500) + 1000
                let total  = value / (26)
                const expectedValues = [
                  'William',
                  'Smith',
                  '3',
                  '52000.00',
                  '2000.00',
                  total.toFixed(2)
                ];
                
                const tdText = $td.text().trim();
                cy.log(`Extracted text from <td> ${index + 1}: `, tdText);
                
                expect(tdText).to.contain(expectedValues[index - 1]);
              }
            });
            cy.get('tbody').find('tr').should('have.length', (numberOfTRs));
          }
          
        
        
        
  
  
      });
      
    })

  })

  
})