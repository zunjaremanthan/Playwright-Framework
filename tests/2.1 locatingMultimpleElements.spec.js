const{test, expect}=require('@playwright/test')
test("Multiple locators", async({page})=>{

    await page.goto('https://www.demoblaze.com/')
  
    //print links
    /*const links=await page.$$('a')
    for(const link of links)
    {
        const linktext=await link.textContent()
        console.log(linktext)
    }*/

    //print products
    const products=await page.$$('//a[@class="hrefch"]')  
    for(const product of products)
    {
        const productname=await product.textContent()
        console.log(productname)
    }


})