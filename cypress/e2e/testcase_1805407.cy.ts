```typescript
/// <reference types="cypress" />
import { TestCase1805407 } from '../support/pageObjects/testcase_1805407_po';

describe('Test Case ID: 1805407 - PGA Mapping', () => {
  const pgaMapping = new TestCase1805407();

  beforeEach(() => {
    cy.testCaseMapping([
      {
        testCaseId: "ADO:1805407",
        testCaseTitle: "PGA Mapping :If user has selected not to have PG 60 or PG 24 , that information should be retained",
        testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/1805407",
      },
    ]);
    cy.visit('YOUR_APPLICATION_URL'); // Replace with your application URL
  });


  it('Verifies PGA mapping functionality', () => {
    pgaMapping.navigateToPGA();
    pgaMapping.verifyPGAMappingScreen();
    pgaMapping.addPG02Item('Value1', 'Value2');
    pgaMapping.addPG19to21Items('PG19Value', 'PG20Value', 'PG21Value');
    pgaMapping.deletePG24and60Items();
    pgaMapping.verifyDeletedItems();
    pgaMapping.verifyPG19to21DataPersistence('PG19Value', 'PG20Value', 'PG21Value');
  });
});

```
