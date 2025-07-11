import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { parse } from 'csv-parse/sync';


const csvFilePath = path.resolve(__dirname, '../testData/dataCSV.csv');
const fileContent = fs.readFileSync(csvFilePath, 'utf-8');
const contents = parse(fileContent, {
  columns: true,
  skip_empty_lines: true,
  delimiter: ',',
}) as Record<string, string>[];

test.describe('Remplissage via CSV externe', () => {
  for (const content of contents) {

    test(`Formulaire rempli pour ${content.username}`, async ({ page }) => {
      await page.goto('https://accounts.saucelabs.com/am/XUI/#login/');
      await page.locator('#idToken1').fill(content.username || '');
      await page.locator('#idToken2').fill(content.password || '');
     
      await page.waitForTimeout(3000);
    });
  }
});
