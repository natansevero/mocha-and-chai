/* eslint-env mocha */

describe('Main', () => {
    describe('Method A', () => {
        context('Case 1', () => {
            it.skip('should happen blabla', () => {
                // espera o que aconteça
                // Entra de dados / método sum(2,2)
                // Espera retornar (4) => true | (3) => false => broken test
                throw new Error('just an error');
            });
        });

        context('Case 2', () => {
            it('should happen blabla', () => {
                // espera o que aconteça
                // Entra de dados / método sum(2,2)
                // Espera retornar (4) => true | (3) => false => broken test
                throw new Error('just an error');
            });

            it('should happen mimimi', () => {
                // espera o que aconteça
                // Entra de dados / método sum(2,2)
                // Espera retornar (4) => true | (3) => false => broken test
            });
        });
    });

    describe('Method B', () => {

    });
});
