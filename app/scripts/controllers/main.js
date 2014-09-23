'use strict';

/**
 * @ngdoc function
 * @name angularApp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp1App
 */
angular.module('angularApp1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
