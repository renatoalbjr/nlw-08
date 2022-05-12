import { prisma } from "../../prisma";
import { IFeedback, IFeedbackCreateData, IFeedbacksRepository } from "../IFeedbacksRepository";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {

    async create({type, comment, screenshot}: IFeedbackCreateData){
        const feedback = await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        });
        return feedback as IFeedback;
    };
}