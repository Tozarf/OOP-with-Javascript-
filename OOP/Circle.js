const { Shape } = require("./Shape");

class Circle extends Shape {
    constructor(color, filled, radius = 1.0) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(newradius) {
        this.radius = newradius;
        return this.radius;
    }
    getArea() {
        const area = Math.PI * (this.radius * this.radius);
        return area.toFixed(1);
    }
    getPerimeter() {
        const perimeter = 2 * Math.PI * this.radius;
        return perimeter.toFixed(1);
    }
    toString() {
        return `Circle { Shape ${JSON.stringify(this)} }`;
    }
}
module.exports = { Circle };
