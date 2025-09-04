```typescript
/// <reference types="cypress" />
import TestCase937167 from "../support/pageObjects/testcase_937167_po";

describe("Test Case ID: 937167 - Verify in edit function.", () => {
  const pageObject = new TestCase937167();
  const username = Cypress.env('username'); //Get username from cypress.env
  const password = Cypress.env('password'); //Get password from cypress.env
  const productId = Cypress.env('productId'); //Get productId from cypress.env
  const hsNumber = Cypress.env('hsNumber'); //Get hsNumber from cypress.env
  const productNumber = Cypress.env('productNumber'); //Get productNumber from cypress.env

  before(() => {
    cy.testCaseMapping([
      {
        testCaseId: "ADO:937167",
        testCaseTitle: "Verify in edit function.",
        testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/937167",
      },
    ]);
  });


  it("should successfully edit facility ownership", () => {
    pageObject.login(username, password);
    pageObject.navigateToProductRecordPage(productId, hsNumber, productNumber);
    pageObject.verifyPageLoad();
    pageObject.navigateToFacilityOwnership();

    //Check if facility ownership records exist. If not, add one.
    cy.get(pageObject.getActionsButtonSelector()).then(($actions) => {
      if ($actions.length === 0) {
        pageObject.addFacilityOwnership("Test Facility Ownership");
      }
    });

    pageObject.editFacilityOwnership("Updated Facility Ownership");
    pageObject.verifySuccessMessage();
  });
});

```
