const jwt = require("jsonwebtoken");

module.exports = class TokenUtil {

    static createToken(user) {
        const payload = {
          id: user._id,
          email: user.email,
        };
      
        const token = jwt.sign(
                        payload,
                        process.env.TOKEN_SECRET,
                        {
                            expiresIn: "1d",
                        }
                    );
        if(!token) throw new Error('ERRORS WHILE GENERATING TOKEN')
        return token;
    }
}