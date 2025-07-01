import {test,expect} from '@playwright/test'


test('uploadFile',async({page}) => {

await page.goto('https://www.file.io/');
await page.locator('#select-files-input').setInputFiles('C:\\Users\\Cyrine\\Desktop\\Cyrine\\BDD.PNG');


await page.screenshot({path:'screenshot/screenpage.png',fullPage:true});
});