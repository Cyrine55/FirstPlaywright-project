import {test,expect} from '@playwright/test'
import { title } from 'process';

test('first test',async({page})=>{
await page.goto('https://playwright.dev/');
const title=await page.title();
console.log(title);
expect(title).toContain('Playwright');
});