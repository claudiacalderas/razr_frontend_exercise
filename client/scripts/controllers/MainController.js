myApp.controller('MainController', ['$scope', 'MainService', function($scope, MainService){

  console.log('MainController loaded');

  // CIRCLE INSTANCE
  let myCircle = new Circle(10);
  let returnedString = myCircle.toString();
  console.log(returnedString);

  // SQUARE INSTANCE
  let mySquare = new Square(12);
  returnedString = mySquare.toString();
  console.log(returnedString);

}]);
