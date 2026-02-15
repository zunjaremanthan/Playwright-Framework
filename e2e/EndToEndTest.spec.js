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