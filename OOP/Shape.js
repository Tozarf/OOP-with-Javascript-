class Shape {
    #color;
    #filled;
    constructor(color = "red", filled = true) {
        this.#color = color;
        this.#filled = filled;
    }

    getColor() {
        return this.#color;
    }
    setColor(newColor) {
        this.#color = newColor;
        return this.#color;
    }

    isFilled() {
        return this.#filled;
    }

    setFilled(fill) {
        this.#filled = fill;
        return this.#filled;
    }
    getArea() {}
    getPerimeter() {}

    toString() {
        return `Shape[ color = ${this.#color}, filled = ${this.#filled} ]`;
    }
}

module.exports = { Shape };
