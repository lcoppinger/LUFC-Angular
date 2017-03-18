/*
Copyright © 2017 of Litebulb Ltd - LUFC Match Stats
*/
app.directive('formCheckbox', function() {
  return {
    restrict: 'E',
    scope: {
      check: '='
    },
    templateUrl: 'js/directives/formCheckbox.html'
  };
});
