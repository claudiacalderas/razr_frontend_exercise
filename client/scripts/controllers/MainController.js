myApp.controller('MainController', ['$scope', 'MainService', function($scope, MainService){

  console.log('MainController loaded');

  let myCircle = new Circle(10);

  let returnedString = myCircle.toString();

  console.log(returnedString);

}]);
