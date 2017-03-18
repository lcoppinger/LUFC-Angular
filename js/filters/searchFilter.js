/*
Copyright © 2017 of Litebulb Ltd - LUFC Match Stats
*/
app.filter('searchFilter', function($filter){
  return function(items, condition) {
    var filtered = [];
    var select = "";
    var field = "";

    angular.forEach(condition, function(value, key) {
      select = value;
      field = key;
    });

    if(select === undefined || select === '' || select === 'All'){
      return items;
    }
    angular.forEach(items, function(item) {
      angular.forEach(item, function(value, key) {
        if (select == value && key == field) {
          filtered.push(item);
        }
      });
    });

    return filtered;
  };
});
