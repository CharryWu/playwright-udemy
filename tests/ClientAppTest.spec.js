const { test, expect } = require('@playwright/test');
test('Login Success', async ({ browser, page }) => {
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('#userEmail').type('anshika@gmail.com');
    await page.locator('#userPassword').type('Iamking@000');
    await page.locator('#login').click();
    // await page.waitForLoadState('networkidle');
    // await expect(page.locator('text=Incorrect username/password.').first()).toBeVisible();
    await page.locator('.card-body b').first().waitFor();
    console.log(await page.locator('.card-body b').allTextContents());
    // await page.pause();
})

test('New Tab Link', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator('[href*="documents-request"]');
    const [newPage, _] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click()
    ]);
    const text = await newPage.locator('.red').textContent();
    console.log(text);
});

test('Client App Login', async ({ page }) => {
    const products = page.locator('.card-body');
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('#userEmail').type('anshika@gmail.com');
    await page.locator('#userPassword').type('Iamking@000');
    await page.locator('#login').click();
    await page.locator('[value="Login"]').click();
    await page.waitForLoadState('networkidle');
    const titles = await page.locator('.card-body b').allTextContents();
    const count = products.count();
    for (let i = 0; i < count; i++) {
        products.nth(i).locator('b') //
    }
});