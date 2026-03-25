export interface Exporter {
    export(s: string): string;
    getFileExtension(): string;
}

export class PDFExporter implements Exporter {
    constructor(public name: string) {}
    export(s: string): string {
        return `PDF Exported: ${s}`;
    }
    getFileExtension(): string {
        return ".pdf";
    }
}

export class WordExporter implements Exporter {
    constructor(public name: string) {}
    export(s: string): string {
        return `Word Exported: ${s}`;
    }
    getFileExtension(): string {
        return ".docx";
    }
}

export class HtmlExporter implements Exporter {
    constructor(public name: string) {}
    export(s: string): string {
        return `HTML Exported: ${s}`;
    }
    getFileExtension(): string {
        return ".html";
    }
}

export abstract class ExporterCreator {
    public abstract factoryMethod(): Exporter;

    public logic(contenido: string): string {
        const exporter = this.factoryMethod();
        return exporter.export(contenido);
    }
}

export class PDFExporterCreator extends ExporterCreator {
    constructor(public name: string) {
        super();
    }
    public factoryMethod(): Exporter {
        return new PDFExporter(this.name);
    }
}

export class WordExporterCreator extends ExporterCreator {
    constructor(public name: string) {
        super();
    }
    public factoryMethod(): Exporter {
        return new WordExporter(this.name);
    }
}

export class HtmlExporterCreator extends ExporterCreator {
    constructor(public name: string) {
        super();
    }
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

