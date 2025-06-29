import {test,expect} from '@playwright/test'


test('DragAndDrop',async({page}) => {

await page.goto('https://deluxe-menu.com/popup-mode-sample.html');

const img = await page.locator(" //img[@src='data-samples/images/popup_pic.gif']");
await img.click({ button:'right'});

await page.locator("#dm2m1i0tdT").hover();



await page.waitForTimeout(3000);
});