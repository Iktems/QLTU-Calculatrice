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
});