class ShapesContainer {
  constructor() {
    this.shapes = [];
  };

  // generates array of shapes (circles and squares)
  generate(squareRotation) {
    for (let i = 0; i < NUM_CIRCLES; i++) {
      let randomRadius = Utilities.randomNumber(1, 100);
      let circleShape = new Circle(randomRadius);
      this.shapes.push(circleShape);
    };
    for (let j = 0; j < NUM_SQUARES; j++) {
      let randomSize = Utilities.randomNumber(1, 100);
      let squareShape = new Square(randomSize, squareRotation);
      this.shapes.push(squareShape);
    };
  };

  // regenerates array of shapes by adding a new shape and shifting one at a time
  regenerate(squareRotation) {
    for (let i = 0; i < NUM_CIRCLES; i++) {
      let randomRadius = Utilities.randomNumber(1, 100);
      let circleShape = new Circle(randomRadius);
      this.shapes.push(circleShape);
      this.shapes.shift();
    };
    for (let j = 0; j < NUM_SQUARES; j++) {
      let randomSize = Utilities.randomNumber(1, 100);
      let squareShape = new Square(randomSize, squareRotation);
      this.shapes.push(squareShape);
      this.shapes.shift();
    };
  };

};
