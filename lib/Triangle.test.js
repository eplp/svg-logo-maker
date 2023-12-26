'use strict';
const Triangle = require('./Triangle.js');

test('check Triangle object creation and inherited methods', () => {
   const triangle = new Triangle(20, 35, 'yellow', 'black');
   expect(triangle.getShapeColor()).toBe('yellow');
   expect(triangle.getTextColor()).toBe('black');

   triangle.setShapeColor('purple');
   triangle.setTextColor('pink');
   expect(triangle.getShapeColor()).toBe('purple');
   expect(triangle.getTextColor()).toBe('pink');

   expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="purple" />`);
   
   expect(triangle.getBase()).toBe(20);
   expect(triangle.getHeight()).toBe(35);
   triangle.setBase(15);
   triangle.setHeight(25);
   expect(triangle.getBase()).toBe(15);
   expect(triangle.getHeight()).toBe(25);
});
