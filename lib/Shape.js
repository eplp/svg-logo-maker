'use strict';

class Shape {
   constructor(shapeColor, textColor) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
   }
   setShapeColor(shapeColor) {
      this.shapeColor = shapeColor;
   }
   getShapeColor() {
      return this.shapeColor;
   }
   setTextColor(textColor) {
      this.textColor = textColor;
   }
   getTextColor() {
      return this.textColor;
   }
   render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
   }
}

module.exports = Shape;
