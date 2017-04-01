/*
Copyright © 2017 of Litebulb Ltd - LUFC Match Stats
*/
app.controller('TwitterController', ['$scope', function($scope){

  $scope.tweets = [
    {
      message: 'Leeds are unbeaten in the last 5 games against Reading (won 3, drawn 2).',
      hashtag: '#lufc',
      image: 'Images/twitter_logo.png'
    },
    {
      message: "Last loss at the Madejski Stadium was a 1-0 defeat in Sep 2013.",
      hashtag: '#lufc',
      image: 'Images/twitter_logo.png'
    },
    {
      message: 'Leeds have scored in their last 8 Championship away games, scoring 15 goals. (Failed to score against Brighton in Dec)',
      hashtag: '#lufc',
      image: 'Images/twitter_logo.png'
    },
    {
      message: 'Including today we have had a different manager for our last 7 visits to the Madejski',
      hashtag: '#lufc',
      image: 'Images/twitter_logo.png'
    },
    {
      message: 'Today: Monk, Aug 15: Rösler, Feb 15: Redfearn, Sep 13: McDermott, Apr 12: Warnock, Nov 11: Grayson, Oct 05: Blackwell.',
      hashtag: '#lufc',
      image: 'Images/twitter_logo.png'
    }
  ];
}]);
