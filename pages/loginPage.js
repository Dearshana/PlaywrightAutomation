const EmailUtils = require('../utils/emailUtils');
// login page
class Login {
    constructor(page) {

       this.page = page;

       this.register = page.locator("a[routerlink='/auth/register']");


       this.userEmail = page.locator('#userEmail');

       this.password = page.locator('#userPassword');

       this.loginButton = page.locator("input[name='login']");

      

    }
    async navigateToRegistration() {

        await this.register.click();

    }

    async doLogin(email) {

         
         await this.userEmail.fill(email);

         await this.password.fill('@Darshu@2393');

       await this.loginButton.click();

    }
}
module.exports = Login;