$("document").ready(function(){
  $("#dele").click(function(){
    $.ajax({
      url: '/delete/' + $("#del").val(),
      type: 'DELETE'
    });
  });
});

