class dashboardPage{

    elements = {
        firstNameInput: () => cy.get('#firstName'),
        lastNameInput: () => cy.get('#lastName'),
        addEmployeeButton: () => cy.get('#add'),
        dependantInput: () => cy.get('#dependants'),
        title: () => cy.get('.navbar-brand'),
        addButton: () => cy.get('#addEmployee'),
        cancelButton: () => cy.get('#employeeModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary'),
        deleteButton: () => cy.get('.fa-edit'),
        editButton: () => cy.get('.fa-edit'),
        updateButton: () => cy.get('#updateEmployee'),
        deleteButton: () => cy.get('#deleteEmployee')
    }

    typeFirsName(name){
        this.elements.firstNameInput().type(name);
    }
    typeLastName(lastname){
        this.elements.lastNameInput().type(lastname);
    }
    typeDependant(dependant){
        this.elements.dependantInput().type(dependant);
    }
    clickAddEmployee(){
        this.elements.addEmployeeButton().click();
    }
    clickAdd(){
        this.elements.addButton().click();
    }
    clickCancel(){
        this.elements.cancelButton().click();
    }
    clickEdit(){
        this.elements.editButton().click();
    }
    clickDelete(){
        this.elements.deleteButton().click();
    }
    clickUpdate(){
        this.elements.updateButton().click();
    }
    clickDelete(){
        this.elements.updateButton().click();
    }

}

module.exports = new dashboardPage();