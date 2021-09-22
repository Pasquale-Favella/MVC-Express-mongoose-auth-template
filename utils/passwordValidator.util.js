module.exports = class PasswordValidatorUtil {

    static validatePassword( password ){
        if(!password) throw new Error('Password is required!');
        if(password.length < 6 ) throw new Error('Password must be at least 6 characters long!');

        //check if pwd contains at least 1 special character
        const specialCharCheck = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(!specialCharCheck.test(password)) throw new Error('Password must contain at least 1 special character!');
    }

}