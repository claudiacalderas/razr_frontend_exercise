myApp.controller('MainController', ['$scope', 'MainService', function($scope, MainService) {

  // CONSOLE LOGGING THE RESULT OF toString() FUNCTION FOR A CIRCLE AND A
  // SQUARE WITH RANDOM RADIUS AND SIZE

  // CIRCLE INSTANCE
  let randomRadius = Utilities.randomNumber(1, 100);
  let myCircle = new Circle(randomRadius);
  let returnedString = myCircle.toString();
  console.log(returnedString);

  // SQUARE INSTANCE
  let randomSize = Utilities.randomNumber(1, 100);
  let mySquare = new Square(randomSize);
  returnedString = mySquare.toString();
  console.log(returnedString);

  // Array of shapes displayed. Array is generated and regenerated in the MainService
  $scope.arrayOfShapes = MainService.myShapeContainer.shapes;

}]);
