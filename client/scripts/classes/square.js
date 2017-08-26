class Square{
  constructor(size){
    this.size = size;
    this.color = SQUARE_COLOR;
  }

  getArea(){
    return (this.size * this.size).toFixed(2);
  }
}

Square.prototype.toString = function(){
  let stringToReturn = 'Square: Size = ' + this.size + ', Area = ';
  stringToReturn +=  this.getArea();
  return stringToReturn;
}
