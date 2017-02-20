app.controller('MainController', ['$scope', '$filter', 'object', 'filter', 'search', function($scope, $filter, object, filter, search){

  //Season object
  $scope.season = filter.get('season').then(function(d){
    $scope.season = d;
    $scope.initSlick();
  });

  //Competition object
  $scope.competition = object.create('competition');
  $scope.competition.options = filter.get('competition').then(function(d){
    $scope.competition.options = d;
  });

  //Home/Away/Neutral object
  $scope.han = {
    label: 'han',
    options: [
      {
        name: 'Home',
        index: 1,
        val: false
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

  //Manager object
  $scope.manager = object.create('manager');
  $scope.manager.options = filter.get('manager').then(function(d){
    $scope.manager.options = d;
  });

  //Win/Loss/Draw object
  $scope.wld = {
    label: 'wld',
    options: [
      {
        name: 'Won',
        index: 4,
        val: false
      },
      {
        name: 'Lost',
        index: 5,
        val: false
      },
      {
        name: 'Draw',
        index: 6,
        val: false
      }
    ]
  };

  //Venue object
  $scope.venue = object.create('venue');
  $scope.venue.options = filter.get('venue').then(function(d){
    $scope.venue.options = d;
  });

  //Scorers object
  $scope.scorers = object.create('scorers');
  $scope.scorers.options = filter.get('scorers').then(function(d){
    $scope.scorers.options = d;
  });

  //Opposition object
  $scope.opposition = object.create('opposition');
  $scope.opposition.options = filter.get('opposition').then(function(d){
    $scope.opposition.options = d;
  });

  //City object
  $scope.city = object.create('city');
  $scope.city.options = filter.get('city').then(function(d){
    $scope.city.options = d;
  });

  //Opposition Manager object
  $scope.opposition_manager = object.create('opposition_manager');
  $scope.opposition_manager.options = filter.get('opposition_manager').then(function(d){
    $scope.opposition_manager.options = d;
  });

  //Referee object
  $scope.referee = object.create('referee');
  $scope.referee.options = filter.get('referee').then(function(d){
    $scope.referee.options = d;
  });

  //Assistant Manager object
  $scope.assistant_manager = object.create('assistant_manager');
  $scope.assistant_manager.options = filter.get('assistant_manager').then(function(d){
    $scope.assistant_manager.options = d;
  });

  //Select season for data request
  $scope.selected = 0;
  $scope.searchValue = "2016-17";
  $scope.select = function(index) {
     $scope.selected = index;
     $scope.searchValue = $scope.season[index].value;
  };
  $scope.send = function(selected) {
    //$scope.slickConfig.method.slickGoTo($scope.selected);
    $scope.enableSlick();
    search.sendSeason($scope.searchValue);
    $scope.slickConfig.initialSlide = selected;
  };

  //Toggle extra fields
  $scope.toggle = true;
  $scope.$watch('toggle', function(){
      $scope.toggleText = $scope.toggle ? 'More options' : 'Less options';
  });

  //Watch checkboxs to push checked array to filter
  $scope.$watch( "han.options" , function(n,o){
       var checked = [];
       var trues = $filter("filter")( n , {val:true} );
       angular.forEach(trues, function(key, value){
         if (key.name !== undefined) {
           checked.push(key.name);
         }
       });
       $scope.checkedHan = checked;
   }, true );

   $scope.$watch( "wld.options" , function(n,o){
        var checked = [];
        var trues = $filter("filter")( n , {val:true} );
        angular.forEach(trues, function(key, value){
          if (key.name !== undefined) {
            checked.push(key.name);
          }
        });
        $scope.checkedWld = checked;
    }, true );

    //Tabs seasons carousel
    $scope.initSlick = function() {
      $scope.seasonConfig.enabled = true;
    };

   $scope.seasonConfig = {
     arrows: false,
     infinite: false,
     method: {},
     slidesToShow: 4,
     slidesToScroll: 4,
     responsive: [
       {
         breakpoint: 769,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
         }
       }
     ],
   };
    //Results season carousel
    $scope.enableSlick = function() {
     $scope.slickConfig.enabled = true;
    };
    $scope.slickConfig = {
      arrows: false,
      centerMode: true,
      draggable: false,
      infinite: true,
      method: {},
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ],
      event: {
          afterChange: function (event, slick, currentSlide, nextSlide) {
            $scope.currentSlide = currentSlide;
            $scope.currentValue = $scope.season[$scope.currentSlide].value;
            $scope.update = function() {
              search.sendSeason($scope.currentValue);
            };
            $scope.update();
          }
       }
    };
}]);
