import { IFeedback } from "../repositories/IFeedbacksRepository"
import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase"

describe('Submit Feedback', () => {
    const submitFeedback = new SubmitFeedbackUseCase(
        {create: async () => null as unknown as IFeedback},
        {send: async () => {}}
    );

    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,fq9uibe46fa61asd651fsa561df',
        }, {
            subject: 'New test bug',
            body: '<h1>BUG</h1>'
        })).resolves.not.toThrow();
    });

    it('should not be able to submit a feedback without a type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,fq9uibe46fa61asd651fsa561df',
        }, {
            subject: 'New test bug',
            body: '<h1>BUG</h1>'
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without a comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,fq9uibe46fa61asd651fsa561df',
        }, {
            subject: 'New test bug',
            body: '<h1>BUG</h1>'
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback with a invalid image url', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'test.jpg',
        }, {
            subject: 'New test bug',
            body: '<h1>BUG</h1>'
        })).rejects.toThrow();
    });

    
    it('should not be able to submit a feedback without a mail subject', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,fq9uibe46fa61asd651fsa561df',
        }, {
            subject: '',
            body: '<h1>BUG</h1>'
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without a mail body', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,fq9uibe46fa61asd651fsa561df',
        }, {
            subject: 'New test bug',
            body: ''
        })).rejects.toThrow();
    });
})