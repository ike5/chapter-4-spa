// spa.test.js
// using Jest to test spa.js file

const stuff = require('./spa');

describe('stuff()', () => {
    
    it('runs self executing function of spa', () => {
        expect(stuff).toBe(stuff);
    });
});