import{test,expect} from '@playwright/test'
test.setTimeout(60000);
test('RegisterTest2',async({page})=>{
await page.goto("https://www.google.com");
await expect(page).toHaveTitle(/Google/)
})

