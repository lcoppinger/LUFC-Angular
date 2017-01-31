app.factory('search', ['$rootScope','$http', function($rootScope, $http){
  var data = false;
  var search = {
    sendSeason: function(season) {
      data = season;
      $rootScope.$broadcast('season_shared');
    },
    get: function() {
      season = data;
      var promise = $http.get("https://sheets.googleapis.com/v4/spreadsheets/1mF37kTxtp2l_R-VRAlemaOEHQQkbyF9qL-EohTXYLdY/values/"+season+"!C2:Z53?majorDimension=ROWS&key=AIzaSyC4Gjw6FuC9C9-iJ1mqBOf1-arNzUc2FHY").then(function(response){
        return response.data.values;
      }).then(function(err){
        return err;
      });
      return promise;
    }
  };
  return search;
}]);
