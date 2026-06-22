import { test, expect } from '@playwright/test';
const Login = require('../pages/loginPage');
const InvalidRegister = require('../pages/invalidRegistration');

//const Register = require('../pages/registerPage');
//const EmailUtils = require('../utils/emailUtils');
test('InvalidRegistrationAndLogin', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

     const loginPage = new Login(page);
    await loginPage.navigateToRegistration();

const invalidRegistration = new InvalidRegister(page);
await invalidRegistration.InvalidCompleteRegistration();
})