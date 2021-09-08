const userModel = require('../models/User');
const bcrypt = require("bcryptjs");
const TokenUtil = require('../utils/token.util');


module.exports = class UserService {

    static async logInUser(email,password){

        try {
            const user =  await userModel.findOne({email});

            if (user) {
                const result = await bcrypt.compare(password, user.password);
                if(result) {
                    const token = TokenUtil.createToken(user);
                    return {
                        id : user._id,
                        email : user.email,
                        token
                    }
                }else{
                    throw new Error('INVALID CREDENTIALS')
                }
              
            } else {
                throw new Error('INVALID CREDENTIALS')
            }
            
        } catch (error) {
            console.log('ERROR : '+error);
            throw new Error('ERROR : ' + error);
        }
        
    }

    static async createUser(email , password){

        try {
            const user =  await userModel.findOne({email});

            if(user) throw new Error('INVALID CREDENTIALS');

            const hashedPassword = await bcrypt.hash(password, 12);
            
            const newUser = await userModel.create({email , password : hashedPassword});
           
            const token = TokenUtil.createToken(newUser);

            console.log(token)

            return {
                id : newUser._id,
                email : newUser.email,
                token : token
            }

        } catch (error) {
            console.log(error);
            throw new Error('ERROR : ' + error);
        }
    }
}

