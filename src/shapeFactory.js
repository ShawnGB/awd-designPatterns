"use strict";
exports.__esModule = true;
exports.ShapeFactory = void 0;
//Product classes
var CircleShape = /** @class */ (function () {
  function CircleShape(radius) {
    var _this = this;
    this.radius = radius;
    this.type = "circle";
    this.describe = function () {
      return "This is a " + _this.type + " with radius " + _this.radius + ".";
    };
  }
  return CircleShape;
})();
var SquareShape = /** @class */ (function () {
  function SquareShape(side) {
    var _this = this;
    this.side = side;
    this.type = "square";
    this.describe = function () {
      return (
        "This is a " + _this.type + " with side length " + _this.side + "."
      );
    };
  }
  return SquareShape;
})();
// factory
var ShapeFactory = /** @class */ (function () {
  function ShapeFactory() {
    this.SHAPES = {
      circle: CircleShape,
      square: SquareShape,
    };
  }
  ShapeFactory.prototype.createShape = function (shape, size) {
    return new this.SHAPES[shape](size);
  };
  return ShapeFactory;
})();
exports.ShapeFactory = ShapeFactory;
