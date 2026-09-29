import {test,expect} from "@playwright/test"
test.setTimeout(60000)

test("expectdemo",async({page})=>{
await page.goto("https://freelance-learn-automation.vercel.app/login")
let titleoftheapplication=await page.title()
console.log(titleoftheapplication)
})


test("expectdemo1",async({page})=>{

    //expect(10).toBe(10);
    expect("Krishna").toBe("Krishna")
    expect(true).toBeTruthy()//button should be visible,enabled,have some text
    expect(false).toBeFalsy()
    expect(10).toBeGreaterThan(5)//actual value should be always greater than 5
    expect("Welcome to playwright").toContain("playwright")

})