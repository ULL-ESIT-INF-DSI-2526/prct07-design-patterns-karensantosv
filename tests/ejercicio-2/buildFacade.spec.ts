import { describe, test, expect } from 'vitest'
import { BuildFacade, CodeFormatter, Linter, TypeScriptCompiler, TestRunner, Bundler } from '../../src/ejercicio-2/buildFacade.js'

describe('BuildFacade', () => {
    test('debería construir el proyecto correctamente', () => {
        const code = "console.log('Hola mundo');";
        const buildFacade = new BuildFacade(new CodeFormatter, new Linter, new TypeScriptCompiler, new TestRunner, code, new Bundler);
        expect(() => buildFacade.buildProject()).not.toThrow();
        expect(() => buildFacade.runQualityChecks()).not.toThrow();
    });
});