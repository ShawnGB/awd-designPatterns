import { ShapeFactory } from "./src/shapeFactory";

const factory = new ShapeFactory();

const circle = factory.createShape("circle", 5);
console.log("Circle:", circle.describe());

const square = factory.createShape("square", 10);
console.log("Square:", square.describe());
