app.controller('ResultsController', ['$scope', 'search', function($scope, search){
  $scope.results = search.get('2016-17').then(function(data){
    $scope.results = data;
    var arr = [];
      angular.forEach($scope.results, function(value, key){
        var x = key;
        if ($scope.results[x][4] == "Home") {
          value = $scope.results[x][12];
        } else {
          value = $scope.results[x][8];
        }
        arr.push(value);
        console.log(value);
      });
      var obj = arr.reduce(function(acc, cur, i) {
        acc[i] = cur;
        return acc;
      }, {});
      console.log(obj);
  });
}]);
