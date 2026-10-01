import {test,expect} from "@playwright/test"
test.setTimeout(60000);
test("Login Test",async({page})=>{
//await page.goto("https://playwright.dev")
await page.goto("https://playwright.dev/docs/writing-tests#first-test")
let pagetitle=await page.title()
console.log(pagetitle)
await expect(page).toHaveTitle(/playwright/i)
//https://playwright.dev/docs/writing-tests#first-test
await expect(page).toHaveURL(/first-test/)
})



