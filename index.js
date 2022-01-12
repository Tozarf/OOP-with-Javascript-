const { Circle } = require("./OOP/Circle");
const { Rectangle } = require("./OOP/Rectangle");
const { Shape } = require("./OOP/Shape");
const { Square } = require("./OOP/Square");

let newshape = new Shape();
// console.log(newshape.color);
// console.log(newshape.setColor("blue"));
// console.log(newshape.color);
// console.log(newshape.filled);
// console.log(newshape.setFilled(false));
// console.log(newshape.filled);
// console.log(newshape.toString());
// console.log(newshape.getArea());

let newRectangle = new Rectangle("blue", true, 2, 2);
// console.log(newRectangle.filled);
// console.log(newRectangle.setFilled(false));
// console.log(newRectangle.filled);
// console.log(newRectangle.toString());

let newCircle = new Circle("green", false, 3);
// console.log(newCircle.setFilled(true));
// console.log(newCircle.toString());
let newSquare = new Square("brown", false, 4.3);
// console.log(newSquare.getPerimeter());
