'use strict';

const Shape = require('./Shape.js');

test('Create a new Shape object, and its methods to set Shapecolor, textColor, and render', () => {
   const shape = new Shape('red', 'green');
   expect(shape.getShapeColor()).toBe('red');
   expect(shape.getTextColor()).toBe('green');

   shape.setShapeColor('purple');
   shape.setTextColor('pink');
   expect(shape.getShapeColor()).toBe('purple');
   expect(shape.getTextColor()).toBe('pink');

   expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="purple" />`);
});
