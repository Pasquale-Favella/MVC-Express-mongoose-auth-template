const userService = require('../service/User.service');

module.exports = class UserController {

    static async getAllUsers(req , res){
        const users = await userService.gelAllUsers();
        res.json(users);
    }

    static async createUser(req , res){
        const {email , password }= req.body;
        const result = await userService.createUser(email,password);
        res.json(result);
    }
}