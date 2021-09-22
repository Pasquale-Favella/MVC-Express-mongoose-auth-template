const validator = require('deep-email-validator');

module.exports = class EmailValidatorUtil {

    static async validateMail(email ){
        return await validator.validate(email);
    }
}