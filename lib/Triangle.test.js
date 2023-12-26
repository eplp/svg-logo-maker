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
});
