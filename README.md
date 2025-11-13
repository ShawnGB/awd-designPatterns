# awd-designPatterns

Design pattern implementations in TypeScript.

## Factory Pattern - ShapeFactory

Implementation of the Factory design pattern for creating shape objects.

### Features

- **ShapeFactory**: Creates shape objects based on type
- **Supported Shapes**: Circle and Square
- **Type-safe**: Uses TypeScript for type safety

### Usage

```typescript
import { ShapeFactory } from "./src/shapeFactory";

const factory = new ShapeFactory();

// Create a circle with radius 5
const circle = factory.createShape("circle", 5);
console.log(circle.describe()); // "This is a circle with radius 5."

// Create a square with side length 10
const square = factory.createShape("square", 10);
console.log(square.describe()); // "This is a square with side length 10."
```

### Running the Test

```bash
npx ts-node test.ts
```
