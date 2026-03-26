/**
 * Clase que represneta un formateador de códgio
 */
export class CodeFormatter {
    /**
     * Método para formatear código
     * @param code - el código a formatear
     */
    format(code: string): void {
        console.log("Formateando código...");
    }
}

/**
 * Clase que representa un linter para analizar el código 
 */
export class Linter {
    /**
     * Método para analizar el código en busca de errores o problemas de estilo
     * @param code - el código a analizar
     */
    lint(code: string): void {
        console.log("Analizando código...");
    }
}

/**
 * Clase que representa un compilador de TypeScript para compilar el código a JavaScript
 */
export class TypeScriptCompiler {
    constructor() {}
    /**
     * Método para compilar código TypeScript a JavaScript
     * @param code - el código TypeScript a compilar
     */
    compile(code: string): void {
        console.log("Compilando código TypeScript...");
    }
}

/**
 * Clase que representa un corredor de pruebas para ejecutar pruebas unitarias o de integración
 */
export class TestRunner {
    /**
     * Método para ejecutar pruebas unitarias o de integración
     */
    runTests(): void {
        console.log("Ejecutando pruebas...");
    }
}

/**
 * Clase que representa un empaquetador para empaquetar el código compilado en un solo archivo o paquete
 */
export class Bundler {
    /**
     * Método para empaquetar el código compilado en un solo archivo o paquete
     * @param code - el código a empaquetar
     */
    bundle(code: string): void {
        console.log("Empaquetando código...");
    }
}

/**
 * Clase que representa la fachada para construir un proyecto de software
 */
export class BuildFacade {
    /**
     * Método constructor que recibe las dependencias necesarias para construir el proyecto
     * @param formatter - el formateador de código
     * @param linter - el linter para analizar el código
     * @param compiler - el compilador de TypeScript
     * @param testRunner -  el corredor de pruebas para ejecutar pruebas unitarias o de integración
     * @param code - el código a construir
     * @param bundler - el empaquetador para empaquetar el código compilado en un solo archivo o paquete
     */
    constructor( public formatter: CodeFormatter,
                 public linter: Linter,
                 public compiler: TypeScriptCompiler,
                 public testRunner: TestRunner,
                 public code: string,
                 public bundler: Bundler) {}

    /**
     * Método para construir el proyecto, que incluye compilar y empaquetar el código
     * @returns - void
     */
    buildProject(): void {
        // compila y empaqueta el proyecto
        this.compiler.compile(this.code);
        this.bundler.bundle(this.code);
    }

    /**
     * Método para ejecutar las verificaciones de calidad
     * @returns - void
     */
    runQualityChecks(): void {
        this.formatter.format(this.code);
        this.linter.lint(this.code);
        this.testRunner.runTests();
    }
}


// cliente solo conoce la fachada

const code = "console.log('Hola mundo');";
const buildFacade = new BuildFacade(new CodeFormatter, new Linter, new TypeScriptCompiler, new TestRunner, code, new Bundler);
buildFacade.buildProject();
buildFacade.runQualityChecks();