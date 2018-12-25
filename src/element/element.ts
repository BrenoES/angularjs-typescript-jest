import angular from 'angular'

angular.module('mathmodule', [])
  .factory('mathservice', function () {

    let addTwoNumbers = function (x: number, y: number): number {
      //add logic later
      return x + y;
    };

    return {
      addTwoNumbers
    };
  });