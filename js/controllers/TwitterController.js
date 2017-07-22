/*
Copyright © 2017 of Litebulb Ltd - LUFC Match Stats
*/
app.controller('TwitterController', ['$scope', function($scope){

  $scope.tweets = [
    {
      message: 'We have faced Paul Lambert when he was manager of Colchester, Norwich and Blackburn. Our record against him is P7 W3 D2 L2.',
      hashtag: '#lufc',
      image: 'Images/twitter_logo.png'
    },
    {
      message: "A Silvio own goal gave Leeds the win over Wolves in October, today we try to emulate last season where we did the double over them.",
      hashtag: '#lufc',
      image: 'Images/twitter_logo.png'
    },
    {
      message: "We haven't conceded at home in the last four games.",
      hashtag: '#lufc',
      image: 'Images/twitter_logo.png'
    },
    {
      message: 'Our home record is fantastic this year. In the Championship our record is P21 W14 D3 L4 GF29 GA12.',
      hashtag: '#lufc',
      image: 'Images/twitter_logo.png'
    }
  ];
}]);
