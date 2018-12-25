import angular from 'angular';
import 'angular-mocks/angular-mocks.js';
import './file.component'


describe('divideDoisNumeros', () => {
    const obj = {
        nome: 'breno'
    };
    let ctrl: any;

    beforeEach(
        angular.mock.module('fileModule'),
    );

    beforeEach(
        angular.mock.inject(($controller) => {
            ctrl = $controller('fileController', {});
        })
    );

    it('deve ser 2', () => {
        expect(ctrl.divideDoisInteiros(4, 2)).toEqual(2);
    });
    it('deve retornado nome', () => {
        expect(ctrl.getKeyByValue(obj, 'breno')).toEqual('nome');
    });
});