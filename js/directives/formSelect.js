app.directive('formSelect', function(){
  return {
    restrict: 'E',
    scope: {
      select: '='
    },
    templateUrl: 'js/directives/formSelect.html',
    link: function($scope, element, attrs) {
      $scope.class = "";
      $scope.change = function(name) {
        $scope.select.placeholder = name;
        $scope.select.value = name;
        $scope.class = "selected";
      };
    }
  };
});
