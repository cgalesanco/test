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
              .success(function(data){
                countries = data.countryDTO;
                countriesById = {};
                angular.forEach(countries,function(country) {
                  countriesById[country.id] = country;
                });
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
        if ( states === null ) {
          states = [
            { id:'US:DE', name:'Delaware', country:self.getById('US') },
            { id:'US:CA', name:'California', country:self.getById('US')},
            { id:'ES:LO', name:'La Rioja', country:self.getById('ES')},
            { id:'ES:M', name:'Madrid', country:self.getById('ES')}
          ];
        }
        if ( statesByCountry[country.id] === undefined) {
          var countryStates = [];
          angular.forEach(states,function(state) {
            if ( state.country === country ) {
              countryStates.push(state);
            }
          });
          statesByCountry[country.id] = countryStates;
        }
        return statesByCountry[country.id];
      };
    }]);
