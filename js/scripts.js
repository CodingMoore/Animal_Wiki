$(document).ready(function() {
  $("#animalType").change(function() {
    const animal = $("#animalType").val();
    $("#parent div").hide();
    if (animal === "Transparent Frog") {
      $("#transparentFrog").show();
    } else if (animal === "Crucifix Frog") {
      $("#crucifixFrog").show();
    } else {
      $("#turtleFrog").show();
    }
  });
});
