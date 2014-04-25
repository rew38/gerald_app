// target h1 target
// put an on event listener
// change text to hi gerald
var GeraldApp = {

onReady: function(){
  $("h1").on("click", GeraldApp.changeText);
},


changeText: function(event){
  console.log("response")
    var h1Text = $(this).text();
    var h1Tag = this;

    $.ajax({
      url: "/reverse",
      dataType: "json",
      type: "POST",
      data: { h1Text: h1Text },
    }).done(function(response){
      $(h1Tag).text(response.h1Text);
    });
  }
}
$(document).ready(GeraldApp.onReady)
