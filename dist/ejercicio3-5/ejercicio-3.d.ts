/**
 * ¿Qué ocurre si surge una nueva clase de figura geométrica?
 * Que si se quiere añadir una nueva figura, se tendría que modificar la clase AreaCalculator.
 *
 * Principios SOLID violados:
 * - Open/Closed Principle: La clase AreaCalculator no está abierta para la extensión, ya que cada vez que se añade una nueva figura, se tiene que modificar la clase.
 * - Single Responsibility Principle: La clase AreaCalculator tiene la responsabilidad de calcular el área de diferentes figuras, lo que puede llevar a una clase con múltiples responsabilidades.
 *
 */
type Shape = {
    kind: "circle";
    radius: number;
} | {
    kind: "rect";
    width: number;
    height: number;
} | {
    kind: "tri";
    base: number;
    height: number;
};
declare class AreaCalculator {
    area(s: Shape): number;
}
/**
 * Clase refactorizada para cumplir con los principios SOLID
 */
interface Shape2 {
    area(): number;
}
declare class Circle implements Shape2 {
    radius: number;
    constructor(radius: number);
    area(): number;
}
declare class Rectangle implements Shape2 {
    width: number;
    height: number;
    constructor(width: number, height: number);
    area(): number;
}
declare class Triangle implements Shape2 {
    base: number;
    height: number;
    constructor(base: number, height: number);
    area(): number;
}
declare class AreaCalculator2 {
    area(s: Shape2): number;
}
