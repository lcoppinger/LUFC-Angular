app.filter('scorerFilter', function($filter){
  return function(items, condition) {
    var filtered = [];
    if(condition === undefined || condition === '' || condition === 'All'){
      return items;
    }

    angular.forEach(items, function(item) {
      angular.forEach(item, function(value, key) {
        if (key == 'scorer1' && condition == value) {
          filtered.push(item);
        }
      });
    });

/*
    angular.forEach(items, function(item) {
      //console.log(item.scorers);
      angular.forEach(item, function(value, key) {
        if (key == 'scorer1' && value == condition) {
          filtered.push(item);
        }
      });
      angular.forEach(item.scorers, function(value, key) {
        angular.forEach(value, function(name, key) {
          if (key == 'scorer' && name !== undefined) {
            console.log(name);
            if (name == condition) {
              filtered.push(item);
            }
          }
        });
      });
    });
    */

    return filtered;
  };
});
