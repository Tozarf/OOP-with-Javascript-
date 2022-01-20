const { Shape } = require("./Shape");

class Rectangle extends Shape {
    #width;
    #length;
    constructor(color, filled, width = 1.0, length = 1.0) {
        super(color, filled);
        this.#width = width;
        this.#length = length;
    }
    getWidth() {
        return this.#width.toFixed(1);
    }
    setWidth(width) {
        this.#width = width;
        return this.#width.toFixed(1);
    }
    getLength() {
        return this.#length.toFixed(1);
    }
    setLength(length) {
        this.#length = length;
        return this.#length.toFixed(1);
    }
    getArea() {
        const area = this.#width * this.#length;
        return area.toFixed(1);
    }
    getPerimeter() {
        const perimeter = this.width + this.length + this.width + this.length;
        return perimeter.toFixed(1);
    }
    toString() {
        const color = super.getColor();
        const filled = super.isFilled();
        return `Rectangle [ Shape [ color = ${color}, filled = ${filled}] width = ${
            this.#width
        }, length = ${this.#length}]`;
    }
}
module.exports = { Rectangle };
