class Circle {
  constructor(radius) {
    this.radius = radius;
    this.area = this.getArea();
    // Circle style for DOM displaying
    this.shapeStyle = {
      'width' : radius * 2 + 'px',
      'height' : radius * 2 + 'px',
      'background' : CIRCLE_COLOR,
      'border-radius' : '50%',
      'margin' : '5px'
    }
  }

  // returns circle's area
  getArea() {
    return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
  }
}

// toString() function overriden to return required string
Circle.prototype.toString = function() {
  let stringToReturn = 'Circle: Radius = ' + this.radius + ', Area = ';
  stringToReturn +=  this.getArea();
  return stringToReturn;
}
