angular.module('controllers',[]).
    controller('TestCtrl',['$scope',function($scope){
      var countries = [
        { id:'US', name:'United States' },
        { id:'ES', name:'Spain' }
      ];

      var states = [
        { id:'US:DE', name:'Delaware', country:countries[0]},
        { id:'US:CA', name:'California', country:countries[0]},
        { id:'ES:LO', name:'La Rioja', country:countries[1]},
        { id:'ES:M', name:'Madrid', country:countries[1]}
      ];

      $scope.allCountries = countries;
      $scope.selectedCountries = [];

    $scope.allStates = [];
    $scope.selectedStates = [];

    $scope.$watch("selectedCountries", function(newValue){
      var newStatesList = [];
      var newSelectedStates = [];
      var countriesFound = {};
      angular.forEach(newValue,function(country){
        countriesFound[country.id] = true;
        angular.forEach(states,function(s){
          if ( country === s.country ) {
            newStatesList.push(s);
          }
        });
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
