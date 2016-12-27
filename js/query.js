
$(document).ready(function(){
  var request = "https://sheets.googleapis.com/v4/spreadsheets/1mF37kTxtp2l_R-VRAlemaOEHQQkbyF9qL-EohTXYLdY/values/2016-17!A1:C21?majorDimension=COLUMNS&key=AIzaSyC4Gjw6FuC9C9-iJ1mqBOf1-arNzUc2FHY";

  $.get(request, function(data){
    console.log(request);
    console.log(data);
  });
});
