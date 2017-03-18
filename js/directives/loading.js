/*
Copyright © 2017 of Litebulb Ltd - LUFC Match Stats
*/
app.directive('loading', function(){
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="loading-wrapper" ng-show="loading"><img src="Images/Loading-gif.gif"/></div>',
    link: function (scope, element, attr) {
      scope.$watch('loading', function(val){
        if (val) {
          $(element).show();
        } else {
          $(element).hide();
        }
      });
    }
  };
});
