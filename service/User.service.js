const userModel = require('../models/User');


module.exports = class UserService {

    static async gelAllUsers(){
        const users =  userModel.find({})
        return users
    }

    static async createUser(email , password){

        const user = new userModel({email , password});
        let newUser;
        

        try {
            //newUser = await user.save()
            userModel.create({email , password});
        } catch (error) {
            console.log(error)
        }
        return newUser;
    }
}

