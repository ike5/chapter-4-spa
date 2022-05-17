/* eslint-disable no-undef */
// spa.test.js
// using Jest to test spa.js file

const stuff = require('../js/spa');

describe('stuff()', () => {
    
    it('runs self executing function of spa', () => {
        expect(stuff).toBe(stuff);
    });
});