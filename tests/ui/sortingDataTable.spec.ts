
import {test , expect} from "../../fixtures/pageObjects"
import searchData from "../../TestData/searchData.json"

test('Sorting on the Age column', async ({ tablePage }) => {

    await tablePage.clickColumnHeader(searchData.coloumnAge);
    const stringAgesAsce = await tablePage.getColumnDataByHeader(searchData.coloumnAge);
    const actualAgesAsce = stringAgesAsce.map(age => parseInt(age, 10));
    //console.log(actualAgesAsce)
    const expectedAgesAsce = [...actualAgesAsce].sort((a , b) => a - b);
    //console.log(expectedAgesAsce)
    expect(actualAgesAsce).toEqual(expectedAgesAsce);

});

test(`Sorting on the Name column`, async ({ tablePage }) => {

    await tablePage.clickColumnHeader(searchData.coloumnName);
    await tablePage.clickColumnHeader(searchData.coloumnName);
    await tablePage.clickColumnHeader(searchData.coloumnName);
    const actualNamesAsce = await tablePage.getColumnDataByHeader(searchData.coloumnName);
    //console.log(actualNamesAsce)
    const expectedNamesAsce = [...actualNamesAsce].sort();
    //console.log(expectedNamesAsce)
    expect(actualNamesAsce).toEqual(expectedNamesAsce);

});



