/**
 * ¿Por qué BasicPrinter está obligada a implementar cosas que no puede?
 * Porque la interfaz OfficeMachine tiene métodos que no utilizaría BasicPrinter.
 *
 * Principios SOLID violados:
 * - Interface Segregation Principle: BasicPrinter se ve obligada a implementar métodos que no necesita.
 *
 */
interface OfficeMachine {
    print(doc: string): void;
    scan(doc: string): string;
    fax(doc: string): void;
}
declare class BasicPrinter implements OfficeMachine {
    print(doc: string): void;
    scan(_: string): string;
    fax(_: string): void;
}
declare function sendFax(m: OfficeMachine, doc: string): void;
declare let bas: BasicPrinter;
/**
 * Clase refactorizada para cumplir con los principios SOLID
 */
interface OfficeMachinePrintable {
    print(doc: string): void;
}
interface OfficeMachineScannable {
    scan(doc: string): string;
}
interface OfficeMachineFaxable {
    fax(doc: string): void;
}
declare class BasicPrinter2 implements OfficeMachinePrintable {
    print(doc: string): void;
}
declare function sendFax2(m: OfficeMachineFaxable, doc: string): void;
