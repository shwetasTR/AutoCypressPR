```typescript
class TestCase937167 {
  baseUrl = "https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/";
  usernameSelector = "[data-testid='username']";
  passwordSelector = "[data-testid='password']";
  submitSelector = "[type='submit']";
  loginSuccessValidationSelector = "[data-testid='user-profile']";
  productRecordUrl = "/gtm/product-classification/product-record?productId=b127f5e6-09f1-4142-a6b7-8523d69b789e&productNumber=TST_dbS4B-tF4TV&hsNumber=&countryCode=US&activeWorkQueue=All%20products&previousPageUrl=WorkQueues";
  pageLoadValidationSelector = "body";
  facilityOwnershipSelector = "#facilityOwnershipSection";
  facilityOwnershipSectionValidationSelector = "#facilityOwnershipSection.active";
  addButtonSelector = "button[data-testid='add-facility']";
  dropdownSelector = "select[name='facilityOwnership']";
  savebuttonSelector = "button[type='submit']";
  recordAddedValidationSelector = ".facility-ownership-row:last-child";
  actionsButtonSelector = ".facility-ownership-row:first-child button[data-testid='actions']";
  editButtonSelector = "[data-testid='edit-facility']";
  editPopupValidationSelector = "#edit-facility-popup";
  facilityOwnershipFieldSelector = "select[name='facilityOwnership']";
  ftzActiveCheckboxSelector = "#ftzActiveCheckbox";
  saveChangesButtonSelector = "button[data-testid='save-changes']";
  successMessageValidationSelector = ".success-message";
  updatedFacilityOwnershipValidationSelector = ".facility-ownership-row:first-child .facility-ownership-value";


  getUsernameSelector() { return this.usernameSelector; }
  getPasswordSelector() { return this.passwordSelector; }
  getSubmitSelector() { return this.submitSelector; }
  getLoginSuccessValidationSelector() { return this.loginSuccessValidationSelector; }
  getPageLoadValidationSelector() { return this.pageLoadValidationSelector; }
  getFacilityOwnershipSelector() { return this.facilityOwnershipSelector; }
  getFacilityOwnershipSectionValidationSelector() { return this.facilityOwnershipSectionValidationSelector; }
  getAddButtonSelector() { return this.addButtonSelector; }
  getDropdownSelector() { return this.dropdownSelector; }
  getSavebuttonSelector() { return this.savebuttonSelector; }
  getRecordAddedValidationSelector() { return this.recordAddedValidationSelector; }
  getActionsButtonSelector() { return this.actionsButtonSelector; }
  getEditButtonSelector() { return this.editButtonSelector; }
  getEditPopupValidationSelector() { return this.editPopupValidationSelector; }
  getFacilityOwnershipFieldSelector() { return this.facilityOwnershipFieldSelector; }
  getFtzActiveCheckboxSelector() { return this.ftzActiveCheckboxSelector; }
  getSaveChangesButtonSelector() { return this.saveChangesButtonSelector; }
  getSuccessMessageValidationSelector() { return this.successMessageValidationSelector; }
  getUpdatedFacilityOwnershipValidationSelector() { return this.updatedFacilityOwnershipValidationSelector; }


  login(username: string, password: string) {
    cy.visit(this.baseUrl);
    cy.get(this.getUsernameSelector()).type(username);
    cy.get(this.getPasswordSelector()).type(password);
    cy.get(this.getSubmitSelector()).click();
    cy.get(this.getLoginSuccessValidationSelector()).should('be.visible');
  }

  navigateToProductRecordPage() {
    cy.visit(this.baseUrl + this.productRecordUrl);
    cy.get(this.getPageLoadValidationSelector()).should('be.visible');
  }

  navigateToFacilityOwnership() {
    cy.get(this.getFacilityOwnershipSelector()).click();
    cy.get(this.getFacilityOwnershipSectionValidationSelector()).should('be.visible');
  }

  addFacilityOwnershipRecord(facilityOwnership: string) {
    cy.get(this.getAddButtonSelector()).click();
    cy.get(this.getDropdownSelector()).select(facilityOwnership);
    cy.get(this.getSavebuttonSelector()).click();
    cy.get(this.getRecordAddedValidationSelector()).should('be.visible');
  }

  editFacilityOwnershipRecord() {
    cy.get(this.getActionsButtonSelector()).click();
    cy.get(this.getEditButtonSelector()).click();
    cy.get(this.getEditPopupValidationSelector()).should('be.visible');
  }

  updateFacilityOwnershipRecord(facilityOwnership: string, ftzActive: boolean) {
    cy.get(this.getFacilityOwnershipFieldSelector()).select(facilityOwnership);
    if (ftzActive) {
      cy.get(this.getFtzActiveCheckboxSelector()).check();
    } else {
      cy.get(this.getFtzActiveCheckboxSelector()).uncheck();
    }
    cy.get(this.getSaveChangesButtonSelector()).click();
    cy.get(this.getSuccessMessageValidationSelector()).should('be.visible');
    cy.get(this.getUpdatedFacilityOwnershipValidationSelector()).should('contain', facilityOwnership);
  }
}
```
