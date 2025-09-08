```typescript
class TestCase1805407 {
  private selectors = {
    navigateToPGAMapping: 'div:nth-child(1) > p',
    pgaMappingScreen: '[data-testid="pga-mapping-screen"]',
    addPG02ItemButton: 'button[data-testid="add-pg02-item"]',
    pg02MandatoryField1: '[name="mandatoryField1"]',
    pg02MandatoryField2: '[name="mandatoryField2"]',
    pg02SaveButton: 'button[type="submit"]',
    pg02SuccessMessage: 'div:nth-child(4) > p', // Needs improvement
    addItemButton: 'button[data-testid="add-item"]',
    pg19Selector: '[data-testid="pg19"]',
    pg20Selector: '[data-testid="pg20"]',
    pg21Selector: '[data-testid="pg21"]',
    pg19Field1: '[data-testid="pg19-field1"]',
    pg20Field1: '[data-testid="pg20-field1"]',
    pg21Field1: '[data-testid="pg21-field1"]',
    pg19to21SaveButton: 'button[type="submit"]',
    pg19to21SuccessMessage: 'div:nth-child(6) > p', //Needs improvement
    pg24Selector: '[data-testid="pg24"]',
    pg60Selector: '[data-testid="pg60"]',
    deleteItemButton: 'button[data-testid="delete-item"]',
    deleteSaveButton: 'button[type="submit"]',
    deleteSuccessMessage: 'div:nth-child(8) > p', //Needs improvement
    reopenItemSelector: '[data-testid="reopen-item"]',
    itemList: '[data-testid="item-list"]'

  };


  navigateToPGA() {
    cy.contains(this.selectors.navigateToPGAMapping, 'Go to GC -> PGA mapping').click();
  }

  verifyPGAMappingScreen() {
    cy.get(this.selectors.pgaMappingScreen).should('be.visible');
  }

  addPG02Item(mandatoryField1Value: string, mandatoryField2Value: string) {
    cy.get(this.selectors.addPG02ItemButton).click();
    cy.get(this.selectors.pg02MandatoryField1).type(mandatoryField1Value);
    cy.get(this.selectors.pg02MandatoryField2).type(mandatoryField2Value);
    cy.get(this.selectors.pg02SaveButton).click();
    //Improved validation needed here.  Example below.  Replace with a more robust selector.
    cy.contains(this.selectors.pg02SuccessMessage, "PG02 item should be added successfully").should('be.visible');
  }

  addPG19to21Items(pg19Value: string, pg20Value: string, pg21Value: string) {
    cy.get(this.selectors.addItemButton).click();
    cy.get(this.selectors.pg19Selector).check();
    cy.get(this.selectors.pg20Selector).check();
    cy.get(this.selectors.pg21Selector).check();
    cy.get(this.selectors.pg19Field1).type(pg19Value);
    cy.get(this.selectors.pg20Field1).type(pg20Value);
    cy.get(this.selectors.pg21Field1).type(pg21Value);
    cy.get(this.selectors.pg19to21SaveButton).click();
    //Improved validation needed here. Replace with a more robust selector.
    cy.contains(this.selectors.pg19to21SuccessMessage, "PG19 to PG21 items should be added successfully").should('be.visible');
  }

  deletePG24and60Items() {
    cy.get(this.selectors.pg24Selector).check();
    cy.get(this.selectors.pg60Selector).check();
    cy.get(this.selectors.deleteItemButton).click();
    cy.get(this.selectors.deleteSaveButton).click();
    //Improved validation needed here. Replace with a more robust selector.
    cy.contains(this.selectors.deleteSuccessMessage, "PG24 and PG60 items should be deleted successfully").should('be.visible');
  }

  verifyDeletedItems() {
    cy.get(this.selectors.reopenItemSelector).click(); // Assuming a reopen action exists
    cy.get(this.selectors.itemList).should('not.contain', 'PG24');
    cy.get(this.selectors.itemList).should('not.contain', 'PG60');
  }

  verifyPG19to21DataPersistence(pg19Expected: string, pg20Expected: string, pg21Expected: string) {
    cy.get(this.selectors.reopenItemSelector).click(); // Assuming a reopen action exists
    cy.get(this.selectors.pg19Field1).should('contain', pg19Expected);
    cy.get(this.selectors.pg20Field1).should('contain', pg20Expected);
    cy.get(this.selectors.pg21Field1).should('contain', pg21Expected);
  }
}
```
