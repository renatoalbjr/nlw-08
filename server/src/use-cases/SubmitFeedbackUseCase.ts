import { IMailAdapter, IMailSendData } from "../adapters/IMailAdapter";
import { IFeedbacksRepository } from "../repositories/IFeedbacksRepository";

export interface IFeedbackSubmitData {
    type: string,
    comment: string,
    screenshot?: string
}

export class SubmitFeedbackUseCase {
    constructor(private feedbackRepository: IFeedbacksRepository, private mailAdapter: IMailAdapter){ }

    async execute(feedbackSubmitData: IFeedbackSubmitData, mailData: IMailSendData){
        const {type, comment, screenshot} = feedbackSubmitData;
        const {subject, body} = mailData;

        
        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid screenshot format.');
        }
        if(!type){
            throw new Error('Type is required.');
        }
        if(!comment){
            throw new Error('Comment is required.');
        }
        if(!subject){
            throw new Error('Subject is required');
        }
        if(!body){
            throw new Error('Body is required');
        }
        
        await this.mailAdapter.send(mailData);

        return await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        });
    }
}