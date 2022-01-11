const { Shapes, Triangle } = require("./OOP");

let parent = new Shapes("triangle", "regular", 3, [4, 3, 4]);
let triangle = new Triangle("triangle", "regular", 3, [3, 3, 3], "equilateral");

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
console.log("\nChildren log:\n");
triangle.childrenShapeName();

console.log(
    "\nAs a plus here's a static method called directly from the parent class without instantiation.\n If you where to ponder the question of what is the shape of the earth here it is: \n"
);
Shapes.earthShape();
