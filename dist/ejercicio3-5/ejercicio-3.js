/**
 * ¿Qué ocurre si surge una nueva clase de figura geométrica?
 * Que si se quiere añadir una nueva figura, se tendría que modificar la clase AreaCalculator.
 *
 * Principios SOLID violados:
 * - Open/Closed Principle: La clase AreaCalculator no está abierta para la extensión, ya que cada vez que se añade una nueva figura, se tiene que modificar la clase.
 * - Single Responsibility Principle: La clase AreaCalculator tiene la responsabilidad de calcular el área de diferentes figuras, lo que puede llevar a una clase con múltiples responsabilidades.
 *
 */
class AreaCalculator {
    area(s) {
        switch (s.kind) {
            case "circle": return Math.PI * s.radius * s.radius;
            case "rect": return s.width * s.height;
            case "tri": return (s.base * s.height) / 2;
            default: throw new Error("Unknown shape");
        }
    }
}
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
class Triangle {
    base;
    height;
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    area() {
        return (this.base * this.height) / 2;
    }
}
class AreaCalculator2 {
    area(s) {
        return s.area();
    }
}
