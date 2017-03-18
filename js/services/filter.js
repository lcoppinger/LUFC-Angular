/*
Copyright © 2017 of Litebulb Ltd - LUFC Match Stats
*/
app.factory('filter', ['$http', function($http){
var selectOptions = {
  get: function(name) {
    var promise = $http.get("json/"+name+".json").then(function (response) {
       return response.data;
     }).then(function(err){
       return err;
     });
     return promise;
  }
};
return selectOptions;
}]);
