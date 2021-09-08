const userService = require('../service/User.service');

module.exports = class UserController {

    static async signInUsers(req , res , next ){
        const { email , password } = req.body;

        try {
            const users = await userService.logInUser(email,password);
            res.json(users);

        } catch (error) {
            res.status(404);
            next(error);
        }
        
    }

    static async signUpUser(req , res , next ){
        const { email , password }= req.body;

        try {

            const user = await userService.createUser(email,password);
            res.json(user);
            
        } catch (error) {
            res.status(404);
            next(error);
        }
    }
}