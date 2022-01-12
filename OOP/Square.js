const { Rectangle } = require("./Rectangle");

class Square extends Rectangle {
    constructor(color, filled, side) {
        super(color, filled);
        this.side = side;
    }
    getSide() {
        return this.side;
    }
    setWidth(newWidth) {
        this.side = newWidth;
        return this.side;
    }
    setLength(newLength) {
        this.side = newLength;
        return this.side;
    }
    getArea() {
        const area = this.side * this.side;
        return area.toFixed(1);
    }
    getPerimeter() {
        const perimeter = this.side * 4;
        return perimeter.toFixed(1);
    }
    toString() {
        return ` Square { Rectangle { Shape ${JSON.stringify(this)} } }`;
    }
}
module.exports = { Square };
