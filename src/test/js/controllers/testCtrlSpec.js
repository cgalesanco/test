describe('The TestCtrl',function(){
  var scope, ctrl;
  beforeEach(module('controllers'));

  beforeEach(inject(function($rootScope,$controller){
    scope = $rootScope.$new();
    ctrl = $controller('TestCtrl',{$scope:scope});

  }));

  it('Provides the initial list of countries and no one is selected',inject(function($rootScope,$controller){
    expect(scope.allCountries.length).toBe(2);
    expect(scope.selectedCountries.length).toBe(0);
  }));

  it('Provides an initially empty list of states',inject(function(){
    expect(scope.allStates.length).toBe(0);
  }));

  it('Adds country states when the user selects a country',function(){
    scope.$apply(function(scope){
      scope.selectedCountries = [scope.allCountries[0]];
    });

    var usStates = jQuery.grep(scope.allStates,function(s){
      return s.country.id === "US";
    });
    expect(usStates.length).toBe(2);
  });

  it('Removes country states when the user removes country',function(){
    scope.$apply(function(scope){
      scope.selectedCountries = [scope.allCountries[0]];
    });

    var usStates = jQuery.grep(scope.allStates,function(s){
      return s.country.id === "US";
    });
    expect(usStates.length).toBe(2);

    scope.$apply(function(scope){
      scope.selectedCountries = [];
    });
    usStates = jQuery.grep(scope.allStates,function(s){
      return s.country.id === "US";
    });
    expect(usStates.length).toBe(0);
  });
});
