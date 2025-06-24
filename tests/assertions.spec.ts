import {test,expect} from '@playwright/test'
import { assert } from 'console';

test('Assertion',async({page}) => {
await page.setViewportSize({width:1920, height:1080});
await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');

await expect(page).toHaveURL('http://www.tizag.com/htmlT/htmlcheckboxes.php');
console.log('URL assertion passed');

await expect(page).not.toHaveURL('http....')
console.log('URL assertion failed');

const link=await page.locator("//a[normalize-space()='HTML - Tags']");
await expect(link).toHaveText('HTML - Tags');
console.log('link assertion passed');

const checkboxe = await page.locator('//div[4]//input[1]');
await expect (checkboxe).toBeVisible();
console.log('assertion assertion passed');


await checkboxe.check();
await expect (checkboxe).toBeChecked();
console.log('assertion assertion passed');


await page.waitForTimeout(2000);
});