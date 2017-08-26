class Circle {
  constructor(radius) {
    this.radius = radius;
    this.area = this.getArea();
  }

  getArea() {
    return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
  }
}

Circle.prototype.toString = function() {
  let stringToReturn = 'Circle: Radius = ' + this.radius + ', Area = ';
  stringToReturn +=  this.getArea();
  return stringToReturn;
}
