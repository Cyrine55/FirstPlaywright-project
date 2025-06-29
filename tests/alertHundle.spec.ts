import {test,expect} from '@playwright/test'


test('alertHundle',async({page}) => {

await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

await page.locator(".signin-btn").click();
page.on('dialog',async dialog =>{
    await page.waitForTimeout(2000);
    console.log(dialog.message());
    await dialog.accept();
});










});