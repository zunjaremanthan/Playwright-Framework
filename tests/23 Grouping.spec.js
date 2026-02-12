const{test, epect, expect}=require('@playwright/test')

test.beforeAll(async()=>{
    console.log('this is before all hook...')
})

test.afterAll(async()=>{
    console.log('this is after all hook...')
})

test.beforeEach(async()=>{
    console.log('this is before each hook...')
})

test.afterEach(async()=>{
    console.log('this is after each hook...')
})
test.describe.skip('Group1', ()=>{
test('Test1', async({page})=>{   
    console.log('this is test 1...')
})

test('Test2', async({page})=>{   
    console.log('this is test 2...')
})
})

test.describe('Group2',()=>{
test('Test3', async({page})=>{   
    console.log('this is test 3...')
})

test('Test4',()=>{   
    console.log('this is test 4...')
})
})