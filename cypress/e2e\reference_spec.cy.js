import { productClassifications } from "e2e/partnerConfig/productClassificationsSelectors";
import {
  constants,
  productRecord,
} from "../../../data/product-classification/constants";
import { getTestUser } from "e2e/data/dps/testUsers";

describe(
  "Details screen in Edit Classification",
  { tags: ["editClassificationUI", "detailsTab", "partnerConfig", "a11y"] },
  () => {
    const testUser = constants.ANGULAR_GCAT;
    const { partnerID } = getTestUser(testUser);
    const { countryName, countryCode, hsNumber } = productRecord;
    const productNumber = "Cypress_editProduct";
    let productId;

    before(() => {
      cy.PC.db
        .addProduct({
          countryCode,
          hsNumber,
          productNumber,
          partnerID,
        })
        .then((productGuid) => {
          productId = productGuid;
        });
      cy.setPartnerConfigDbProvider(partnerID);
      const requiredFields = [
        productClassifications.productHsNumColumn(countryCode),
        productClassifications.productGRIColumn(countryCode),
      ].map((selector) => ({
        selector,
        attributesToUpdate: [
          {
            name: "required",
            value: "Y",
          },
        ],
      }));
      cy.updatePartnerConfig(partnerID, requiredFields);
    });

    beforeEach(() => {
      cy.PC.Common.PageActions.interceptDefaultCountry({
        countryCode,
        countryName,
      });
      cy.PC.ProductRecord.updateDocumentCreationConfig(partnerID, "Y");
      cy.PC.ProductRecord.updateStatisticalCodesConfig(partnerID, "Y");
      cy.COMMON.HomePage.login(testUser);
      cy.PC.ProductRecord.navigateToBaseUrl({
        countryCode,
        productId,
        productNumber,
        hsNumber,
      });
    });

    after(() => {
      cy.removePartnerConfigSourceProvider(partnerID);
      cy.PC.db.removeProduct({
        countryCode,
        partnerID,
        productNumber,
      });
    });

    it("Verify navigation and actions dropdown [ADO: 937143,937148]", () => {
      cy.PC.ProductRecord.verifyContentsPanelNavigation();
      cy.PC.ProductRecord.verifyActionItems();
    });

    it("[BUG P2] Product record: dropdown lists should contain all relevant options in edit mode [ADO: 1538226]", () => {
      cy.PC.ProductRecord.clickEdit();
      cy.PC.ProductRecord.getDropdownOptions("CurrencyCodeDropdown").then(
        (options) => {
          cy.PC.ProductRecord.fillFormField("CurrencyCodeDropdown", "CAD");
          cy.PC.ProductRecord.clickSaveBtn();
          cy.reload();
          cy.waitPageLoad();
          cy.PC.ProductRecord.clickEdit();
          cy.PC.ProductRecord.getDropdownOptions("CurrencyCodeDropdown")
            .should("deep.equal", options)
            .and("have.length.gt", 1);
        }
      );
    });

    it("Verify the Edit Functionality - validation errors [ADO: 937161,937144,937163]", () => {
      cy.PC.ProductRecord.clickEdit();
      cy.PC.ProductRecord.clickSaveBtn();
      cy.PC.ProductRecord.verifyValidationMessage(
        "Enter a valid general rules of interpretation."
      );
      cy.PC.ProductRecord.verifyAlertMessages([
        "Fix 1 issue to continue:",
        "Enter a valid gri.",
      ]);
      cy.PC.ProductRecord.clearFormField("HsNum");
      cy.PC.ProductRecord.clickSaveBtn();
      cy.PC.ProductRecord.verifyValidationMessage("Enter a valid HS Number.");
      cy.PC.ProductRecord.verifyAlertMessages([
        "Fix 2 issues to continue:",
        "Enter a valid gri",
        "Enter a valid hsnum",
      ]);
    });
  }
);
