import {test,expect} from '@playwright/test'
test('hundle mouseHover',async({page}) => {
await page.setViewportSize({width:1920, height:1080});
await page.goto('https://www.way2automation.com/#');

const videoTurotiel= await page.locator("//li[@id='menu-item-27597']/a/span[2]");
await videoTurotiel.hover();
await page.locator("//li[@id='menu-item-27598']//span[@class='menu-text'][normalize-space()='Lifetime Membership']").click();


await page.waitForTimeout(2000);
});