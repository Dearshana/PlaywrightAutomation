class EmailUtils {

    static generateRandomEmail() {
        return `darshana${Date.now()}@gmail.com`;
    }

     static generateInvalidRandomEmail() {
        return `darshana${Date.now()}`;
    }

}

module.exports = EmailUtils;