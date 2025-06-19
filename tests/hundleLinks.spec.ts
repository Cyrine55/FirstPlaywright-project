import {test,expect} from '@playwright/test'
test('hundle SelectDropDown',async({page}) => {
await page.setViewportSize({width:1920, height:1080});
await page.goto('https://www.wikipedia.org/');

const links = await page.locator('a').all();
const nbLinks = links.length;
console.log(nbLinks);

for(const link of links){
    const text = await link.innerText();
    const url= await link.getAttribute('href');
    console.log(`${text} ${url}`) ;

}
});