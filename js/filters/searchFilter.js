angular.filter('searchFilter', function($filter){
  return function(items, searchfilter) {
    var isSearchFilterEmpty = true;
    angular.forEach(searchfilter, function(searchvalue){
      if (searchvalue !== "All") {
        isSearchFilterEmpty = false;
      }
    });

    if (!isSearchFilterEmpty) {
      var result = [];
      angular.forEach(items, function(item){
        var isFound = false;
      });
    }
  };
});
