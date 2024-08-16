class loginPage{

    elements = {
        usernameInput: () => cy.get('#Username'),
        passwordInput: () => cy.get('#Password'),
        loginButton: () => cy.get('.btn'),
        title: () => cy.get('.navbar-brand'),
        firstErrorMsg: () => cy.get('span'),
        secondErrorMsg: () => cy.get('li')
    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }
    typePassword(password){
        this.elements.passwordInput().type(password);
    }
    clickLogin(){
        this.elements.loginButton().click();
    }

}

module.exports = new loginPage();