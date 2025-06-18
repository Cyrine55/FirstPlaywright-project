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