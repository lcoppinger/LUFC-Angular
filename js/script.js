$(document).ready(function() {

  //scroll nav tabs
  $('.nav-tabs').scrollingTabs({
    scrollToTabEdge: true
  });

  //custom tab controllers
  $(".glyphicon").remove();
  $(".scrtabs-js-tab-scroll-arrow-right").text("more seasons");
  $(".scrtabs-js-tab-scroll-arrow-left").text("less seasons");

  $(".parallelogram").click(function() {
    $(".parallelogram").not(this).each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
  });

  //custom select form element
  $(".custom-dropdown").each(function(){
    var button = $(this).children(".dropdown-toggle");
    var dropdown = $(this).children(".dropdown-menu");

    $(button).click(function(){
      $(dropdown).slideToggle();
    });

    $(dropdown).children(".dropdown-item").each(function(){
      $(this).click(function(){
        var data = $(this).attr("data-value")
        $(button).html($(this).html()).addClass('selected');
        $(button).attr("data-value", data);
        $(dropdown).slideToggle();
      });
    });
  });

  //Toggle dropdown text
  $(".more_button").click(function() {
    $(this).text(function(i, text) {
        return text === "More options" ? "Less options" : "More options";
    });
    $(this).toggleClass("open");
  });

});
