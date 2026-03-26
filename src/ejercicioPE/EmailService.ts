/**
 * Tipo que represente los valores de enviado, fallido y pendiente.
 */
export type EmailStatus = "enviado" | "fallido" | "pendiente";

// export enum EmailStatus2 { ENVIADO, FALLIDO, PENDIENTE}

/**
 * Tipo EmailMessage con las propiedades from, subject y body, como cadenas de texto, to, como un array de cadenas de texto y isHtml, como un booleano. 
 */
export type EmailMessage = { from: string, subject: string, body: string, to: string[], isHtml: boolean}

/**
 * Tipo EmailResult con las propiedades messageId, status: EmailStatus y recipients.
 */
export type EmailResult = { messageId: string, status: EmailStatus, recipients: string[]}

/**
 * Interface que represetna un servicio de Email
 */
export interface EmailService {
    send(message: EmailMessage): EmailResult;
    sendBulk(messages: EmailMessage[]): EmailResult[];
    getStatus(messageId: string): EmailStatus;
}