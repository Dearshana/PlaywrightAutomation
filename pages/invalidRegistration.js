const EmailUtils = require('../utils/emailUtils');

class InvalidRegister {
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

       this.message = page.locator('.invalid-feedback');

    }
    async InvalidCompleteRegistration() {

        await this.firstName.fill('Darshana');

        await this.lastName.fill('Chaudhari');

        await this.userEmail.fill('DarsinvalidLogin.spechana');

        await expect(this.message.first()).toContainText('Enter Valid Email');
      
        const mobilenumber = 91755824;

        await this.userMobile.fill(mobilenumber.toString());

        await expect(this.message.first()).toContainText('*Phone Number must be 10 digit');

        await this.occupation.selectOption({ label: 'Engineer' });

        await this.gender.check();

        await this.password.fill('234');

        await this.confirmPassword.fill('123');

        await expect(this.message.first()).toContainText('Password and Confirm Password must match with each other.');

        await this.MandatoryCheckBox.check();

        await this.registerbutton.click();

        //await page.waitForLoadState('networkidle');
}

}
module.exports = InvalidRegister;

