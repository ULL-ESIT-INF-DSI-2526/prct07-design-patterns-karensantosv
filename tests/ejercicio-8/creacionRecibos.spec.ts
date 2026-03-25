import { describe, test, expect } from 'vitest'
import { Receipt, PrintedReceipt, PDFReceipt, DigitalReceipt, OrderProcessor, PhysicalStoreProcess, OnlineStoreProcess, AppStoreProcess } from '../../src/ejercicio-8/creacionRecibos.js'

describe('OrderProcessor', () => {
    test('debería generar un recibo impreso para la tienda física', () => {
        const physicalStore = new PhysicalStoreProcess();
        const receipt = physicalStore.processOrder();
        expect(receipt).toBe("Generated printed receipt.");
    });

    test('debería generar un recibo PDF para la tienda en línea', () => {
        const onlineStore = new OnlineStoreProcess();
        const receipt = onlineStore.processOrder();
        expect(receipt).toBe("Generated PDF receipt.");
    });

    test('debería generar un recibo digital para la tienda de aplicaciones', () => {
        const appStore = new AppStoreProcess();
        const receipt = appStore.processOrder();
        expect(receipt).toBe("Generated digital receipt.");
    });
});