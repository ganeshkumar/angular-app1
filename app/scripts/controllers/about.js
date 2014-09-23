'use strict';

/**
 * @ngdoc function
 * @name angularApp1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp1App
 */
angular.module('angularApp1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
