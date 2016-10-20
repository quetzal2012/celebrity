$(document).ready(function(){
  $("#dating").submit(function(event) {
    $("#malerock, #femalerock, #enbyrock, #malerap, #femalerap, #enbyrap").hide();

    var books = $("select#books").val();
    var gender = $("select#gender").val();

    if (books === 'horror' && gender === 'male') {
      $("#horrormale").show();
    } else if (books === 'horror' && gender === 'female') {
      $('#horrorfemale').show();
    } else if (books === 'fiction' && gender === 'male') {
      $('#fictionmale').show();
    } else if (books === 'fiction' && gender === 'female') {
      $('#fictionfemale').show();
  };
    event.preventDefault();
  });

});
