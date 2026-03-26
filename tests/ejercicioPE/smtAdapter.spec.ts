import { describe, test, expect, beforeEach} from "vitest";
import { SmtpAdapter } from "../../src/ejercicioPE/SmtpAdapter.js";
import { EmailMessage, EmailResult, EmailService, EmailStatus } from "../../src/ejercicioPE/EmailService.js";
import { LegacySmtpClient } from "../../src/ejercicioPE/LegacySmtpClient.js";


describe("Pruebas del adaptador: ", () => {
    let lsc: LegacySmtpClient = new LegacySmtpClient();
    let adapter: SmtpAdapter = new SmtpAdapter(lsc, "url", 88);

    // beforeEach(() => {
    //     let lsc: LegacySmtpClient = new LegacySmtpClient();
    //     let adapter: SmtpAdapter = new SmtpAdapter(lsc, "url", 88);

    // });
    
    describe("Pruebas del adaptador: ", () => {
        test("Creación del adaptador: ", () => {
            expect(adapter).toBeDefined();
            expect(adapter.getresultadoCorreosEnviados().length).toBe(0);
        });
    });
    
    describe("Enviar mensaje: ", () => {
        test("send ", () => {
            let m: EmailMessage = { from: "a", subject: "consulta", body: "...", to: ["j", "k"], isHtml: false }
            expect(adapter.send(m).status).toBeOneOf(["fallido", "enviado", "pendiente"]);
            let m2: EmailMessage = { from: "a", subject: "consulta", body: "...", to: ["j", "k"], isHtml: false }
            expect(adapter.send(m2).status).toBeOneOf(["fallido", "enviado", "pendiente"]);
            let m3: EmailMessage = { from: "a", subject: "consulta", body: "...", to: ["j", "k"], isHtml: false }
            expect(adapter.send(m3).status).toBeOneOf(["fallido", "enviado", "pendiente"]);
        });
    });

    describe("Enviar mensaje: ", () => {
        test("sendBulk ", () => {
            let m: EmailMessage = { from: "a", subject: "consulta", body: "...", to: ["j", "k"], isHtml: false }
            let m2: EmailMessage = { from: "a2", subject: "consulta2", body: "...2", to: ["j2", "k2"], isHtml: false }
            let group: EmailMessage[] = [m, m2];
            expect(adapter.sendBulk(group)[0].messageId).toBe(`MSG-{${new Date()}}-{3}`);
        });
    });

    describe("Filtrar: ", () => {
        test("filter ", () => {
            expect(adapter.filter("fallido").length).toBeLessThan(4);
        });
    });

    describe("Obtener estado: ", () => {
        test("getEstatus ", () => {
            let s: string = `MSG-{${new Date()}}-{1}`;
            expect(adapter.getStatus(s)).toBeOneOf(["fallido", "enviado", "pendiente"]);
        });

        test("getEstatus ", () => {
            let s: string = `MSG-{${new Date()}}-{888}`;
            expect(adapter.getStatus(s)).toBe("fallido");
        });
    });

    // despues de desconectar
    describe("Se cierra la conexión con el cliente: ", () => {
        test("close(): ", () => {
            expect(adapter.close()).toBe(0);
        });
    });

    describe("Enviar mensaje sin conectar : ", () => {
        test("send(): ", () => {
            let m: EmailMessage = { from: "a", subject: "consulta", body: "...", to: ["j", "k"], isHtml: false }
            expect(() => adapter.send(m)).toThrow();
        });
    });
});