// tests/calculator.spec.js
import {
  test,
  expect
} from '@playwright/test';

test.describe('Calculator', () => {
  test.beforeEach(async ({
    page
  }) => {
    await page.goto('/');
  });

  test('Il doit additionner 2 chiffres et donner la bonne réponse', async ({
    page
  }) => {
    await page.click('text=1');
    await page.click('text=+');
    await page.click('text=2');
    await page.click('text==');
    const result = await page.inputValue('input[type="text"]');
    expect(result).toBe('3');
  });

  test('Il doit soustraire 2 chiffres et donner la bonne réponse', async ({
    page
  }) => {
    await page.click('text=5');
    await page.click('text=-');
    await page.click('text=3');
    await page.click('text==');
    const result = await page.inputValue('input[type="text"]');
    expect(result).toBe('2');
  });

  test('Il doit multiplier 2 chiffres et donner la bonne réponse', async ({
    page
  }) => {
    await page.click('text=5');
    await page.click('text=x');
    await page.click('text=2');
    await page.click('text==');
    const result = await page.inputValue('input[type="text"]');
    expect(result).toBe('10');
  });

  test('Il doit diviser 2 chiffres et donner la bonne réponse', async ({
    page
  }) => {
    await page.click('text=1');
    await page.click('text=0');
    await page.click('text=/');
    await page.click('text=2');
    await page.click('text==');
    const result = await page.inputValue('input[type="text"]');
    expect(result).toBe('5');
  });

  test('La division par 0 doit donner Infinity', async ({
    page
  }) => {
    await page.click('text=1');
    await page.click('text=/');
    await page.click('text=0');
    await page.click('text==');
    const result = await page.inputValue('input[type="text"]');
    expect(result).toBe('Infinity');
  });
});