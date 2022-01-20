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
    setColor(color) {
        this.#color = color;
        return this.#color;
    }

    isFilled() {
        return this.#filled;
    }

    setFilled(filled) {
        this.#filled = filled;
        return this.#filled;
    }
    getArea() {}
    getPerimeter() {}

    toString() {
        return `Shape[ color = ${this.#color}, filled = ${this.#filled} ]`;
    }
}

module.exports = { Shape };
