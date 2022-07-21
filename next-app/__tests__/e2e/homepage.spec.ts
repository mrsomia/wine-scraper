// e2e/example.spec.ts

import { test, expect } from '@playwright/test'

test('should load the homepage', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')

  await expect(page.locator('h1')).toContainText('Items')

  await expect(page.locator('text=19 Crimes Dark Red Wine')).toBeVisible()
  await expect(page.locator('text=19 Crimes Red Wine')).toBeVisible()
})