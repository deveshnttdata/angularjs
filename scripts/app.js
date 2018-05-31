console.log($("h3").attr("reply"));


// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {

}]);


var searchPeople = function(firstName, lastName, height, age, occupation){
  return 'John Doe';
}

console.log(searchPeople);

console.log(angular.injector().annotate(searchPeople));
