const{test, expect}=require('@playwright/test')
test('UploadSingleFiles', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.waitForSelector('#singleFileInput')
    await page.locator('#singleFileInput').setInputFiles('tests/UploadFiles/testfile.pdf')   //just change '\' to '/' in path
                                                          
    //Remove Files
    await page.locator('#singleFileInput').setInputFiles([])   //add empty array[]
    await page.waitForTimeout(2000)
})

test('UploadMultipleFiles', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.waitForSelector('#multipleFilesInput')
    await page.locator('#multipleFilesInput').setInputFiles(['tests/UploadFiles/testfile.pdf', 'tests/UploadFiles/testfile2.pdf'])

    await page.waitForTimeout(2000)

    //Remove Files
    await page.locator('#multipleFilesInput').setInputFiles([])   //add empty array[]
    await page.waitForTimeout(4000)


})