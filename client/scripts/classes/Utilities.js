class Utilities {

  constructor() {}

  // returns a random number between min and max received as parameters
  static randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  //  sorts an array of circles and squares by area in descending order
  static sort(array) {
    array.sort(function (a,b) {
      return b.area - a.area;
    });
  }
}
