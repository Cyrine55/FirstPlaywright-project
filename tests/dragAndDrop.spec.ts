import {test,expect} from '@playwright/test'


test('DragAndDrop',async({page}) => {
await page.setViewportSize({width:1920, height:1080});
await page.goto('https://jqueryui.com/droppable/');

const frame = page.frameLocator('.demo-frame');
const dragable =await frame.locator("//div[@id='draggable']");
const dropable =await frame.locator("//div[@id='droppable']");

const draggableBox = await dragable.boundingBox();
const dropableBox = await dropable.boundingBox();

if(draggableBox && dropableBox){
await page.mouse.move(
    draggableBox.x + draggableBox.width/2,
    draggableBox.y + draggableBox.width/2
);

await page.mouse.down();
await page.mouse.move(
    dropableBox.x + dropableBox.width/2,
    dropableBox.y + dropableBox.width/2
);

await page.mouse.up();
}
});