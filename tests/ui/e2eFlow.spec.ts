import {test , expect} from "../../fixtures/pageObjects"
import paginationData from "../../TestData/paginationData.json"
import searchData from "../../TestData/searchData.json"

test('E2E Flow' , async ({tablePage}) => {
    
    await tablePage.changePageSize('25');
    await expect(tablePage.getTableRows()).toHaveCount(25);
    await expect(tablePage.paginationInfo).toContainText(paginationData.dropDown2_Message);

    await tablePage.clickColumnHeader(searchData.coloumnAge);
    const stringAgesAsce = await tablePage.getColumnDataByHeader(searchData.coloumnAge);
    const actualAgesAsce = stringAgesAsce.map(age => parseInt(age, 10));
    const expectedAgesAsce = [...actualAgesAsce].sort((a , b) => a - b);
    expect(actualAgesAsce).toEqual(expectedAgesAsce);

    await tablePage.search(searchData.name1)
    const actualNames = await tablePage.getAllResultNames()
 
    for (const name of actualNames) {
        expect(name.toLowerCase()).toContain(searchData.name1.toLowerCase());
    }

    await expect(tablePage.prevButton).toBeDisabled();
    await expect(tablePage.nextButton).toBeDisabled();
    

})