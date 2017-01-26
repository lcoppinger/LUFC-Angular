app.controller('FormController', ['$scope', 'filter', function($scope, filter){
  var data = filter.get('competition');
  $scope.competition = {
    label: 'Competition',
    placeholder: 'Choose a competition',
    options: data
  };
  $scope.han = {
    label: 'han',
    options: [
      {
        name: 'Home',
        index: 1
      },
      {
        name: 'Away',
        index: 2
      },
      {
        name: 'Neutral',
        index: 3
      }
    ]
  };
  $scope.manager = {
    label: 'Manager',
    placeholder: 'Choose a manager',
    options: [
      {
        name: 'All'
      },
      {
        name: 'Garry Monk'
      },
      {
        name: 'Uwe Rosler'
      },
      {
        name: 'Steve Evans'
      },
      {
        name: 'David Hockaday'
      },
      {
        name: 'Neil Redfearn'
      },
      {
        name: 'Darko Milanič'
      }
    ]
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
}]);
