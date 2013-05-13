angular.module('test-app',['directives']);

function TestCtrl($scope) {
  $scope.allCountries = [
    { id:'US', name:'United States' },
    { id:'ES', name:'Spain' }
  ];
  $scope.selectedCountries = [];

  $scope.allStates = [
    { id:'ES:LO', name:'La Rioja', country:$scope.allCountries[1]},
    { id:'ES:M', name:'Madrid', country:$scope.allCountries[1]},
    { id:'US:DE', name:'Delaware', country:$scope.allCountries[0]},
    { id:'US:CA', name:'California', country:$scope.allCountries[0]}
  ];
  $scope.selectedStates = [];
}
TestCtrl.$inject = ['$scope'];
