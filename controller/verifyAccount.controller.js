const mailVerificationService = require('../service/mailVerification.service');

module.exports = class VerifyAccountController {

    static async verifyAccount(req , res , next ){
        
        const { slug } = req.params;

        try{

            await mailVerificationService.enableUserAccount(slug);

            res.send("Account enabled!");

        }catch(error){
            res.status(404);
            next(error);
        }
    }
}