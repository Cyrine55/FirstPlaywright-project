import {test,expect} from '@playwright/test'
test('hundle Table Dynamic,delete element',async({page}) => {

await page.goto('https://ton-site.com');

const rows= await page.locator('#usersTable tbody tr');
const rowsCount= await rows.count();
const targetName :string= "Ali";

for (let  i=0 ;i <rowsCount; i++){
//const nameCell  = await  rows.nth(i).locator('td').nth(0).innerText()
const nameCell = rows.nth(i).locator('td').nth(0);
const cellText  = await nameCell.textContent();


if(cellText?.trim().toLowerCase() === targetName.toLowerCase()){
 const deleteBtn = rows.nth(i).locator('.delete-btn'); 
 await deleteBtn.click();
 console.log(`Suppression réussie pour : ${cellText.trim()}`);
 break;
}
}











    });