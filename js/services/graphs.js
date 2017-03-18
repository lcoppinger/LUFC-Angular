app.factory('graphs', ['$rootScope', '$q', function($rootScope, $q){
  var data = [];
  var graphData = {
    sendData: function(graph) {
      data = graph;
      $rootScope.$broadcast('graph_shared');
    },
    getPieResults: function() {
      var deferred = $q.defer();
      pieData = [];
      pieData.push(
        {
          "result": "Won",
          "percentage": data[0]
        }, {
          "result": "Lost",
          "percentage": data[1]
        }, {
          "result": "Draw",
          "percentage": data[2]
        }
      );
      deferred.resolve(pieData);
      return deferred.promise;
    },
    getDonutResults: function() {
      var deferred = $q.defer();
      donutData = [];
      donutData.push(
        {
          "goals": "Scored",
          "number": data[3]
        }, {
          "goals": "Conceded",
          "number": data[4]
        }
      );
      deferred.resolve(donutData);
      return deferred.promise;
    }
  };
  return graphData;
}]);
