app.directive('formSelect', function(){
  return {
    restrict: 'E',
    scope: {
      select: '='
    },
    templateUrl: 'js/directives/formSelect.html',
    link: function(scope, element, attrs) {

    }
  };
});
/*
        scope.buttonText = "Install",
      	scope.installed = false,
        scope.download = function() {
          element.toggleClass('btn-active');
          if (scope.installed) {
            scope.buttonText = "Install";
            scope.installed = false;
          } else {
            scope.buttonText = "Uninstall";
            scope.installed = true
          }
          */
