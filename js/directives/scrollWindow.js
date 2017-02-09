app.directive('scrollWindow', function(){
  return {
    restrict: 'A',
    link: function (scope, $elm) {
        $elm.on('click', function(){
          $("body").animate({scrollTop: $elm.offset().top}, "slow");
        });
    }
  };
});
