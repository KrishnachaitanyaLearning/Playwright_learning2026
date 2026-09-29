import{test,expect} from  "@playwright/test"
test.setTimeout(60000)
test("admin login2",async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    //await expect(page).toHaveTitle(/Learn/);
    await expect(page).toHaveTitle("Learn Automation Courses");

    await page.getByRole('textbox',{name:"Enter Email"}).fill("admin@email.com");
    await page.getByRole('textbox',{name:"Enter Password"}).fill("admin@123");
    await page.getByRole('button',{name:"Sign in"}).click();
    await page.getByText('text',{name:"Welcome Admin Manager to Learn Automation Courses"}).isVisible();
    
    //await page.getByRole('button', { name: 'Sign in' })

})