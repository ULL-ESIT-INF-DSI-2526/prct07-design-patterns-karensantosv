import { LegacySmtpClient } from "./LegacySmtpClient.js";
import { EmailMessage, EmailResult, EmailService, EmailStatus } from "./EmailService.js";

/**
 * Clase que represneta un adaptador que implementa  un EmailService e instancia un LegacySmtpClient
 */
export class SmtpAdapter implements EmailService {
    /**
     * Constructor de la clase
     * @param lsc - instancia de LegacySmtpCliente
     * @param host - host al que se conecta
     * @param port - puerto al que se conecta
     */
    constructor(public lsc: LegacySmtpClient,
                public host: string,
                public port: number
    ) {
        this.lsc.connect(host, port);
    }

    /**
     * Atributo para almacenar los correos enviados para poder acceder a los estadods de todos esos correos
     */
    private resultadoCorreosEnviados: EmailResult[] = [];

    /**
     * Contador para general el messageId único
     */
    private counter = 0

    /**
     * Getter para correos enviados
     * @returns - Correos enviados
     */
    getresultadoCorreosEnviados() { return this.resultadoCorreosEnviados; }
    
    /**
     * Método usaro para cerrar la conexión
     * @returns - número que devuelve el metodo disconnect
     */
    close() {
        return this.lsc.disconnect();
    }

    /**
     * Método para enviar un mensaje
     * @param message - mensaje qeu se quiere enviar
     * @returns - El resutlado del mensaje enviado
     */
    send(message: EmailMessage): EmailResult {
        let messageid = `MSG-{${new Date()}}-{${this.counter}}`;
        this.counter += 1;
        let status: EmailStatus = "pendiente";
        let to: string = ""
        message.to.forEach((el) => {
            to += el + ";";
        });
        let r: string[] = [];
        switch(this.lsc.sendRaw(message.from, to, message.subject, message.body, false)) {
            case 0:
                status = "enviado";
                break;
            case 1:
                status = "fallido";
                break;
            case 2:
                status = "pendiente";
                break;
        }
        let result: EmailResult = { messageId: messageid, status: status, recipients: message.to}
        this.resultadoCorreosEnviados.push(result);
        return result;
    }

    /**
     * Método para enviar un conjunto de mensajes
     * @param messages - mensajes que se queiren enviar
     * @returns - los resultados de todos esos mensajes
     */
    sendBulk(messages: EmailMessage[]): EmailResult[] {
        let result: EmailResult[] = [];
        messages.forEach((el) => {
            result.push(this.send(el));
        });
        return result;
    }

    /**
     * Método para obtener el estado de un messageId específico
     * @param messageId - identificador de mensaje
     * @returns - El estado de ese mensaje
     */
    getStatus(messageId: string): EmailStatus {
        const res: EmailResult[] = this.resultadoCorreosEnviados.filter((el) => el.messageId === messageId);
        if (res.length < 1) {
            console.error("No se encontró el messageId en los correos enviados");
            return "fallido";
        } else {
            return res[0].status;
        }
    }

    /**
     * Método filter para filtrar los mensajes enviados y obtener los de ese estado especificamente
     * @param status - estado que se esta buscando
     * @returns - resultados obtenidos
     */
    filter(status: EmailStatus): EmailResult[] {
        return this.resultadoCorreosEnviados.filter((el) => el.status === status);
    }
    
}