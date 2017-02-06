app.controller('FormController', ['$scope', '$filter', 'filter', 'search', function($scope, $filter, filter, search){
  $scope.season = filter.get('season').then(function(d){
    $scope.season = d;
  });
  $scope.selected = 1;
  $scope.searchValue = "2016-17";
  $scope.select = function(index) {
     $scope.selected = index;
     $scope.searchValue = $scope.season[index].value;
  };
  $scope.send = function() {
    search.sendSeason($scope.searchValue);
  };
  $scope.competition = {
    label: 'Competition',
    id: 'competition',
    placeholder: 'Choose a competition',
    value: "All",
    options: filter.get('competition').then(function(d){
      $scope.competition.options = d;
    })
  };
  $scope.han = {
    label: 'han',
    options: [
      {
        name: 'Home',
        index: 1,
        val: true
      },
      {
        name: 'Away',
        index: 2,
        val: false
      },
      {
        name: 'Neutral',
        index: 3,
        val: false
      }
    ]
  };
  $scope.manager = {
    label: 'Manager',
    id: 'manager',
    placeholder: 'Choose a manager',
    value: "All",
    options: filter.get('manager').then(function(d){
      $scope.manager.options = d;
    })
  };
  $scope.wld = {
    label: 'wld',
    options: [
      {
        name: 'Win',
        index: 4
      },
      {
        name: 'Lose',
        index: 5
      },
      {
        name: 'Draw',
        index: 6
      }
    ]
  };
  $scope.venue = {
    label: 'Venue',
    id: 'venue',
    placeholder: 'Choose a venue',
    value: "All",
    options: filter.get('venue').then(function(d){
      $scope.venue.options = d;
    })
  };
  $scope.scorers = {
    label: 'Goal scorers',
    id: 'scorers',
    placeholder: 'Choose a player',
    value: "All",
    options: filter.get('scorers').then(function(d){
      $scope.scorers.options = d;
    })
  };
  $scope.opposition = {
    label: 'Opposition',
    id: 'opposition',
    placeholder: 'Choose an opposition',
    value: "All",
    options: filter.get('opposition').then(function(d){
      $scope.opposition.options = d;
    })
  };
  $scope.city = {
    label: 'City',
    id: 'city',
    placeholder: 'Choose a city',
    value: "All",
    options: filter.get('city').then(function(d){
      $scope.city.options = d;
    })
  };
  $scope.opp_manager = {
    label: 'Opposition manager',
    id: 'opposition_manager',
    placeholder: 'Choose an opposition manager',
    value: "All",
    options: filter.get('opp_manager').then(function(d){
      $scope.opp_manager.options = d;
    })
  };
  $scope.referee = {
    label: 'Referee',
    id: 'referee',
    placeholder: 'Choose a referee',
    value: "All",
    options: filter.get('referee').then(function(d){
      $scope.referee.options = d;
    })
  };
  $scope.assistant_manager = {
    label: 'Assistant manager',
    id: 'assistant_manager',
    placeholder: 'Choose an assistant manager',
    value: "All",
    options: filter.get('assistant_manager').then(function(d){
      $scope.assistant_manager.options = d;
    })
  };

  $scope.$watch( "han.options" , function(n,o){
       var trues = $filter("filter")( n , {val:true} );
       for(var key in trues) {
          var value = trues[key];
          console.log(value);
        }
       $scope.flag = trues.length;
       console.log($scope.flag);
   }, true );
}]);
