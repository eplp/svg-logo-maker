'use strict';
const Shape = require('./Shape.js');

class Circle extends Shape {
   constructor(radius, shapeColor, textColor) {
      super(shapeColor, textColor);
      this.radius = radius;
   }
   setRadius(radius) {
      this.radius = radius;
   }
   getRadius() {
      return this.radius;
   }
}

module.exports = Circle;
