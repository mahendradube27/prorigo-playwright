import { Page, Locator } from '@playwright/test';

export class DataTablePage {

  readonly page: Page;
  readonly searchInput: Locator;
  readonly tableRows : Locator;
  readonly allNameCells : Locator;
  readonly tableHeaders : Locator;
  readonly paginationInfo : Locator;
  readonly nextButton : Locator;
  readonly prevButton : Locator;
  readonly paginationButtons : Locator;
  readonly activePageButton : Locator;
  readonly entriesDropdown : Locator;


  constructor(page: Page) {

    this.page = page;
    this.searchInput = page.getByRole('searchbox', { name: 'Search:' });
    this.tableRows = page.locator("#example tbody tr");
    this.allNameCells = page.locator('#example tbody tr td:nth-child(1)');
    this.tableHeaders = page.locator('#example thead th');

    this.paginationInfo = page.locator('#example_info');
    this.nextButton = page.getByRole('link', { name: 'Next', exact: true });
    this.prevButton = page.getByRole('link', { name: 'Previous', exact: true });
    this.paginationButtons = page.locator('.dt-paging');
    this.activePageButton = page.locator('.dt-paging-button.current');

    this.entriesDropdown = page.getByLabel('entries per page');

  }

  async navigate(pathURL : string) {
    await this.page.goto(pathURL);
  }

  async search(value: string) {
    await this.searchInput.fill(value);
  }

  async getAllResultNames(): Promise<string[]> {
    return await this.allNameCells.allInnerTexts();
  }

  async clickColumnHeader(columnName: string) {
      await this.tableHeaders.filter({hasText : columnName}).click();
  }

  async getColumnDataByHeader(columnName: string): Promise<string[]> {
        const headersText = await this.tableHeaders.allInnerTexts();
        const columnIndex = headersText.findIndex(header => header.trim() === columnName) + 1;

        if (columnIndex === 0) {
            throw new Error(`Column "${columnName}" not found.`);
        }

        const columnCells = this.page.locator(`#example tbody tr td:nth-child(${columnIndex})`);
        return await columnCells.allInnerTexts();
    }

  async clickNext() {
        await this.nextButton.click();
    }

    async clickPrevious() {
        await this.prevButton.click();
    }

    async clickPageNumber(pageNumber: string) {
        await this.paginationButtons
            .getByRole('link', { name: pageNumber, exact: true })
            .click();
    }

    async changePageSize(value: string) {
        await this.entriesDropdown.selectOption(value);  
    }

    getTableRows() : Locator{
      return this.tableRows
    }

}