$("document").ready(function() {
  $("#dob").click(function(){
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 200 // Creates a dropdown of 15 years to control year
    });
  });
});
$.get('/list', function(data) {
  var laststud = data[data.length - 1];
  console.log(laststud);
  $("#stud_code").val(laststud.stud_code);
  $("document").ready(function() {
    $("stud_code").trigger("click");
  });
});


