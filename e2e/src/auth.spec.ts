import { test, expect } from '@playwright/test';
import responses from 'responses/auth';

test('Sign-in', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  const title = await page.innerText('#root > div > div > form > div:nth-child(1) > div');
  expect(title).toBe('Sign in to our platform');

  await page.route('**/api/auth/sign-in', (route) =>
    route.fulfill({
      status: 200,
      body: JSON.stringify(responses['post_/sign-in']),
    }),
  );

  await page.click('#sign-in');

  await expect(page).toHaveURL(/.*dashboard/);
});
