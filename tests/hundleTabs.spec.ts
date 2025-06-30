import {test,expect} from '@playwright/test'


test('TabHundle',async({page}) => {

await page.goto('https://www.way2automation.com/');

await Promise.all([
    page.waitForEvent('popup'),
page.locator("//a[@aria-label='Facebook']").click()

])

await page.screenshot({path:'screenshot/screenpage.png',fullPage:true});
});