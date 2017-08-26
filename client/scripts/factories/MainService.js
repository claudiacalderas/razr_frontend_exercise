myApp.factory('MainService', ['$interval', function($interval){

  // initial rotation set to 0, will increase 10 by 10
  let currentRotation = 0;

  // SHAPE CONTAINER INSTANCE
  let myShapeContainer = new ShapesContainer();
  myShapeContainer.generate(currentRotation);
  console.log(myShapeContainer);

  // Sorted array of shapes
  Utilities.sort(myShapeContainer.shapes);
  console.log(myShapeContainer);

  // regenerates and rerenders the shapes every interval
  let clock = $interval( () => {
    currentRotation += 10;
    myShapeContainer.regenerate(currentRotation);
    Utilities.sort(myShapeContainer.shapes);
  }, REGENERATE_INTERVAL);

  return {
    myShapeContainer : myShapeContainer
  };
}]);
