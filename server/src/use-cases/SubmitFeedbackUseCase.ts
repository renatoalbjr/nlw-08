import { IFeedbacksRepository } from "../repositories/IFeedbacksRepository";

export interface IFeedbackSubmitData {
    type: string,
    comment: string,
    screenshot?: string
}

export class SubmitFeedbackUseCase {
    constructor(private feedbackRepository: IFeedbacksRepository){ }

    async execute(req: IFeedbackSubmitData){
        const {type, comment, screenshot} = req;
        return await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        })
    }
}