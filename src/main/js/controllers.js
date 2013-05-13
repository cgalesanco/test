angular.module('controllers',['services']).
    controller('TestCtrl',['$scope','CountriesSvc', function($scope,CountriesSvc){
      $scope.allCountries = CountriesSvc.getAll();
      $scope.selectedCountries = [];

    $scope.allStates = [];
    $scope.selectedStates = [];

    $scope.$watch("selectedCountries", function(newValue){
      var newStatesList = [];
      var newSelectedStates = [];
      var countriesFound = {};
      angular.forEach(newValue,function(country){
        newStatesList = newStatesList.concat(CountriesSvc.getCountryStates(country));
        countriesFound[country.id] = true;
      });
      $scope.allStates = newStatesList;
      angular.forEach($scope.selectedStates,function(ss){
        if ( countriesFound[ss.country.id] ) {
          newSelectedStates.push(ss);
        }
      });
      $scope.selectedStates = newSelectedStates;
    });
  }]);
