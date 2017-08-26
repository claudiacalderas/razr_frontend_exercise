myApp.controller('MainController', ['$scope', function($scope) {

  console.log('MainController loaded');

  // CIRCLE INSTANCE
  let myCircle = new Circle(10);
  let returnedString = myCircle.toString();
  console.log(returnedString);

  // SQUARE INSTANCE
  let mySquare = new Square(12);
  returnedString = mySquare.toString();
  console.log(returnedString);

  // SHAPE CONTAINER INSTANCE
  let myShapeContainer = new ShapesContainer();
  myShapeContainer.generate();
  console.log(myShapeContainer);

  // Sorted array of shapes
  Utilities.sort(myShapeContainer.shapes);
  console.log(myShapeContainer);

  $scope.arrayOfShapes = myShapeContainer.shapes;

}]);
