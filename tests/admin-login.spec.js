import{test,expect} from "@playwright/test"
test.setTimeout(60000)
test("adminlogin",async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    let pagetitle=await page.title()
    console.log(pagetitle)
    await expect(page).toHaveTitle(/Learn/)

    await page.getByPlaceholder("Enter Email").fill("admin@email.com")
    await page.getByPlaceholder("Enter Password").fill("admin@123")
    //await page.getByPlaceholder("Enter Password").pressSequentially("admin@email.com",{delay:500})
    await page.getByText("Sign in").nth(1).click();
    //await page.getByRole('button', { name: "sign in"}).click();
})