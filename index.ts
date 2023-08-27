// class Rectangle {
//   hight: number;
//   width: number;

//   constructor(hight: number, width: number) {
//     this.hight = hight;
//     this.width = width;
//   }
//   area(): number {
//     return this.hight * this.width;
//   }
// }

// class Square extends Rectangle {
//   constructor(width: number) {
//     super(width, width);
//   }
//   area(): number {
//     return this.width * this.width;
//   }
// }

// class Shape {
//   info(): void {
//     console.log("This is a Shape");
//   }
// }

// class Rectangle extends Shape {
//   hight: number;
//   width: number;
//   constructor(hight: number, width: number) {
//     super();
//     this.hight = hight;
//     this.width = width;
//   }
//   area(): number {
//     return this.hight * this.width;
//   }
//   info(): void {
//     console.log("This is a Rectangle");
//   }
//   scale(number): number {
//     return this.hight * number * this.width * number;
//   }
//   static anotherStaticMethod(r1: Rectangle, r2: Rectangle): Rectangle {
//     return new Rectangle(r1.width + r2.width, r1.hight + r2.hight);
//   }
// }
// class ColoredRectangle extends Rectangle {
//   color: string;
//   constructor(hight: number, width: number, color: string) {
//     super(hight, width);
//     this.color = color;
//   }
//   info(): void {
//     console.log(`This is a Rectangle in color ${this.color}`);
//   }
// }

class Shape {
  draw(): void {
    console.log("drawing a shape");
  }
}

class Circle extends Shape {
  draw(): void {
    console.log("drawing a circle");
  }
}

class Triangle extends Shape {
  draw(): void {
    console.log("drawing a triangle");
  }
}

class Square extends Shape {
  draw(): void {
    console.log("drawing a square");
  }
}

function renderShapes(shapes: Shape[]): void {
  for (const shape of shapes) {
    shape.draw();
  }
}
const shapes: Shape[] = [
  new Shape(),
  new Circle(),
  new Triangle(),
  new Square(),
];
renderShapes(shapes);
