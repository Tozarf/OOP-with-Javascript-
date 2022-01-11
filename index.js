const { Shapes, Triangle, Rectangle } = require("./OOP");

let parent = new Shapes("triangle", "regular", 3, [4, 3, 4]);
let triangle = new Triangle("triangle", "regular", 3, [3, 3, 3], "equilateral");
let rectangle = new Rectangle(
    "rectangle",
    "regular",
    4,
    [3, 3, 3, 3],
    "rhombus"
);
console.log(
    "\nThis is how inheritance works. Same method used in 2 different classes but defined only in the parent:\n"
);
parent.perimeter();
triangle.perimeter();
console.log("\n############################################################");
console.log("############################################################\n\n");
console.log(
    "\nThis is how polymorphism mutates a parent method within the children class: \n"
);
console.log("Parent log:\n");
parent.childrenShapeName();
console.log("\nChildren's logs:\n");
// console.log("Triangle class");
triangle.childrenShapeName();
// console.log("\nRectangle class");
rectangle.childrenShapeName();
console.log("\n############################################################");
console.log("############################################################\n\n");

console.log(
    "\nAs a plus here's a static method called directly from the parent class without instantiation.\n If you where to ponder the question of what is the shape of the earth here it is: \n"
);
Shapes.earthShape();
