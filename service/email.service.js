const nodemailer = require("nodemailer");

module.exports = class EmailService {

    static async sendVerificationEmail(recipients,slug){

        let transporter = await this.createTransporter();

        let info = await transporter.sendMail({
            from:  `APP <${process.env.MAIL}>` , // sender address
            to: recipients, // list of receivers
            subject: "Verifiy Account", // Subject line
            html: `<div><p>Tap the link to verify account </p><a href="${process.env.APP_BASE_PATH}/verify/${slug}">Verify</a></div>`, // html body
        });
        
          
        console.log("INFO: %s", info.response);

    }

    static getEmailAccount(){
        return {
            user : process.env.MAIL,
            pass : process.env.MAIL_PASSWORD
        };
    }

    static async createTransporter(){

        let account =  this.getEmailAccount();

        return nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
              user: account.user, 
              pass: account.pass, 
            },
        });
    }
 
}