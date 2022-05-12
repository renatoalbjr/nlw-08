import { IMailAdapter, IMailSendData } from "../IMailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b707da36eddc8b",
        pass: "d4decf8f2531cc"
    }
});

export class NodemailerMailAdapter implements IMailAdapter {    

    async send({subject, body}: IMailSendData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Renato <rejunior147@gmail.com>',
            subject: subject,
            html: body
        })
    };
}