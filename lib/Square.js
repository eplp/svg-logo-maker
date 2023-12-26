'use strict';

const Shape = require('./Shape.js');

class Square extends Shape {
   constructor(length, width, shapeColor, textColor) {
      super(shapeColor, textColor);
      this.length = length;
      this.width = width;
   }
   setLength(length) {
      this.length = length;
   }
   getLength() {
      return this.length;
   }
   setWidth(width) {
      this.width = width;
   }
   getWidth() {
      return this.width;
   }
}
module.exports = Square;
