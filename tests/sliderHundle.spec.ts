import {test,expect} from '@playwright/test'
test('hundle slider',async({page}) => {
await page.setViewportSize({width:1920, height:1080});
await page.goto('https://jqueryui.com/slider/');

const slider = page.locator(".ui-slider-handle.ui-corner-all.ui-state-default.ui-state-active");
const boundingBox= await slider.boundingBox();
if (boundingBox) {
  await page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(boundingBox.x + 100, boundingBox.y); // déplace de 100px à droite
  await page.mouse.up();
}
await page.waitForTimeout(2000);
});