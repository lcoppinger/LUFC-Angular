/*
Copyright © 2017 of Litebulb Ltd - LUFC Match Stats
*/
app.controller('TwitterController', ['$scope', function($scope){

  $scope.tweets = [
    {
      message: 'The 0-0 draw vs QPR was Leeds first 0-0 draw of the season.',
      hashtag: '#lufc',
      image: 'Images/twitter_logo.png'
    },
    {
      message: 'Leeds have not won against QPR in their last three games at Elland Road. 0-0 03/17, 1-1 04/16, 0-1 08/13.',
      hashtag: '#lufc',
      image: 'Images/twitter_logo.png'
    },
    {
      message: 'Leeds are unbeaten in the last six league games (won three, drawn three)',
      hashtag: '#lufc',
      image: 'Images/twitter_logo.png'
    }
  ];
}]);
