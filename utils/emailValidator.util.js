const validator = require('deep-email-validator');

module.exports = class EmailValidatorUtil {

    static async validateMail(email ){
        return await validator.validate(
            {
                email,
                validateRegex: true,
                validateMx: true,
                validateTypo: false,
                validateDisposable: true,
                validateSMTP: true
            });
    }

    static async validateMailRegex(email ){
        return await validator.validate(
            {
                email,
                validateRegex: true,
                validateMx: true,
                validateTypo: false,
                validateDisposable: true,
                validateSMTP: false
            }
        );
    }
}