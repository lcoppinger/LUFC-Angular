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
