class Square {
  constructor(size, rotation) {
    this.size = size;
    this.area = this.getArea();
    // Square style for DOM displaying
    this.shapeStyle = {
      'width' : size + 'px',
      'height' : size + 'px',
      'background' : SQUARE_COLOR,
      'margin' : '20px',
      'transform' : 'rotate('+ rotation +'deg)'
    }
  }

  // returns square's area
  getArea() {
    return parseFloat((this.size * this.size).toFixed(2));
  }
}

Square.prototype.toString = function() {
  let stringToReturn = 'Square: Size = ' + this.size + ', Area = ';
  stringToReturn +=  this.getArea();
  return stringToReturn;
}
