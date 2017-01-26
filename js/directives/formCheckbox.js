app.directive('formCheckbox', function() {
  return {
    restrict: 'E',
    scope: {
      check: '='
    },
    templateUrl: 'js/directives/formCheckbox.html'
  };
});
