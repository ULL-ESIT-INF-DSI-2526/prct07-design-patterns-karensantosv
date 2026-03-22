/**
 * ¿Por qué BasicPrinter está obligada a implementar cosas que no puede?
 * Porque la interfaz OfficeMachine tiene métodos que no utilizaría BasicPrinter.
 *
 * Principios SOLID violados:
 * - Interface Segregation Principle: BasicPrinter se ve obligada a implementar métodos que no necesita.
 *
 */
class BasicPrinter {
    print(doc) {
        console.log("Printing:", doc);
    }
    scan(_) {
        throw new Error("Not supported");
    }
    fax(_) {
        throw new Error("Not supported");
    }
}
function sendFax(m, doc) {
    m.fax(doc);
}
let bas = new BasicPrinter();
sendFax(bas, "Hello"); // Error en tiempo de ejecución, BasicPrinter no soporta fax
class BasicPrinter2 {
    print(doc) {
        console.log("Printing:", doc);
    }
}
function sendFax2(m, doc) {
    m.fax(doc);
}
