const { Rectangle } = require("./Rectangle");

class Square extends Rectangle {
    constructor(color, filled, side) {
        super(color, filled);
        this.width = side;
        this.length = side;
    }
    getSide() {
        return this.width.toFixed(1);
    }
    setSide(side) {
        this.width = side;
        this.length = side;
    }
    setWidth(side) {
        this.setSide(side);
    }
    setLength(length) {
        this.setSide(length);
    }
    getArea() {
        const area = this.width * this.length;
        return area.toFixed(1);
    }
    getPerimeter() {
        const perimeter = this.width * 4;
        return perimeter.toFixed(1);
    }
    toString() {
        const color = super.getColor();
        const filled = super.isFilled();
        return `Square [ Rectangle [ Shape [ color = ${color}, filled = ${filled}] width = ${this.width}, length = ${this.length}]]`;
    }
}
module.exports = { Square };
