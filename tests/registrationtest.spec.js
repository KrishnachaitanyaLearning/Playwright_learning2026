import{test,expect} from  "@playwright/test"
test.setTimeout(60000)
test("registration test",async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    //await expect(page).toHaveTitle(/Learn/);
    await expect(page).toHaveTitle("Learn Automation Courses");

    await page.getByRole('link', { name: "New user? Signup" }).click()
    await page.getByRole('heading', { name: 'Sign Up' }).isVisible();
    //await expect(page.getByText('Sign Up'))
    //expect("Krishna").toBe("Krishna")
    await page.getByRole('textbox',{name:"Name"}).fill("Krishna");
    await page.getByRole('textbox',{name:"Email"}).fill("chaitugkc123@gmail.com");
    await page.getByRole('textbox',{name:"Password must be atleast 6"}).fill("abcd@1234");
await page.getByRole('checkbox',{name: "PW-chromium-1790201095804"}).click();
await page.locator('#gender2').click();
await page.getByAltText("Login").isVisible();
await page.locator("//select[@id='state']")
//getByRole('img', { name: 'Login' })

})