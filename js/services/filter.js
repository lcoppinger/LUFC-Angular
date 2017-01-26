app.factory('filter', ['$http', function($http){
  return {
    get: function(name) {
      $http.get("/json/"+name+".json").then(successCallback, errorCallback);

      function successCallback(response){
          return response.data;
      }
      function errorCallback(error){
          return error;
      }
    }
  };
}]);