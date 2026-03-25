export class CodeFormatter {
    format(code: string): void {
        console.log("Formateando código...");
    }
}

export class Linter {
    lint(code: string): void {
        console.log("Analizando código...");
    }
}

export class TypeScriptCompiler {
    constructor() {}
    compile(code: string): void {
        console.log("Compilando código TypeScript...");
    }
}

export class TestRunner {
    runTests(): void {
        console.log("Ejecutando pruebas...");
    }
}

export class Bundler {
    bundle(code: string): void {
        console.log("Empaquetando código...");
    }
}

export class BuildFacade {
    constructor( public formatter: CodeFormatter,
                 public linter: Linter,
                 public compiler: TypeScriptCompiler,
                 public testRunner: TestRunner,
                 public code: string,
                 public bundler: Bundler) {}

    buildProject(): void {
        // compila y empaqueta el proyecto
        this.compiler.compile(this.code);
        this.bundler.bundle(this.code);
    }

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