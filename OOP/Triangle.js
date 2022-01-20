const { Shape } = require("./Shape");

class Triangle extends Shape {
    #sideLength;
    constructor(color, filled, sideLength) {
        super(color, filled);
        this.#sideLength = sideLength;
    }
    getSideLength() {
        return this.#sideLength.toFixed(1);
    }
    setSideLength(sidelength) {
        this.#sideLength = sidelength;
    }
    getArea() {
        const area = (Math.sqrt(3) * this.#sideLength ** 2) / 4;
        return area.toFixed(1);
    }
    getPerimeter() {
        const perimeter = this.#sideLength * 3;
        return perimeter.toFixed(1);
    }
    toString() {
        const color = super.getColor();
        const filled = super.isFilled();
        return `Triangle [ Shape [ color = ${color}, filled = ${filled} ], side = ${
            this.#sideLength
        }]`;
    }
}
module.exports = {
    Triangle,
};
