//Global Scope Variables.
var firstName = $("#firstName");
var lastName = $("#lastName");
var address = $("zipCode");
var numberOfKids = Number($("numberKids"));
var info = $("textArea");

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
$(document).ready(function() {
  $("#yesKids").click(function() {
    alert("Call 911");
  });
  $("#noKids").click(function() {
    alert("Don't Call 911");
  });
});

//INPUT for HOW MANY CHILDREN.

//RADIO BUTTONS for the "Are you in need of medical assistance."
$(document).ready(function() {
  $("#yesCare").click(function() {
    alert("Call 911");
  });
  $("#noCare").click(function() {
    alert("Don't Call 911");
  });
});

//RADIO BUTTONS for the ? "Would you like to speak with one of our..."
$(document).ready(function() {
  $("#yesAbuse").click(function() {
    alert("Call 911");
  });
  $("#noAbuse").click(function() {
    alert("Don't Call 911");
  });
});
