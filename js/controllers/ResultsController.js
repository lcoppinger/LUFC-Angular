/*
Copyright © 2017 of Litebulb Ltd - LUFC Match Stats
*/
app.controller('ResultsController', ['$scope', 'search', 'graphs', function($scope, search, graphs){
  $scope.$on('season_shared',function(){
      $scope.results = search.get().then(function(data){
        $scope.graphData = data[0].slice(24);
        graphs.sendData($scope.graphData);

        //create result data array
        var arr = [];
        var scorers = [];
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

          scorers.push(value[18],value[19],value[20],value[21],value[22]);

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

          //calculate top scorer
          function topScorer() {
            var cleanScorers = [];
            var topScorer;

            scorers.forEach(function(value) {
              if (value !== "" && value !== undefined) {
                cleanScorers.push(value);
              }
            });
            topScorer = mostFreqStr(cleanScorers);
            $scope.topScorer = topScorer.name;
            $scope.topGoals = "Top goal scorer this season: " + topScorer.goals + " goals.";
          }

          //initiate top scorere function
          topScorer();
        });

        //caluclate most frequent goal scorer and number of goals
        function mostFreqStr(arr) {
          var obj = {}, mostFreq = 0, name = [];

          arr.forEach(ea => {
            if (!obj[ea]) {
              obj[ea] = 1;
            } else {
              obj[ea]++;
            }

            if (obj[ea] > mostFreq) {
              mostFreq = obj[ea];
              name = [ea];
            } else if (obj[ea] === mostFreq) {
              name.push(ea);
            }
          });
          return {
            name: name[0],
            goals: mostFreq
          };
        }
  });
}]);
