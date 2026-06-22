const EmailUtils = require('../utils/emailUtils');

class Register {
    constructor(page) {

       this.page = page;

       this.firstName = page.locator('#firstName');

       this.lastName = page.locator('#lastName');

       this.userEmail = page.locator('#userEmail');

       this.userMobile = page.locator('#userMobile');

       this.occupation =  page.locator("select[formcontrolname='occupation']");

       this.gender = page.locator("input[value='Female']");

       this.password = page.locator('#userPassword');

       this.confirmPassword = page.locator('#confirmPassword');

       this.MandatoryCheckBox = page.locator("input[formcontrolname='required']");

       this.registerbutton = page.locator('#login');

       this.successMessage = page.locator('h1', {hasText: 'Account Created Successfully'});

       this.login = page.locator("button[routerlink='/auth']");

    }
    async CompleteRegistration(email) {

        await this.firstName.fill('Darshana');

        await this.lastName.fill('Chaudhari');

        await this.userEmail.fill(email);
      
        const mobilenumber = 9175588024;

        await this.userMobile.fill(mobilenumber.toString());

        await this.occupation.selectOption({ label: 'Engineer' });

        await this.gender.check();

        await this.password.fill('@Darshu@2393');

        await this.confirmPassword.fill('@Darshu@2393');

        await this.MandatoryCheckBox.check();

        await this.registerbutton.click();

        

        //await page.waitForLoadState('networkidle');
}

 async NavigateToLogin() {

     await this.login.click();

    }
}
module.exports = Register;