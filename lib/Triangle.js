'use strict';
const Shape = require('./Shape.js');

class Triangle extends Shape {
   constructor(base, height, shapeColor, textColor) {
      super(shapeColor, textColor);
      this.base = base;
      this.height = height;
   }
}

module.exports = Triangle;
