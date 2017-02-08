app.filter('checkboxFilter', function($filter){
  return function(items, condition) {
    var filtered = [];
    var field = "";
    var select = [];

    angular.forEach(condition, function(value, key) {
      select = value;
      field = key;
    });

    if(select === undefined || select.length === 0){
      return items;
    }

    angular.forEach(items, function(item) {
      angular.forEach(item, function(value, key) {
        angular.forEach(select, function(name) {
          if (name == value || name+' (P)' == value && key == field) {
            filtered.push(item);
          }
        });
      });
    });

    return filtered;
  };
});
