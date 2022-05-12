export interface IMailSendData {
    subject: string,
    body: string
}

export interface IMailAdapter {
    send: (data: IMailSendData) => Promise<void>;
}