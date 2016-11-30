$("document").ready(function() {
  $("#dob").click(function(){
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 100 // Creates a dropdown of 15 years to control year
    });
  });
  $("#submit").on('click', function() {
    var gtele = $("#gphone_no").value;
    console.log(gtele);
    var tele = $("#telephone").value;
    if(gtele.match(/^\d{10}$/) && tele.match(/^\d{10}$/)) {
      $.post("/newstud", function(){});
    }else {
      alert("correctly fill the form");
    }
  });

});

