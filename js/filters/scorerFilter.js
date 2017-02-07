app.filter('scorerFilter', function($filter){
  return function(items, condition) {
    var filtered = [];
    if(condition === undefined || condition === '' || condition === 'All'){
      return items;
    }

    angular.forEach(items, function(item) {
      angular.forEach(item, function(value, key) {
        if (key == 'scorer1' && value == condition) {
          filtered.push(item);
        }
      });
    });

    angular.forEach(items, function(item) {
      if (item.scorers !== undefined) {
        for(var i = 0; i < item.scorers.length; i++) {
           if (item.scorers[i].scorer == condition) {
             if (filtered.indexOf(item) == -1) {
                  filtered.push(item);
              }
           }
        }
      }
    });
    return filtered;
  };
});
