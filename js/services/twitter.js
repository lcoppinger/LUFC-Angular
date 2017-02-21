app.factory('twitter', ['$http', '$sce', function($http, $sce){
  var bearer_token = "AAAAAAAAAAAAAAAAAAAAALmzzAAAAAAAHv5z%2BytmUaqiurO%2F%2F%2BAwwoLmNhE%3DF5nXTEZK5DuQQOTbpq0Gfs1ERTIvlTAXSPEuZvnEn8YDrmEiqc";
  var twitter = {
    get: function() {
      var url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
      $sce.trustAsResourceUrl(url);

      var promise = $http.jsonp(url,{
        headers: {"Authorization": "Bearer " + bearer_token, jsonpCallbackParam: 'callback'}
      }).then(function(response){
        console.log(response);
        return response;
      }).then(function(err){
        console.log(err);
        return err;
      });
      return promise;
    }
  };
  return twitter;
}]);

/*
FtaIwyC5h3ubIPGHNj4r-vjUW_E
var bearer_token = "AAAAAAAAAAAAAAAAAAAAALmzzAAAAAAAHv5z%2BytmUaqiurO%2F%2F%2BAwwoLmNhE%3DF5nXTEZK5DuQQOTbpq0Gfs1ERTIvlTAXSPEuZvnEn8YDrmEiqc";
var twitter = {
  get: function() {
    var promise = $http.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=lufcmatchstats&count=5',{
      headers: {"Authorization": "Bearer " + bearer_token}
    }).then(function(response){
      console.log(response);
      return response;
    }).then(function(err){
      console.log(err);
      return err;
    });
    return promise;
  }
};
return twitter;

*/
