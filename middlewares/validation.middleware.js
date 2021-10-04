const Joi = require('joi');

module.exports = class ValidationMiddleware {

    static async validateAuthBody(req, res, next) {

        try {
            await authValidationSchema.validateAsync(req.body);
            next();
        } catch (error) {
            res.status(404);
            next(error);
        }
       
    }
    
}

const authValidationSchema = Joi.object({
 
    password: Joi.string()
        .pattern(new RegExp(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))
        .min(6)
        .required()
        .messages({
            'string.empty': `password cannot be empty`,
            'string.min': `password should have a minimum length of {#limit}`,
            'any.required': `password is a required field`,
            'string.pattern.base': `password must contain at least a special character`,
        }),

    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required()
        .messages({
            'string.empty': `email cannot be empty`,
            'string.email': `email must be valid`,
            'any.required': `email is a required field`,
        }),
});