import {test,expect} from '@playwright/test'
test('hundle SelectDropDown',async({page}) => {
await page.setViewportSize({width:1920, height:1080});
await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');

const checkboxes=await page.locator('[name="sports"]');
const checkboxesCount= await checkboxes.count();
console.log(checkboxesCount);

for(let i=0;i<checkboxesCount; i++){
    await checkboxes.nth(i).click();
}

await page.waitForTimeout(2000);





});