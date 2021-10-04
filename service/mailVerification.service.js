const mailVerifyModel = require('../models/EmailVerification');
const userModel = require('../models/User');

module.exports = class MailVerificationService {

    static async generateVerificationLink( user ){
        const newVerificationRecord = await mailVerifyModel.create({user_id : user._id});
        return newVerificationRecord;
    }

    static async enableUserAccount( slug ){
        const verificationRecord = await mailVerifyModel.findOne({slug});

        if(verificationRecord){

            userModel.findByIdAndUpdate( verificationRecord.user_id ,{ verified: true },
                 (err, _updatedUser) =>{
                    if(err) throw new Error(err)
                    
                    else{
                        mailVerifyModel.findByIdAndDelete({_id : verificationRecord._id},
                            (err , _deleted)=>{ if(err) throw new Error(err) });
                    } 
                        
                });

        }else throw new Error("Slug not found")
        
    }
}