//Global Scope Variables.
var firstName = $("#firstName");
var lastName = $("#lastName");
var address = $("zipCode");
var numberOfKids = Number($("numberKids"));
var info = $("textArea");

//Radio Button for yes danger.
$(document).ready(function() {
  $("#yesDanger").click(function() {
    $("#alert").html("Call 911");
  });
  $("#noDanger").click(function() {
    document.write("Don't Call 911");
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
    alert("If it's an emergency let us help you contact 911. Otherwise please list your health concerns in the comments section below.");
  });
  $("#noCare").click(function() {
    alert("That's great!");
  });
});

//RADIO BUTTONS for the ? "Would you like to speak with one of our..."
$(document).ready(function() {
  $("#yesAbuse").click(function() {
    alert("Someone will be here to speak with you shortly.");
  });
  $("#noAbuse").click(function() {
    alert("OK");
  });
});
