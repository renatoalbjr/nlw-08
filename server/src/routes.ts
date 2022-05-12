import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/NodemailerMailAdapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/PrismaFeedbackRepository";
import { SubmitFeedbackUseCase } from "./use-cases/SubmitFeedbackUseCase";

export const routes = express.Router();


routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body;

    const feedbackRepository = new PrismaFeedbacksRepository();
    const mailAdapter = new NodemailerMailAdapter();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(feedbackRepository, mailAdapter);

    const feedback = await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    }, {
        
        subject: 'Novo Feedback',
        body: [
            `</div style="font-family: sans-serif; font-size: 16px; color: #111; ">`,
            `<p>Tipo de feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n')
    
    })

    return res.status(201).json({data: feedback});
})