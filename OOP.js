class Shapes {
    constructor(name, type, sidesNum, sidesLength) {
        this.name = name;
        this.type = type;
        this.sidesNum = sidesNum;
        this.sidesLength = sidesLength;
    }
    static earthShape() {
        console.log("The earth is round, quit tiktok!\n \n");
    }
    perimeter() {
        let sum = 0;
        for (let i = 0; i < this.sidesLength.length; i++) {
            sum = sum + this.sidesLength[i];
        }
        console.log(
            `The perimeter for this ${this.name} based on its ${this.sidesNum} sides' lengths is ${sum} (cm,mm,mt)`
        );
    }
    childrenShapeName() {
        console.log("This is a parent method, the child is yet to be defined!");
    }
}

class Triangle extends Shapes {
    constructor(name, type, sidesNum, sidesLength, typeOfTriangle) {
        super(name, type, sidesNum, sidesLength);
        this.typeOfTriangle = typeOfTriangle;
    }
    getType() {
        console.log(this.typeOfTriangle);
    }
    childrenShapeName() {
        console.log(
            "This was a parent method response, the child response is displayed below:"
        );
        console.log(
            "Using polymorphism, the same method has mutated according to the needs of the child class. "
        );
        console.log(
            `I have access in this class, for instance, to the type of triangle, take a look: ${this.typeOfTriangle}`
        );
    }
}

module.exports = { Shapes, Triangle };
