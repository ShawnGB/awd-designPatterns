interface ShapeModel {
  type: string;
  describe: () => string;
}

type Shapetype = "circle" | "square";

interface ShapeFactoryModel {
  createShape: (shape: Shapetype, size: number) => ShapeModel;
}

//Product classes
class CircleShape implements ShapeModel {
  type = "circle";
  constructor(private radius: number) {}

  describe = (): string => `This is a ${this.type} with radius ${this.radius}.`;
}

class SquareShape implements ShapeModel {
  type = "square";
  constructor(private side: number) {}

  describe = (): string =>
    `This is a ${this.type} with side length ${this.side}.`;
}

// factory
export class ShapeFactory implements ShapeFactoryModel {
  private readonly SHAPES = {
    circle: CircleShape,
    square: SquareShape,
  };

  createShape(shape: Shapetype, size: number): ShapeModel {
    return new this.SHAPES[shape](size);
  }
}
