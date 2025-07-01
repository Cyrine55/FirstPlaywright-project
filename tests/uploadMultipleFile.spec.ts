import {test,expect} from '@playwright/test'


test('uploadFile',async({page}) => {

await page.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_fileupload_multiple');
const iframe=await page.frameLocator('#iframeResult');

await iframe.locator('#myFile').setInputFiles(['C:\\Users\\Cyrine\\Desktop\\Cyrine\\BDD.PNG',
    'C:\\Users\\Cyrine\\Desktop\\Cyrine\\ss.PNG'
]);


});