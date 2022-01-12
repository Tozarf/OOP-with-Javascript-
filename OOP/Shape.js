class Shape {
    constructor(color = "red", filled = true) {
        this.color = color;
        this.filled = filled;
    }

    getColor() {
        return this.color;
    }
    setColor(newColor) {
        this.color = newColor;
        return this.color;
    }

    isFilled() {
        return this.filled;
    }

    setFilled(fill) {
        this.filled = fill;
        return this.filled;
    }
    toString() {
        return `Shape${JSON.stringify(this)}`;
    }
    getArea() {}
    getPerimeter() {}
    perimeter() {
        let sum = 0;
        for (let i = 0; i < this.sidesLength.length; i++) {
            sum = sum + this.sidesLength[i];
        }
        console.log(
            `The perimeter for this ${this.name} based on its ${this.sidesNum} sides' lengths is ${sum} (cm,mm,mt)`
        );
    }
}

module.exports = { Shape };
