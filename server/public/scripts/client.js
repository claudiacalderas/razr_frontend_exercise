var myApp = angular.module('myApp', ['ngRoute','ngMaterial']);

// Angular Material Theme Configuration
myApp.config(['$mdThemingProvider', function($mdThemingProvider) {
   $mdThemingProvider.theme('altTheme').primaryPalette('grey').accentPalette('blue-grey');
}]);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    // Main View
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'MainController',
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);

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
    };
  };

  // returns circle's area
  getArea() {
    return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
  };
};

// toString() function overriden to return required string
Circle.prototype.toString = function() {
  let stringToReturn = 'Circle: Radius = ' + this.radius + ', Area = ';
  stringToReturn +=  this.getArea();
  return stringToReturn;
};

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
    };
  };

  // returns square's area
  getArea() {
    return parseFloat((this.size * this.size).toFixed(2));
  };
};

// toString() function overriden to return required string
Square.prototype.toString = function() {
  let stringToReturn = 'Square: Size = ' + this.size + ', Area = ';
  stringToReturn +=  this.getArea();
  return stringToReturn;
};

class Utilities {

  constructor() {}

  // returns a random number between min and max received as parameters
  static randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  };

  //  sorts an array of circles and squares by area in descending order
  static sort(array) {
    array.sort(function (a,b) {
      return b.area - a.area;
    });
  };
};

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

const SQUARE_COLOR = '#c61d03'; // RED COLOR
const CIRCLE_COLOR = '#0a2551'; // BLUE COLOR
const NUM_CIRCLES = 50; // NUMBER OF CIRCLES TO INCLUDE IN ARRAY
const NUM_SQUARES = 50; // NUMBER OF SQUARES TO INCLUDE IN ARRAY
const REGENERATE_INTERVAL = 500; // 1/2 SECOND (IN MILLISECONDS)
const DEGREE_ROTATION = 10; // ROTATION IN DEGREES

myApp.factory('MainService', ['$interval', function($interval){

  // initial rotation set to 0, will increase based on DEGREE_ROTATION constant
  let currentRotation = 0;

  // SHAPE CONTAINER INSTANCE
  let myShapeContainer = new ShapesContainer();
  myShapeContainer.generate(currentRotation);

  // Sorts array of shapes
  Utilities.sort(myShapeContainer.shapes);

  // regenerates and rerenders the shapes every interval
  let clock = $interval( () => {
    currentRotation += DEGREE_ROTATION;
    myShapeContainer.regenerate(currentRotation);
    Utilities.sort(myShapeContainer.shapes);
  }, REGENERATE_INTERVAL);

  return {
    myShapeContainer : myShapeContainer
  };
}]);
