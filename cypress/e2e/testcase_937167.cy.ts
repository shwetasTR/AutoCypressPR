```typescript
/// <reference types="cypress" />
import { TestCase937167 } from "../support/pageObjects/testcase_937167_po";

describe("Test Case ID: 937167 - Verify in edit function.", () => {
  const pageObject = new TestCase937167();
  const username = "your_username"; // Replace with actual username
  const password = "your_password"; // Replace with actual password
  const productId = "your_product_id"; // Replace with actual product ID
  const hsNumber = "your_hs_number"; // Replace with actual HS Number
  const productNumber = "your_product_number"; // Replace with actual product number
  const url = `/gtm/product-classification/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`;
  const ownershipType = "Sole Proprietorship"; //Replace with an actual value from your dropdown
  const newOwnership = "Partnership"; //Replace with a different ownership type

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
    pageObject.navigateToProductRecord(url);
    pageObject.clickFacilityOwnership();

    //Check if facility ownership records exist. If not, add one.
    pageObject.actionsButton.should('exist').then(($el) => {
      if ($el.length === 0) {
          pageObject.addFacilityOwnership(ownershipType);
      }
    });


    pageObject.editFacilityOwnership(newOwnership, true);
  });
});

```
