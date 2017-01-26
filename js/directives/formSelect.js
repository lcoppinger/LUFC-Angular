app.directive('formSelect', function(){
  return {
    restrict: 'E',
    scope: {
      select: '='
    },
    templateUrl: 'js/directives/formSelect.html'
  };
});
