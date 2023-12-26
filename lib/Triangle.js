'use strict';
const Shape = require('./Shape.js');

class Triangle extends Shape {
   constructor(base, height, shapeColor, textColor) {
      super(shapeColor, textColor);
      this.base = base;
      this.height = height;
   }
   getBase() {
      return this.base;
   }
   setBase(base) {
      this.base = base;
   }
   getHeight() {
      return this.height;
   }
   setHeight(height) {
      this.height = height;
   }
}

module.exports = Triangle;
