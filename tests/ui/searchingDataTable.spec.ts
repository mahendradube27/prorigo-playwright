
import {test , expect} from "../../fixtures/pageObjects"
import searchData from "../../TestData/searchData.json"

test('Valid Search validation across pages', async ({ tablePage }) => {

   await tablePage.search(searchData.name1)
   const actualNames = await tablePage.getAllResultNames()
   //console.log(actualNames)
   
   for (const name of actualNames) {
        expect(name.toLowerCase()).toContain(searchData.name1.toLowerCase());
    }

});

test('Invalid Search validation across pages', async ({ tablePage }) => {

   await tablePage.search(searchData.name5)
   const actualNames = await tablePage.getAllResultNames()
   //console.log(actualNames)
   
   for (const name of actualNames) {
        expect(name).toContain(searchData.noRecordsMessage);
    }

});
