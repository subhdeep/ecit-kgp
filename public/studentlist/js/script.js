$("document").ready(function(){
  $("#dele").click(function(){
    $.ajax({
      url: '/delete/' + $("#del").val(),
      type: 'DELETE'
    }).done(function(data) {
      if(data == "OK") {
        location.reload();
      } else {
        alert("Enter Correct Student Code");
      }
    });
  });
});

