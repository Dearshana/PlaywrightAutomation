import { test, expect } from '@playwright/test';
const Login = require('../pages/loginPage');
const Register = require('../pages/registerPage');
const EmailUtils = require('../utils/emailUtils');
test.skip('RegistrationAndLogin', async ({ page }) => {

    const email = EmailUtils.generateRandomEmail();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    const loginPage = new Login(page);
    await loginPage.navigateToRegistration();

    const registerPage = new Register(page);
    await registerPage.CompleteRegistration(email);
    await page.waitForTimeout(5000); // 5 seconds
    await expect(registerPage.successMessage).toBeVisible();
   

    await registerPage.NavigateToLogin();

    //const loginPage = new Login(page);
    await loginPage.doLogin(email);

    await page.waitForTimeout(5000);
     
   await expect(page).toHaveURL(/dashboard/);
})