
function search(season) {
  var url = "https://sheets.googleapis.com/v4/spreadsheets/1mF37kTxtp2l_R-VRAlemaOEHQQkbyF9qL-EohTXYLdY/values/";
  var key = "!C2:Z53?majorDimension=ROWS&key=AIzaSyC4Gjw6FuC9C9-iJ1mqBOf1-arNzUc2FHY";
  var request = url + season + key;

  //empty previous search result
  $("#results").empty();
  $(".collapse-hide").removeClass('collapse-show');
  $(".plus").show();

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
          var venue = "<td class='venue' data-value='"+values[7]+"'>" + values[7] + "</td>";
          var result = "<td>" + values[13] + "</td>";
          var manager = (typeof values[14] === "undefined") ? "<td>" + "-" + "</td>" : "<td class='manager' data-value='"+values[14]+"'>" + values[14] + "</td>";

          var assistant_manager = (typeof values[15] === "undefined") ? "<td class='collapse-hide'>" + "-" + "</td>" : "<td class='collapse-hide assistant_manager' data-value='"+values[15]+"'>" + values[15] + "</td>";
          var opposition_manager = (typeof values[16] === "undefined") ? "<td class='collapse-hide'>" + "-" + "</td>" : "<td class='collapse-hide opposition_manager' data-value='"+values[16]+"'>" + values[16] + "</td>";
          var referee = (typeof values[17] === "undefined") ? "<td class='collapse-hide'>" + "-" + "</td>" : "<td class='collapse-hide referee' data-value='"+values[17]+"'>" + values[17] + "</td>";
          var city = "<td class='collapse-hide city' data-value='"+values[6]+"'>" + values[6] + "</td>";

          // Determine if Home or Away
          if (values[4] == "Home") {
            var opposition = "<td class='opposition' data-value='"+values[12]+"'>" + values[12] + "</td>";
            var score = "<td>" + "<span>" + values[9] + "</span>" + " - " + values[11] + " " + values[10] + "</td>";
          } else {
            var opposition = "<td class='opposition' data-value='"+values[8]+"'>" + values[8] + "</td>";
            var score = "<td>" + values[9] + " - " + "<span>" + values[11] + "</span>" + " " + values[10] + "</td>";
          }

          //Determine Result and styling
          if (values[13] == "Won" || values[13] == "Won (P)" || values[13] == "Won (P)") {
            var result = "<td class='won result' data-value='"+values[13]+"'>" + values[13] + "</td>";
          } else if (values[13] == "Draw") {
            var result = "<td class='draw result' data-value='"+values[13]+"'>" + values[13] + "</td>";
          } else if (values[13] == "Lost" || values[13] == "Lost (P)" || values[13] == "Lost (ET)") {
            var result = "<td class='lost result' data-value='"+values[13]+"'>" + values[13] + "</td>";
          } else if (typeof values[14] === "undefined") {
            var result = "<td>" + "-" + "</td>";
          }

          //Determine goal scoreres
          if (typeof values[18] === "undefined") {
            var scorers = "<td>" + "-" + "</td>";
          } else if (typeof values[19] === "undefined") {
            var scorers = "<td class='scorer' data-value='"+values[18]+"'>" + values[18] + "</td>";
          } else {
            var scorer3 = (typeof values[20] === "undefined") ? "" : "<p class='scorer3' data-value='"+values[20]+"'>" + values[20] + "</p>";
            var scorer4 = (typeof values[21] === "undefined") ? "" : "<p class='scorer4' data-value='"+values[21]+"'>" + values[21] + "</p>";
            var scorer5 = (typeof values[22] === "undefined") ? "" : "<p class='scorer5' data-value='"+values[22]+"'>" + values[22] + "</p>";
            var scorers = "<td>" + "<div class='dropdown'>" + "<div class='drop scorer' data-value='"+values[18]+"'>" + values[18] + "</div>"
                          + "<div class='dropdown-content'>" + "<p class='scorer2' data-value='"+values[19]+"'>" + values[19] + "</p>" + scorer3
                          + scorer4 + scorer5 + "</div>" + "</div>" + "</td>";
          }

          document.getElementById("results").innerHTML += "<tr>" + competition + date + han + venue + opposition + score + result + scorers + manager + assistant_manager + opposition_manager + referee + city + "</tr>";
      }
    }

    //filtering
    var competition = $("#competition").attr("data-value");
    var checkbox = $("#wld .checkbox-custom");
    var checkbox2 = $("#han .checkbox-custom");
    var manager = $("#manager").attr("data-value");
    var venue = $("#venue").attr("data-value");
    var scorer = $("#scorer").attr("data-value");
    var opposition = $("#opposition").attr("data-value");
    var assistant_manager = $("#assistant_manager").attr("data-value");
    var opposition_manager = $("#opposition_manager").attr("data-value");
    var referee = $("#referee").attr("data-value");
    var city = $("#city").attr("data-value");

    //select box filters
    if (competition !== "null") {
      $("tbody tr").each(function(){
        var result = $(this).find(".competition").attr("data-value");

        if (result !== competition) {
          $(this).hide();
        }
      });
    }

    if (manager !== "null") {
      $("tbody tr").each(function(){
        var result = $(this).find(".manager").attr("data-value");

        if (result !== manager) {
          $(this).hide();
        }
      });
    }

    if (venue !== "null") {
      $("tbody tr").each(function(){
        var result = $(this).find(".venue").attr("data-value");

        if (result !== venue) {
          $(this).hide();
        }
      });
    }

    if (scorer !== "null") {
      $("tbody tr").each(function(){
        var result = $(this).find(".scorer").attr("data-value");
        var result2 = $(this).find(".scorer2").attr("data-value");

        if (result !== scorer) {
          $(this).hide();
        } if (result2 === scorer) {
          $(this).find(".scorer").html("<td>"+result2+"</td");
          $(".drop").addClass('no-view');
          $(this).show();
        }
      });
    }

    if (opposition !== "null") {
      $("tbody tr").each(function(){
        var result = $(this).find(".opposition").attr("data-value");

        if (result !== opposition) {
          $(this).hide();
        }
      });
    }

    //extra data select box filters
    if (assistant_manager !== "null") {
      $("tbody tr").each(function(){
        var result = $(this).find(".assistant_manager").attr("data-value");

        if (result !== assistant_manager) {
          $(this).hide();
          $(".collapse-hide").addClass('collapse-show');
          $(".plus").hide();
        }
      });
    }

    if (opposition_manager !== "null") {
      $("tbody tr").each(function(){
        var result = $(this).find(".opposition_manager").attr("data-value");

        if (result !== opposition_manager) {
          $(this).hide();
          $(".collapse-hide").addClass('collapse-show');
          $(".plus").hide();
        }
      });
    }

    if (referee !== "null") {
      $("tbody tr").each(function(){
        var result = $(this).find(".referee").attr("data-value");

        if (result !== referee) {
          $(this).hide();
          $(".collapse-hide").addClass('collapse-show');
          $(".plus").hide();
        }
      });
    }

    if (city !== "null") {
      $("tbody tr").each(function(){
        var result = $(this).find(".city").attr("data-value");

        if (result !== city) {
          $(this).hide();
          $(".collapse-hide").addClass('collapse-show');
          $(".plus").hide();
        }
      });
    }

    //checkbox filters
    if ($(checkbox).is(':checked')) {
      var arr = [];
      $('.checkbox-custom:checked').each(function() {
         arr.push(this.value)
      });
      $("tbody tr").each(function() {
        var result = $(this).find(".result").attr("data-value");

        if ($.inArray(result, arr) === -1) {
          $(this).hide();
        }

      });
    }

    if ($(checkbox2).is(':checked')) {
      var arr = [];
      $('.checkbox-custom:checked').each(function() {
         arr.push(this.value)
      });
      $("tbody tr").each(function(){
        var result = $(this).find(".han").attr("data-value");

        if ($.inArray(result, arr) === -1) {
          $(this).hide();
        }
      });
    }
  });

};

/*
if ($("tbody tr:visible").length === 0) {
  console.log($("tbody tr:visible").length);
  $(".table-responsive").hide();
  $(".no-results").show();
}
*/

$(document).ready(function() {
  $(".results-wrapper").hide();
  $(".no-results").hide();
  $(".search").click(function(){
    var season = $(".active").attr("data-value");
    search(season);
    $(".results-wrapper").show();
    $('html, body').animate({
      scrollTop: $(".results-wrapper").offset().top
    }, 2000);

    //Season Carousel
    $('.season-tab').slick({
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 3
    });

    $(".season").each(function(){
      if ($(this).attr("data-value") === season) {
        console.log(this);
        $(this).addClass('picked');
      }
    });

    $(".slick-arrow").empty();
  });

  $(this).on("click", ".slick-arrow", function() {
    event.preventDefault();
  });
});
