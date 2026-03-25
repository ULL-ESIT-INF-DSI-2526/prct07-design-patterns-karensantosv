import { describe, test, expect } from "vitest";
import { Shipment, EnvioEstandar, EnvioInternacional, EnvioUrgente } from "../../src/ejercicio-3/shipment.js";

describe("Shipment", () => {
    test("debería calcular el coste de envío correctamente", () => {
        const shipment = new Shipment(10, new EnvioEstandar());
        expect(shipment.envio()).toBe(30);

        shipment.setEnvio(new EnvioUrgente(20));
        expect(shipment.envio()).toBe(90);

        shipment.setEnvio(new EnvioInternacional(100, 50));
        expect(shipment.envio()).toBe(280);
    });
});