'use strict';

const Shape = require('./Shape.js');

class Square extends Shape {
   constructor(length, width, shapeColor, textColor) {
      super(shapeColor, textColor);
      this.length = length;
      this.width = width;
   }
   getlength() {
      return this.length;
   }
   getwidth() {
      return this.width;
   }
}
module.exports = Square;
