import nodemailer from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config()

interface EmailOptions {
  to:string,
  from:string,
  subject:string,
  html:string
}

export default class Email {
  to:string;
  firstName:string;
  url:string;
  from:string;

  constructor(user:any, url:string){
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `My Batch <${process.env.EMAIL_FROM}>`
  }
  newTransport(){
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        host: process.env.EMAIL_HOST!,
        port: Number(process.env.EMAIL_PORT),
        auth: {
          user: process.env.EMAIL_USERNAME!,
          pass: process.env.EMAIL_PASSWORD!,
        },
      });
    }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST!,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USERNAME!,
        pass: process.env.EMAIL_PASSWORD!,
      },
    });
  }

  async send(template:string, subject:string){
    try{  
      // Render html based on pug template
      const html = `
      <html>
        <body>
          <h1>Hello ${this.firstName}</h1>
          <p>Click the link below:</p>
          <a href="${this.url}">${this.url}</a>
        </body>
      </html>
    `;
       // Define email options
       const mailOptions:EmailOptions = {
         from: this.from,
         subject,
         to: this.to,
         html,
       }

       await this.newTransport().sendMail(mailOptions);

    }catch(err){
      const error = err as Error;
      console.log(error.message)
    }
  
  }
    async sendWelcome(){
      await this.send('welcome', 'Welcome to the My Batch')
    }

    async sendPasswordReset(){
      await this.send('passwordReset', 'Your password reset token (valid for only 10 minutes)')
    }
  
}