const{test, expect}=require('@playwright/test')

test('test1@sanity',async({page})=>{
    console.log('this is my test 1...')
})

//run test by using this code (npx playwright test tests/Tags.spec.js --project chromium --grep @sanity or @reg or '@sanity@reg')
//--grep @sanity --grep-invert @reg // this will excute only and only @sanity tets and exclude @reg tests
test('test2@sanity',async({page})=>{
    console.log('this is my test 2...')
})

test('test3@reg',async({page})=>{
    console.log('this is my test 3...')
})

test('test4@reg',async({page})=>{
    console.log('this is my test 4...')
})

test('test5@sanity@reg ',async({page})=>{
    console.log('this is my test 5...')
})