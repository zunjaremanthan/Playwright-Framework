import {test, expect} from '@playwright/test'
test ('test', async({page})=>{
    //use this(npx playwright show-trace test-results\Tracing-test-chromium\trace.zip) command to trace the test

    await page.goto('https://www.demoblaze.com/');
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('manty@gmail.com');
    await page.locator('#loginpassword').fill('manty');
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(2000)
    await page.getByRole('link', { name: 'Log ou98' }).click();
})