$(document).ready(function() {
  var numbers = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];
  var suits = ["hearts","spades","clubs","diamonds"];

  $(".btn").click(function() {
    suits.forEach(function(suit) {
      numbers.forEach(function(number) {
        $("#cards").append('<li>' + number + ' of ' + suit + '</li>');
      });
      $("#deck").show();
      $(".button").hide();
    });
  });
  alert('helloworld');

});
