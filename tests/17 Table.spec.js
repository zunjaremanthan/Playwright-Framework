const{test, expect}=require('@playwright/test')
test('Handling Table', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const table=await page.locator('#productTable')

    //total no of rows and columns
    const columns=await table.locator('thead tr th')
    console.log('no of columns:', await columns.count())

    const rows=await table.locator('tbody tr')
    console.log('no of rows:', await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    //select checkbox for Tablet
    /*const matchedrow=rows.filter({     //used filter method
        has: page.locator('td'),   //filter by td
        hasText: 'Tablet'   //filter by product name
    })
    matchedrow.locator('input').check()*/

    await page.waitForTimeout(5000)

    //select multiple products by re-usable function

    await selectProduct(rows, page, 'Smartphone')
    await selectProduct(rows, page, 'Tablet')
    await selectProduct(rows, page, 'Wireless Earbuds')

})
   //declarared function
    async function selectProduct(rows, page, name)
    {
        const matchedrow=rows.filter({     
        has: page.locator('td'),   
        hasText: name
        })
        await matchedrow.locator('input').check()
    }
        
    

