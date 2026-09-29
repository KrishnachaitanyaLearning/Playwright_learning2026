import {test} from "@playwright/test"
test.setTimeout(60000)
test("Login Test",async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    let titleOfTheApplication=await page.title();
    console.log(`Title of the Application ${titleOfTheApplication}`);

    let urlOfString=page.url();
    console.log(`url of the Application ${urlOfString}`);

})