$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#text-showing1").toggle();
    $("#text-hidden1").toggle();
  });

  $(".clickable2").click(function() {
    $("#text-showing2").toggle();
    $("#text-hidden2").toggle();
  });
});