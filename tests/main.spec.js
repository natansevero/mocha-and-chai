/* eslint-env mocha */

/*
    Pegar cada item do escopo e criar os testes

    Desafio Fizzbuzz

    Escreva uma lib que receba um núemro e:

    Se o numero for divisivel por 3, no lugar do numero escreva 'Fizz'
    Se o numero for divisivel por 5, no lugar do numero escreva 'Buzz'
    Se o numero for divisivel por 3 e 5, no lugar do numero escreva 'FizzBuzz'
    Se não for multiplo de nada, retorna o numero
*/

import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {
    it('should return `Fizz` when multiple of 3', () => {
        expect(FizzBuzz(3)).to.be.equal('Fizz');
        expect(FizzBuzz(6)).to.be.equal('Fizz');
    });

    it('should return `Buzz` when multiple of 5', () => {
        expect(FizzBuzz(5)).to.be.equal('Buzz');
        expect(FizzBuzz(10)).to.be.equal('Buzz');
    });

    it('should return `FizzBuzz when multiple of 3 and 5`', () => {
        expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
    });

    it('should return the number when non-multiple', () => {
        expect(FizzBuzz(2)).to.be.equal(2);
    });

    it('should return 0 when 0', () => {
        expect(FizzBuzz(0)).to.be.equal(0);
    });
});
