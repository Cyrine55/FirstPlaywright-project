import {test,expect} from '@playwright/test'
test('hundle SelectDropDown',async({page}) => {
await page.setViewportSize({width:1920, height:1080});
await page.goto('https://www.wikipedia.org/');

await page.selectOption('select',{label:'Eesti'});
await page.waitForTimeout(2000);
await page.selectOption('select',{value:'de'});
await page.waitForTimeout(2000);
await page.selectOption('select',{index:2});
await page.waitForTimeout(2000);

const options=await page.locator('option').all();
console.log(options.length);

for(const option of options){
    const text=await option.innerText();
    console.log(`le text est: ${text}`);

}
});