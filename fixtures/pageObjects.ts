
import { test as base } from '@playwright/test';
import { DataTablePage } from '../pages/dataTablePage';
import urlData from "../TestData/urlData.json";


type Fixtures = {
  tablePage: DataTablePage;
};

export const test = base.extend<Fixtures>({
  tablePage: async ({ page }, use) => {

    const tablePage = new DataTablePage(page);

    await tablePage.navigate(urlData.pathURL);

    await use(tablePage);
  },
});

export { expect } from '@playwright/test';