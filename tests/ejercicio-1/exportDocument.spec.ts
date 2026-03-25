import { describe, test, expect } from 'vitest';
import { Exporter, ExporterCreator, PDFExporterCreator, HtmlExporterCreator, WordExporterCreator, PDFExporter, WordExporter, HtmlExporter } from '../../src/ejercicio-1/exportDocuments.js';

describe('ExportDocument', () => {
    test('deberia exportar un documento en PDF', () => {
        const pdfCreator = new PDFExporterCreator("PDF Exporter");
        const result = pdfCreator.logic("Contenido del documento");
        expect(result).toBe("PDF Exported: Contenido del documento");
        expect(pdfCreator.factoryMethod()).toBeInstanceOf(PDFExporter);
        expect(pdfCreator.factoryMethod().getFileExtension()).toBe(".pdf");
    });

    test('deberia exportar un documento en Word', () => {
        const wordCreator = new WordExporterCreator("Word Exporter");
        const result = wordCreator.logic("Contenido del documento");
        expect(result).toBe("Word Exported: Contenido del documento");
        expect(wordCreator.factoryMethod()).toBeInstanceOf(WordExporter);
        expect(wordCreator.factoryMethod().getFileExtension()).toBe(".docx");
    });

    test('deberia exportar un documento en HTML', () => {
        const htmlCreator = new HtmlExporterCreator("HTML Exporter");
        const result = htmlCreator.logic("Contenido del documento");
        expect(result).toBe("HTML Exported: Contenido del documento");
        expect(htmlCreator.factoryMethod()).toBeInstanceOf(HtmlExporter);
        expect(htmlCreator.factoryMethod().getFileExtension()).toBe(".html");
    });
});