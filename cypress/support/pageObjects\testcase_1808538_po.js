```javascript
class TestCase_1808538_Page {
  // Selectors
  groupButton = '[data-testid="group-button"]';
  filterButton = '[data-testid="filter-button"]';
  customMappingsTable = '[data-testid="custom-mappings-table"]';
  tableRow = 'tbody tr'; // Generic selector for table rows
  clearGroupingButton = '[data-testid="clear-grouping-button"]'; // Assuming a button appears to clear grouping
  filterOption = '[data-testid="filter-option"]'; // Generic selector for filter options, needs to be refined with text or index

  // Actions

  /**
   * Clicks the Group button.
   */
  clickGroupButton() {
    cy.get(this.groupButton).click();
    return this;
  }

  /**
   * Clicks the Filter button.
   */
  clickFilterButton() {
    cy.get(this.filterButton).click();
    return this;
  }

  /**
   * Clears all grouping.
   */
  clearGrouping() {
    cy.get(this.clearGroupingButton).click();
    return this;
  }

  /**
   * Applies a filter.  Requires specifying the filter option by its text.
   * @param {string} filterText - The text of the filter option to select.
   */
  applyFilter(filterText) {
    cy.contains(this.filterOption, filterText).click(); //Refined selector
    return this;
  }

  /**
   * Gets the text of the Group button.
   * @returns {Cypress.Chainable<string>} - A Cypress chainable that yields the text of the Group button.
   */
  getGroupButtonText() {
    return cy.get(this.groupButton).invoke('text');
  }

  /**
   * Gets the text of the Filter button.
   * @returns {Cypress.Chainable<string>} - A Cypress chainable that yields the text of the Filter button.
   */
  getFilterButtonText() {
    return cy.get(this.filterButton).invoke('text');
  }

  /**
   * Checks if the table is empty.
   * @returns {Cypress.Chainable<boolean>} - A Cypress chainable that yields true if the table is empty, false otherwise.
   */
  isTableEmpty() {
    return cy.get(this.tableRow).should('not.exist');
  }

  /**
   * Gets the number of rows in the table.
   * @returns {Cypress.Chainable<number>} - A Cypress chainable that yields the number of rows in the table.
   */
  getTableRowsCount() {
    return cy.get(this.tableRow).its('length');
  }

  /**
   * Asserts that the custom mappings table is visible.
   */
  assertTableIsVisible() {
    cy.get(this.customMappingsTable).should('be.visible');
    return this;
  }
}
```