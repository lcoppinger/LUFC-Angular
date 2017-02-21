app.controller('ResultsController', ['$scope', 'search', 'graphs', function($scope, search, graphs){
  $scope.$on('season_shared',function(){
      $scope.results = search.get().then(function(data){
        $scope.graphData = data[0].slice(24);
        graphs.sendData($scope.graphData);

        var arr = [];
        function makeCounter() {
            var i = 0;
            return function() {
                return i++;
            };
        }
        var Id = makeCounter();

        angular.forEach (data, function(value, key){
          var opposition = "";
          if (value[12] == "Leeds United") {
            opposition = value[8];
          } else if (value[8] == "Leeds United"){
            opposition = value[12];
          }

          if (value[19] === ""){
            value[19] = undefined;
          }

          arr.push({
            id: Id(),
            competition : value[0],
            date : value[3],
            han : value[4],
            venue : value[7],
            opposition : opposition,
            score1 : value[9],
            score2 : value[11],
            result : value[13],
            manager : value[14],
            assistant_manager : value[15],
            opposition_manager : value[16],
            referee : value[17],
            city : value[6],
            scorer1 : value[18],
            scorers : [
              {
                scorer : value[19]
              },
              {
                scorer : value[20]
              },
              {
                scorer : value[21]
              },
              {
                scorer : value[22]
              },
            ]
          });
        });
          $scope.results = arr;
        });

  });
}]);
