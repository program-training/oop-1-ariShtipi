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

class Square {
  rib: number;
  constructor(rib: number) {
    this.rib = rib;
  }
  area(): number {
    return this.rib * this.rib;
  }
}

class Shape {
  rib: number;
  constructor(rib: number) {
    this.rib = rib;
  }
  info(): void {
    console.log("This is a Shape");
  }
}

class Rectangle {
  hight: number;
  width: number;
  constructor(hight: number, width: number) {
    this.hight = hight;
    this.width = width;
  }
  area(): number {
    return this.hight * this.width;
  }
  info(): void {
    console.log("This is a Rectangle");
  }
  scale(number): number {
    return this.hight+number * this.width+number;
  }
  static anotherStaticMethod(r1: Rectangle, r2: Rectangle): Rectangle {
    const combinedArea = r1.area() + r2.area();
    return new Rectangle(combinedArea, 1); 
  }

}

class ColoredRectangle extends Rectangle {
  color: string;
  constructor(hight: number, width: number, color: string) {
    super(hight, width);
    this.color = color;
  }
  info(): void {
    console.log(`This is a Rectangle in color ${this.color}`);
  }
}
// 4. Method Chaining

// 5. Shape with draw method

