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
        angular.forEach(item, function(value, key) {
          angular.forEach(searchfilter, function(searchstring) {
            if (searchstring == value) {
              result.push(item);
            }
          });
        });
      });
      return result;
    } else {
      return items;
    }
  };
});
