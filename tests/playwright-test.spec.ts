import {test,expect} from '@playwright/test'
import { title } from 'process';

test('first test',async({page})=>{
await page.goto('https://playwright.dev/');
const title=await page.title();
console.log(title);
expect(title).toContain('Playwright');

await page.goto("http://gmail.com");
await page.waitForTimeout(2000);

await page.goBack();
await page.waitForTimeout(2000);

await page.goForward();
await page.waitForTimeout(2000);

await page.reload();
await page.waitForTimeout(2000);
});



test('finding Element',async({page})=>{
    await page.setViewportSize({width:1920, height:1080});
    await page.goto('http://gmail.com');

    await page.getByLabel('Email or phone',{exact:true}).fill("test@test.fl");
    await page.locator('//*[@id="identifierId"]').fill("hdjkjch0");
   

});

