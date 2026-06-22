import { test, expect } from '@playwright/test';
const Product = require('../pages/productPage');
//const Login = require('../pages/loginPage');
//const Register = require('../pages/registerPage');
test('AddToCart', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    const productPage = new Product(page);
    await productPage.addToCart();

})