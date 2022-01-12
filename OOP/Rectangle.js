const { Shape } = require("./Shape");

class Rectangle extends Shape {
    constructor(color, filled, width = 1.0, length = 1.0) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }
    getWidth() {
        return this.width;
    }
    setWidth(newWidth) {
        this.width = newWidth;
        return this.width;
    }
    getLength() {
        return this.length;
    }
    setLength(newLength) {
        this.length = newLength;
        return this.length;
    }
    getArea() {
        const area = this.width * this.length;
        return area.toFixed(1);
    }
    getPerimeter() {
        const perimeter = this.width + this.length + this.width + this.length;
        return perimeter.toFixed(1);
    }
    toString() {
        return `Shape { Rectangle ${JSON.stringify(this)} }`;
    }
}
module.exports = { Rectangle };
