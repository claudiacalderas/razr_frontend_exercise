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
