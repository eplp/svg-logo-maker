'use strict';
const Circle = require('./Circle.js');

test('check circle object creation and inherited methods', () => {
   const circle = new Circle(20, 'yellow', 'black');
   expect(circle.getShapeColor()).toBe('yellow');
   expect(circle.getTextColor()).toBe('black');

   circle.setShapeColor('purple');
   circle.setTextColor('pink');
   expect(circle.getShapeColor()).toBe('purple');
   expect(circle.getTextColor()).toBe('pink');

   expect(circle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="purple" />`);

   expect(circle.getRadius()).toBe(20);
   circle.setRadius(25);
   expect(circle.getRadius()).toBe(25);
});
