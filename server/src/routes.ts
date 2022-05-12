import express from "express";
import nodemailer from 'nodemailer';
import { PrismaFeedbacksRepository } from "./repositories/prisma/PrismaFeedbackRepository";
import { SubmitFeedbackUseCase } from "./use-cases/SubmitFeedbackUseCase";

export const routes = express.Router();

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b707da36eddc8b",
        pass: "d4decf8f2531cc"
    }
});

routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body;

    const feedbackRepository = new PrismaFeedbacksRepository();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(feedbackRepository);

    const feedback = await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    // await transport.sendMail({
    //     from: 'Equipe Feedget <oi@feedget.com>',
    //     to: 'Renato <rejunior147@gmail.com>',
    //     subject: 'Novo Feedback',
    //     html: [
    //         `</div style="font-family: sans-serif; font-size: 16px; color: #111; ">`,
    //         `<p>Tipo de feedback: ${type}</p>`,
    //         `<p>Comentário: ${comment}</p>`,
    //         `</div>`
    //     ].join('\n')
    // })

    return res.status(201).json({data: feedback});
})