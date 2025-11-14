"use strict";
exports.__esModule = true;
var shapeFactory_1 = require("./src/shapeFactory");
var factory = new shapeFactory_1.ShapeFactory();
var circle = factory.createShape("circle", 5);
console.log("Circle:", circle.describe());
var square = factory.createShape("square", 10);
console.log("Square:", square.describe());
