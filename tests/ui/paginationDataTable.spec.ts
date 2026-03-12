import {test , expect} from "../../fixtures/pageObjects"
import paginationData from "../../TestData/paginationData.json"

test('Verify Next and Previous pagination navigation', async ({tablePage}) => {
    
    await expect(tablePage.paginationInfo).toContainText(paginationData.page1_Message);

    await tablePage.clickNext();
    await expect(tablePage.activePageButton).toHaveText(paginationData.pageNumber2);
    await expect(tablePage.paginationInfo).toContainText(paginationData.page2_Message);

    await tablePage.clickPrevious();
    await expect(tablePage.activePageButton).toHaveText(paginationData.pageNumber1);
    await expect(tablePage.paginationInfo).toContainText(paginationData.page1_Message);

})

test('Verify pagination boundaries (disabled buttons)', async ({tablePage}) => {
       
    await expect(tablePage.prevButton).toBeDisabled();

    await tablePage.clickPageNumber(paginationData.pageNumber6);
    await expect(tablePage.paginationInfo).toContainText(paginationData.page6_Message);

    await expect(tablePage.nextButton).toBeDisabled();

})