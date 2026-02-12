const{test, expect}=require('@playwright/test')

var usersid;

test("Get user", async({request})=>{   //to test api response use"request' insted of "page"
    const response=await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json()) //get resopnse in json format
    expect(response.status()).toBe(200)
})

test("Create user", async({request})=>{
    const response=await request.post('https://reqres.in/api/users',
        {
            data:{"name":"Manthan", "job":"Trainer"},
            headers:{"Accept":"application/json"}
        }
    )
    console.log(await response.json())
    expect(response.status()).toBe(201)

    var res=await response.json()  //returns response
    usersid=res.usersid   //captured id in userid variable
})

test("Update user", async({request})=>{
    const response=await request.put('https://reqres.in/api/users/'+usersid, //added userid here which we created in post request
        {
            data:{"name":"Manthan", "job":"Engineer"},  //changed Trainer to Engineer
            headers:{"Accept":"application/json"}
        }
    )
    console.log(await response.json())
    expect(response.status()).toBe(200)
})
test("Delete user", async({request})=>{
    const response=await request.delete('https://reqres.in/api/users/'+usersid)
    expect(response.status()).toBe(204)
})

