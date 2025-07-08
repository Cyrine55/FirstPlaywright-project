import { test, expect } from '@playwright/test';

import data from '../testData/data.json';

test('jsonData', async ({ page }) => {
  await page.goto('https://www.way2automation.com/way2auto_jquery/index.php');
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill(data[0].username);
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('testset');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('setset@set.set');
  await page.getByRole('combobox').selectOption('Guinea-Bissau');
  await page.locator('input[name="city"]').click();
  await page.locator('input[name="city"]').fill('tset');
  await page.locator('#load_box input[name="username"]').click();
  await page.locator('#load_box input[name="username"]').fill('etsrydht');
  await page.locator('#load_box input[name="password"]').click();
  await page.locator('#load_box input[name="password"]').fill('qetsrt');
  await page.getByRole('button', { name: 'Submit' }).click();
});