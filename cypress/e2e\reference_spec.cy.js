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

    it("Verify navigation and actions dropdown ", () => {
      cy.testCaseMapping([
        {
          testCaseId: "937143",
          testCaseTitle:
            "Product record: user is able to select blank option of a dropdown",
          testCaseLink:
            "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/937143",
        },
      ]);
      cy.PC.ProductRecord.verifyContentsPanelNavigation();
      cy.PC.ProductRecord.verifyActionItems();
    });

    it("Verify the Edit Functionality - validation errors", () => {
      cy.testCaseMapping([
        {
          testCaseId: "937144",
          testCaseTitle:
            "Product record: user is able to select blank option of a dropdown",
          testCaseLink:
            "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/937144",
        },
      ]);
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
