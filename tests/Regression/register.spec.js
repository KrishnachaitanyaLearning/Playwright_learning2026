import{test,expect} from '@playwright/test'


test('RegisterTest',async({page})=>{
await page.goto("https://www.google.com");
await expect(page).toHaveTitle(/google/);


})