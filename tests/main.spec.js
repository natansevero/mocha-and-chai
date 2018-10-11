/* eslint-env mocha */

const { expect } = require('chai');
const calc = require('../src/main.js');

describe('Main', () => {
    // smoke test
    describe('Smoke tests', () => {
        it('should exist the calc lib', () => {
            expect(calc).to.exist;
        });

        it('should exist the method `sum`', () => {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a('function');
        });

        it('should exist the method `sub`', () => {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a('function');
        });

        it('should exist the method `mult`', () => {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a('function');
        });

        it('should exist the method `div`', () => {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a('function');
        });
    });

    describe('Sum', () => {
        it('should return 4 when `sum(2, 2)`', () => {
            expect(calc.sum(2, 2)).to.be.equal(4);
        });
    });

    describe('Sub', () => {
        it('should return 2 when `sub(4, 2)`', () => {
            expect(calc.sub(4, 2)).to.be.equal(2);
        });
    });

    describe('Div', () => {
        it('should return 6 when `div(12, 2)`', () => {
            expect(calc.div(12, 2)).to.be.equal(6);
        });

        it('should return `Can not to devide any number per zero` when div(2, 0)', () => {
            expect(calc.div(2, 0)).to.be.equal('Can not to devide any number per zero');
        });
    });

    describe('Multi', () => {
        it('should return 10 when `multi(5, 2)`', () => {
            expect(calc.mult(5, 2)).to.be.equal(10);
        });
    });
});
