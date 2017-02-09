app.factory('object', function(){
  var scopeObject = {
    create: function(name) {
      if (name.includes('_')){
        name = name.split('_').join(' ');
      }

      if (name == 'scorers') {
        place = 'player';
      } else {
        place = name;
      }

      var title = name.charAt(0).toUpperCase() + name.slice(1);
      var obj = {
        label: title,
        id: name,
        placeholder: 'Choose a ' + place,
        value: 'All'
      };
      return obj;
    }
  };
  return scopeObject;
});
