$(document).ready(function() {
  //scroll nav tabs
  /*
  $('.nav-tabs').scrollingTabs({
    scrollToTabEdge: true
  });
  */

  //custom tab controllers
  $(".glyphicon").remove();
  $(".scrtabs-js-tab-scroll-arrow-right").text("previous seasons");
  $(".scrtabs-js-tab-scroll-arrow-left").text("recent seasons");

/*
  $(".parallelogram").click(function() {
    $(".parallelogram").not(this).each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
  });
*/
  //custom select form element
  /*
  $(".custom-dropdown").each(function(){
    var button = $(this).children(".dropdown-toggle");
    var dropdown = $(this).children(".dropdown-menu");

    $(button).click(function(){
      $(dropdown).slideToggle();
    });

    $(dropdown).children(".dropdown-item").each(function(){
      $(this).click(function(){
        var data = $(this).attr("data-value");
        $(button).html($(this).html()).addClass('selected');
        $(button).attr("data-value", data);
        $(dropdown).slideToggle();
      });
    });
  });
  */

  //Toggle dropdown text
  $(".more_button").click(function() {
    $(this).text(function(i, text) {
        return text === "More options" ? "Less options" : "More options";
    });
    $(this).toggleClass("open");
  });

  //Facts Carousel
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  //Goal scorers dropdown
  $(this).on("click", ".drop", function() {
    $(this).toggleClass("open");
    $(this).siblings(".dropdown-content").toggleClass("visible");
  });

  //toggle extra table
  $("#plus").click(function() {
    $(".collapse-hide").addClass('collapse-show');
    $(".plus").hide();
  });

  $("#minus").click(function() {
    $(".collapse-hide").removeClass('collapse-show');
    $(".plus").show();
  });


});
