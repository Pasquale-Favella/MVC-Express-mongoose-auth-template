const validator = require('deep-email-validator');

module.exports = class EmailValidatorUtil {

    static async validateMail(email ,smtpCheck = true){
        return await validator.validate(
            {
                email,
                validateRegex: true,
                validateMx: true,
                validateTypo: false,
                validateDisposable: true,
                validateSMTP: smtpCheck
            });
    }

}