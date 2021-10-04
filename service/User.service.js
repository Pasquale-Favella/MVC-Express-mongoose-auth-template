const userModel = require('../models/User');
const bcrypt = require("bcryptjs");
const TokenUtil = require('../utils/token.util');
const EmailService = require('./email.service');
const MailVerificationService = require('./mailVerification.service');

const INVALID_CREDENTIALS = 'INVALID CREDENTIALS';

module.exports = class UserService {

    static async logInUser(email,password){

        try {

            const user =  await userModel.findOne({email});

            if (user) {

                if(!user.verified) throw new Error("Account must be enabled via verification link!");

                const result = await bcrypt.compare(password, user.password);

                if(result) {
                    const token = TokenUtil.createToken(user);
                    return {
                        id : user._id,
                        email : user.email,
                        token
                    }
                }else{
                    throw new Error(INVALID_CREDENTIALS)
                }
              
            } else {
                throw new Error(INVALID_CREDENTIALS)
            }
            
        } catch (error) {
            throw new Error(error);
        }
        
    }

    static async createUser(email , password){

        try {

            const user =  await userModel.findOne({email});

            if(user) throw new Error(INVALID_CREDENTIALS);

            const hashedPassword = await bcrypt.hash(password, 12);
            
            const newUser = await userModel.create({email , password : hashedPassword});

            const {slug} = await MailVerificationService.generateVerificationLink(newUser);

            await EmailService.sendVerificationEmail(newUser.email,slug);


            return {
                message : "Verification mail sent , check your inbox to enable account"
            }

        } catch (error) {
            throw new Error(error);
        }
    }
}

