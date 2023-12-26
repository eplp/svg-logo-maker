'use strict';
const Square = require('./Square.js');

test('check square object creation and inherited methods', () => {
   const square = new Square(20, 35, 'yellow', 'black');
   expect(square.getShapeColor()).toBe('yellow');
   expect(square.getTextColor()).toBe('black');

   square.setShapeColor('purple');
   square.setTextColor('pink');
   expect(square.getShapeColor()).toBe('purple');
   expect(square.getTextColor()).toBe('pink');

   expect(square.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="purple" />`);
});
