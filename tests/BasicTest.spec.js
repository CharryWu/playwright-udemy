const { test, expect } = require('@playwright/test');

test('First playwright test', async ({ browser, page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
    await expect(page.locator('text=Get Started').first()).toBeVisible();
});

test('Login Error', async ({ browser, page }) => {
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const loginButton = page.locator('#signInBtn');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('rahul');
    await password.fill('shetty');
    await loginButton.click();
    // await expect(page.locator('text=Incorrect username/password.').first()).toBeVisible();
    await expect(page.locator('[style*="block"]').first()).toBeVisible();
    await expect(page.locator('[style*="block"]').first()).toContainText('Incorrect username/password.');
})

test('Login Success', async ({ browser, page }) => {
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const loginButton = page.locator('#signInBtn');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    await loginButton.click();
    await page.waitForLoadState('networkidle');
    // await expect(page.locator('text=Incorrect username/password.').first()).toBeVisible();
    console.log(await page.locator('.card-body a').nth(0).textContent());
})