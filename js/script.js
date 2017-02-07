$(document).ready(function() {
  //scroll nav tabs
  $('.tabs').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  //custom tab controllers
  $(".slick-prev").text("recent seasons");
  $(".slick-next").text("previous seasons");

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
/*
  //Goal scorers dropdown
  $(this).on("click", ".drop", function() {
    $(this).toggleClass("open");
    $(this).siblings(".dropdown-content").toggleClass("visible");
  });
  */

  //Season Carousel
  $('.season-tab').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3
  });

/*
  //toggle extra table
  $("#plus").click(function() {
    $(".collapse-hide").addClass('collapse-show');
    $(".plus").hide();
  });

  $("#minus").click(function() {
    $(".collapse-hide").removeClass('collapse-show');
    $(".plus").show();
  });

*/

});
