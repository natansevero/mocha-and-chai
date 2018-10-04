/* eslint-env mocha */

// describe('Main', () => {
//     describe('Method A', () => {
//         context('Case 1', () => {
//             it('should happen blabla', () => {
//                 // espera o que aconteça
//                 // Entra de dados / método sum(2,2)
//                 // Espera retornar (4) => true | (3) => false => broken test
//                 throw new Error('just an error');
//             });
//         });

//         context('Case 2', () => {
//             it('should happen blabla', () => {
//                 // espera o que aconteça
//                 // Entra de dados / método sum(2,2)
//                 // Espera retornar (4) => true | (3) => false => broken test
//                 throw new Error('just an error');
//             });

//             it('should happen mimimi', () => {
//                 // espera o que aconteça
//                 // Entra de dados / método sum(2,2)
//                 // Espera retornar (4) => true | (3) => false => broken test
//             });
//         });
//     });

//     describe('Method B', () => {

//     });
// });
const { expect } = require('chai');

describe('Main', () => {
    let arr;

    before(() => {

    });

    after(() => {

    });

    beforeEach(() => {
        arr = [1, 2, 3];
    });

    afterEach(() => {

    });

    // Testar tipos ou se existe (Smoke test)
    it('should be an array', () => {
        expect(arr).to.be.a('array');
    });

    it('should gave a size of 4 when push another value to array', () => {
        arr.push(4);
        expect(arr).to.have.length(4);
    });

    it('should remove the value 3 when use pop in the array', () => {
        arr.pop();
        expect(arr).to.not.include(3);
    });

    it('should have a size 2 when pop a value from the array', () => {
        arr.pop();
        expect(arr).to.have.length(2);
    });
});

// before
// beforeEach
// test1
// afterEach
// beforeEach
// test2
// afterEach
// after
