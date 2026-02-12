const{test, expect}=require('@playwright/test')
test('Handle hidden dropdowns', async ({page})=>{

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   await page.getByPlaceholder('Username').fill('Admin')
   await page.getByPlaceholder('Password').fill('admin123')
   await page.locator("//button[@type='submit']").click()

   await page.getByText('PIM').click()

   //click on dropdown
   await page.locator('//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]')
   
   //waiting for options
   await page.waitForTimeout(2000)

   const options=await page.$$("//div[@role='listbox']//span")
   for(let option of options)
   {
      const texts=await option.textContent()
      //console.log(texts)
      if(texts.includes('QA Lead'))
      {
         await option.click()
         break
      }
   }
   await page.waitForTimeout(4000)



})