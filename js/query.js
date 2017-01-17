
function search(season) {
  var url = "https://sheets.googleapis.com/v4/spreadsheets/1mF37kTxtp2l_R-VRAlemaOEHQQkbyF9qL-EohTXYLdY/values/";
  var key = "!C2:Z53?majorDimension=ROWS&key=AIzaSyC4Gjw6FuC9C9-iJ1mqBOf1-arNzUc2FHY";
  var request = url + season + key;

  //empty previous search result
  $("#results").empty();

  //request season data
  $.get(request, function(data){
    console.log(request);
    console.log(data);

    if(data.hasOwnProperty('values')){
      for (var i = 0; i < data.values.length; i++) {
          var values = data.values[i];
          var competition = "<td class='competition' data-value='"+values[0]+"'>" + values[0] + "</td>";
          var date = "<td data-value='"+values[3]+"'>" + values[3] + "</td>";
          var han = "<td class='han' data-value='"+values[4]+"'>" + values[4] + "</td>";
          var venue = "<td>" + values[7] + "</td>";
          var result = "<td>" + values[13] + "</td>";
          var manager = (typeof values[14] === "undefined") ? "<td>" + "-" + "</td>" : "<td>" + values[14] + "</td>";

          var assistant_manager = (typeof values[15] === "undefined") ? "<td>" + "-" + "</td>" : "<td>" + values[15] + "</td>";
          var opposition_manager = (typeof values[16] === "undefined") ? "<td>" + "-" + "</td>" : "<td>" + values[16] + "</td>";
          var referee = (typeof values[17] === "undefined") ? "<td>" + "-" + "</td>" : "<td>" + values[17] + "</td>";
          var city = "<td>" + values[6] + "</td>";

          // Determine if Home or Away
          if (values[4] == "Home") {
            var opposition = "<td>" + values[12] + "</td>";
            var score = "<td>" + "<span>" + values[9] + "</span>" + " - " + values[11] + " " + values[10] + "</td>";
          } else {
            var opposition = "<td>" + values[8] + "</td>";
            var score = "<td>" + values[9] + " - " + "<span>" + values[11] + "</span>" + " " + values[10] + "</td>";
          }

          //Determine Result and styling
          if (values[13] == "Won" || values[13] == "Won (P)") {
            var result = "<td class='won result' data-value='"+values[13]+"'>" + values[13] + "</td>";
          } else if (values[13] == "Draw") {
            var result = "<td class='draw result' data-value='"+values[13]+"'>" + values[13] + "</td>";
          } else if (values[13] == "Lost" || values[13] == "Lost (P)") {
            var result = "<td class='lost result' data-value='"+values[13]+"'>" + values[13] + "</td>";
          } else if (typeof values[14] === "undefined") {
            var result = "<td>" + "-" + "</td>";
          }

          //Determine goal scoreres
          if (typeof values[18] === "undefined") {
            var scorers = "<td>" + "-" + "</td>";
          } else if (typeof values[19] === "undefined") {
            var scorers = "<td>" + values[18] + "</td>";
          } else {
            var scorer3 = (typeof values[20] === "undefined") ? "" : "<p>" + values[20] + "</p>";
            var scorer4 = (typeof values[21] === "undefined") ? "" : "<p>" + values[21] + "</p>";
            var scorer5 = (typeof values[22] === "undefined") ? "" : "<p>" + values[22] + "</p>";
            var scorers = "<td>" + "<div class='dropdown'>" + "<div class='drop'>" + values[18] + "</div>"
                          + "<div class='dropdown-content'>" + "<p>" + values[19] + "</p>" + scorer3
                          + scorer4 + scorer5 + "</div>" + "</div>" + "</td>";
          }

          document.getElementById("results").innerHTML += "<tr>" + competition + date + han + venue + opposition + score + result + scorers + manager + "</tr>";
          document.getElementById("extra-results").innerHTML += "<tr>" + assistant_manager + opposition_manager + referee + city + "</tr>";
      }
    }

    var competition = $("#competition").attr("data-value");
    var checkbox = $(".checkbox-custom");

    if (competition !== "null") {
      $("tbody tr").each(function(){
        var result = $(this).find(".competition").attr("data-value");

        if (result !== competition) {
          $(this).hide();
        }
      });
    } else if ($(checkbox).is(':checked')) {
      $('.checkbox-custom:checked').each(function() {
         var checked = this.value;

         $("tbody tr").each(function(){
           var result = $(this).find(".han").attr("data-value");
           console.log(result);
           if (result !== checked) {
             $(this).hide();
           }
         });
      });
    }
  });
};

$(document).ready(function(){
  $(".results-wrapper").hide();
  $(".search").click(function(){
    var season = $(".active").attr("data-value");
    search(season);
    $(".results-wrapper").show();
    $('html, body').animate({
      scrollTop: $(".results-wrapper").offset().top
    }, 2000);
  });
});
