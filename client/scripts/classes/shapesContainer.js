class ShapesContainer {
  constructor() {
    this.shapes =[];
  }

  // generates array of shapes (circles and squares)
  generate() {
    for (let i = 0; i < NUM_CIRCLES; i++) {
      let randomRadius = Utilities.randomNumber(1, 100);
      let circleShape = new Circle(randomRadius);
      this.shapes.push(circleShape);
    }
    for (let j = 0; j < NUM_SQUARES; j++) {
      let randomSize = Utilities.randomNumber(1, 100);
      let squareShape = new Square(randomSize);
      this.shapes.push(squareShape);
    }
  }

}
