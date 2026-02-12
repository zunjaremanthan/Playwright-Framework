const { test, expect } = require('@playwright/test')
//import {test, expect} from '@playwright/test'
test('Home Page',async({page})=>{

   await page.goto('https://www.demoblaze.com/#')

   const pagetitle=await page.title();
   console.log('page title is',pagetitle)
   await expect(page).toHaveTitle('STORE')
   await expect(page).toHaveURL('https://www.demoblaze.com/#')
   await page.close()
})

//to run the code open terminal and paste below code

//npx playwright test tests/Annotations.spec.js(runs on many browsers)
//npx playwright test tests/Annotations.spec.js --project chromium (runs on specific browsers)
//npx playwright test tests/Annotations.spec.js --project chromium --headed (runs on specific browsers and run on headed mode)