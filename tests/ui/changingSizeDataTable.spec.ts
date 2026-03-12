import {test , expect} from "../../fixtures/pageObjects"
import paginationData from "../../TestData/paginationData.json"

test('Verify changing page size updates row count and table info correctly', async ({tablePage}) => {
    
    await expect(tablePage.getTableRows()).toHaveCount(10);
    await expect(tablePage.paginationInfo).toContainText(paginationData.dropDown1_Message);
  
    await tablePage.changePageSize('25');
    await expect(tablePage.getTableRows()).toHaveCount(25);
    await expect(tablePage.paginationInfo).toContainText(paginationData.dropDown2_Message);

    await tablePage.changePageSize('50');
    await expect(tablePage.paginationInfo).toContainText(paginationData.dropDown3_Message);
    await expect(tablePage.getTableRows()).toHaveCount(50)

    await tablePage.changePageSize('100');
    await expect(tablePage.getTableRows()).toHaveCount(57);
    await expect(tablePage.paginationInfo).toContainText(paginationData.dropDown4_Message);
    
})