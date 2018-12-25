require('angular')
require('angular-mocks/angular-mocks.js');
require('./element.ts');

describe('Math service - addTwoNumbers', function(){

    beforeEach(
      angular.mock.module('mathmodule')
    );
  
  let   _mathservice: any;
  
    beforeEach(inject((mathservice:any) => {
      _mathservice = mathservice;
    }));
  
    test('1 + 1 should equal 2', function(){
      let actual = _mathservice.addTwoNumbers(1,1);
      expect(actual).toEqual(2);
    });
  
    test('10 + 5 should equal 15', function(){
      let actual = _mathservice.addTwoNumbers(10,5);
      expect(actual).toEqual(15);
    });
  
    test('50 + 80 should equal 130', function(){
      let actual = _mathservice.addTwoNumbers(50,80);
      expect(actual).toEqual(130);
    });
  
  });