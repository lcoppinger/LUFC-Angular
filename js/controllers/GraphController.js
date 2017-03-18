app.controller('GraphController', ['$scope', 'graphs', function($scope, graphs){
  $scope.resultsOptions = {
        data: [{
            "result": "Won",
            "percentage": 0
          }, {
            "result": "Lost",
            "percentage": 0
          }, {
            "result": "Draw",
            "percentage": 0
          }],
        type: "pie",
        colors: ["#215b99", "#648db8", "#c7d6e5"],
        outlineAlpha: 1,
    		outlineThickness: 2,
        color: "#FFFFFF",
        fontSize: 12,
        fontFamily: 'Lato',
        labelRadius: -30,
        labelText: "[[title]]: <br>[[value]]%",
        valueField: "percentage",
        titleField: "result",
        radius: "33%",
        panEventsEnabled: false,
        pullOutRadius: 0,
        balloon: {
           fixedPosition: true
         }
    };

    $scope.goalsOptions = {
      data: [{
        "goals": "Scored",
        "number": 0
      }, {
        "goals": "Conceded",
        "number": 0
      }],
      type: "pie",
      colors: ["#215b99", "#648db8"],
      outlineAlpha: 1,
      outlineThickness: 2,
      valueField: "number",
      titleField: "goals",
      radius: "33%",
      innerRadius: "35%",
      color: "#FFFFFF",
      fontSize: 12,
      fontFamily: 'Lato',
      labelText: "[[title]]: <br>[[value]]",
      labelRadius: -36,
      panEventsEnabled: false,
      pullOutRadius: 0
    };

  $scope.$on('graph_shared',function(){
    graphs.getPieResults().then(function(response){
      $scope.$broadcast('amCharts.updateData', response, 'resultsPie');
    });
    graphs.getDonutResults().then(function(response){
      $scope.$broadcast('amCharts.updateData', response, 'goalsDonut');
    });
  });
}]);
