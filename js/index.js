//  What we do section//
$(document).ready(function() {
  $(".designclickable").click(function() {
    $("#design-showing").toggle();
    $("#design-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".developementclickable").click(function() {
    $("#developement-showing").toggle();
    $("#developement-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".productclickable").click(function() {
    $("#productmanagement-showing").toggle();
    $("#productmanagement-hidden").toggle();
  });
});

//portfolio section//


// contact us section// 
$(document).ready(function(){
  $("#blanks form").submit(function(event){
    $("#confirmation").show();
    event.preventDefault();
  });
});