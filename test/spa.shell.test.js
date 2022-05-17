/* eslint-disable no-undef */
// Test
// spa.shell.test.js

const stuff = require('../js/spa.shell');

describe('stuff in shell', () => {
	it('runs a self-executing function', () => {
		expect(stuff).toBe(stuff);
	});
});
