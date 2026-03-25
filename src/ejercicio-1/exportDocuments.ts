/**
 * Interface Exporter que define el método export y getFileExtension
 */
export interface Exporter {
    export(s: string): string;
    getFileExtension(): string;
}

/**
 * Clase para representar un exportador de PDF
 */
export class PDFExporter implements Exporter {
    constructor(public name: string) {}

    /**
     * Mñetodo que simula la exportación de un documento a PDF
     * @param s - El contenido del documento a exportar
     * @returns - Un mensaje indicando que el documento ha sido exportado a PDF
     */
    export(s: string): string {
        return `PDF Exported: ${s}`;
    }
    /**
     * Método que devuelve la extensión de archivo para el tipo de exportación
     * @returns - La extensión de archivo correspondiente al tipo de exportación
     */
    getFileExtension(): string {
        return ".pdf";
    }
}

/**
 * Clase para representar un exportador de Word
 */
export class WordExporter implements Exporter {
    constructor(public name: string) {}
    /**
     * Método que simula la exportación de un documento a Word    
     * @param s - El contenido del documento a exportar
     * @returns - Un mensaje indicando que el documento ha sido exportado a Word
     */
    export(s: string): string {
        return `Word Exported: ${s}`;
    }
    /**
     * Método que devuelve la extensión de archivo para el tipo de exportación
     * @returns - La extensión de archivo correspondiente al tipo de exportación
     */
    getFileExtension(): string {
        return ".docx";
    }
}

/**
 * Clase para representar un exportador de HTML
 */
export class HtmlExporter implements Exporter {
    constructor(public name: string) {}
    /**
     * Método que simula la exportación de un documento a HTML
     * @param s - El contenido del documento a exportar
     * @returns - Un mensaje indicando que el documento ha sido exportado a HTML
     */
    export(s: string): string {
        return `HTML Exported: ${s}`;
    }

    /**
     * Método que devuelve la extensión de archivo para el tipo de exportación
     * @returns - La extensión de archivo correspondiente al tipo de exportación
     */
    getFileExtension(): string {
        return ".html";
    }
}

/**
 * Clase abstracta ExporterCreator que define el método factoryMethod para crear instancias de Exporter
 */
export abstract class ExporterCreator {
    /**
     * Método abstracto que debe ser implementado por las subclases para crear una instancia específica de Exporter
     */
    public abstract factoryMethod(): Exporter;

    /**
     * Método que contiene la lógica para exportar un documento utilizando el Exporter creado por el factoryMethod
     * @param contenido - El contenido del documento a exportar
     * @returns - El resultado de la exportación del documento utilizando el Exporter creado por el factoryMethod
     */
    public logic(contenido: string): string {
        const exporter = this.factoryMethod();
        return exporter.export(contenido);
    }
}

/**
 * Clases concretas de ExporterCreator que implementan el factoryMethod para crear instancias específicas de Exporter
 */
export class PDFExporterCreator extends ExporterCreator {
    constructor(public name: string) {
        super();
    }
    /**
     * Método que crea una instancia de PDFExporter
     * @returns - Una instancia de PDFExporter con el nombre proporcionado en el constructor
     */
    public factoryMethod(): Exporter {
        return new PDFExporter(this.name);
    }
}

/**
 * Clase concreta de ExporterCreator que implementa el factoryMethod para crear una instancia de WordExporter
 */
export class WordExporterCreator extends ExporterCreator {
    constructor(public name: string) {
        super();
    }
    /**
     * Método que crea una instancia de WordExporter
     * @returns - Una instancia de WordExporter con el nombre proporcionado en el constructor
     */
    public factoryMethod(): Exporter {
        return new WordExporter(this.name);
    }
}

/**
 * Clase concreta de ExporterCreator que implementa el factoryMethod para crear una instancia de HtmlExporter
 */
export class HtmlExporterCreator extends ExporterCreator {
    constructor(public name: string) {
        super();
    }
    /**
     * Método que crea una instancia de HtmlExporter
     * @returns - Una instancia de HtmlExporter con el nombre proporcionado en el constructor
     */
    public factoryMethod(): Exporter {
        return new HtmlExporter(this.name);
    }
}


// codigo cliente

console.log(new PDFExporterCreator("PDF").logic("Contenido del documento"));
console.log(new WordExporterCreator("Word").logic("Contenido del documento"));
console.log(new HtmlExporterCreator("HTML").logic("Contenido del documento"));

const creators: ExporterCreator[] = [
    new PDFExporterCreator("pdf"),
    new WordExporterCreator("word"),
    new HtmlExporterCreator("html")
];

const content = "Este es el cuerpo del informe";

creators.forEach(creator => {
    console.log(creator.logic(content));
});

