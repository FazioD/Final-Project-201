//Radio Button for yes danger.
//parent/child relationship to target each specific function.
$(document).ready(function() {
  $("#yesDanger").click(function() {
    alert("Call 911");
  });
  $("#noDanger").click(function() {
    alert("Don't Call 911");
  });
});

//INPUTS INTO POSSIBLE BACK END DATABASES

//RADIO BUTTONS for Do you have children.


//form fields//
var children = $("#kids");
var shelter = $("#response");

//event listener//
var newSubmitButton = document.getElementById("add-new-submit");
newShopButton.addEventListener("click", handelSubmit);



