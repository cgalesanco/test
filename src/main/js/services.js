angular.module('services',[])
    .service('CountriesSvc',['$http',function($http){
      var countries = null;
      var countriesById = null;
      var states = null;
      var statesByCountry = {};
      var self = this;

      this.getAll = function(){
        if ( countries === null ) {
          countries = $http.get('/rest/countries')
              .then(function(resp){
                countriesById = {};
                angular.forEach(resp.data,function(country) {
                  countriesById[country.id] = country;
                });
                return resp.data;
              });
        }
        return countries;
      };

      this.getById = function(id) {
        if ( countriesById === null ) {
          getAll();
        }
        return countriesById[id];
      };

      this.getCountryStates = function(country) {
        if ( statesByCountry[country.id] === undefined) {
          statesByCountry[country.id] = $http.get('/rest/countries/'+country.id+'/states')
              .then(function(result) {
                angular.forEach(result.data, function(state) {
                  state.country = country;
                });
                return result.data;
              });
        }
        return statesByCountry[country.id];
      };
    }]);
