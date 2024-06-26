/* eslint-disable playwright/prefer-web-first-assertions */
// tests/e2e/calculator.spec.ts

import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5173';

test.describe('Calculator', () => {
  
  test.beforeEach(async ({ page }) => {
    // Remplacer par l'URL correcte où votre composant est accessible
    await page.goto(BASE_URL);
  });

  test('performs addition', async ({ page }) => {
    await page.fill('input[placeholder="First number"]', '3');
    await page.fill('input[placeholder="Second number"]', '5');
    await page.click('button:has-text("Ajouter")');

    const result = await page.locator('div >> text=Result').textContent();
    expect(result).toBe('Result: 8');
  });

  test('performs subtraction', async ({ page }) => {
    await page.fill('input[placeholder="First number"]', '10');
    await page.fill('input[placeholder="Second number"]', '4');
    await page.click('button:has-text("Soustraire")');

    const result = await page.locator('div >> text=Result').textContent();
    expect(result).toBe('Result: 6');
  });

  test('performs multiplication', async ({ page }) => {
    await page.fill('input[placeholder="First number"]', '3');
    await page.fill('input[placeholder="Second number"]', '7');
    await page.click('button:has-text("Multiplier")');

    const result = await page.locator('div >> text=Result').textContent();
    expect(result).toBe('Result: 21');
  });

  test('performs division', async ({ page }) => {
    await page.fill('input[placeholder="First number"]', '10');
    await page.fill('input[placeholder="Second number"]', '2');
    await page.click('button:has-text("Diviser")');

    const result = await page.locator('div >> text=Result').textContent();
    expect(result).toBe('Result: 5');
  });

});
