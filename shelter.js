//Global Scope Variables.
//DATE.
var savedDate = $("#date");
//IN DANGER.
var inDanger = false;
//NAME SECTION.
var firstName = $("#firstName");
var lastName = $("#lastName");
var middleName = $("#middle");
var maidenName = $("#maiden");
//ADDRESS SECTION.
var address1 = $("#address1");
var address2 = $("#address2");
var city = $("#city");
var state = $("#state");
var address = Number($("#zipCode"));
//CHILDREN SECTION.
var children = false;
var childsFirst = $(".firstNames");
var childsSecond = $(".lastNames");
//MEDICAL CARE
var medicalCare = false;
//SUBSTANCE ABUSE SECTION
var substanceAbuse = false;
//ADDITIONAL INFORMATION
var info = $("#textArea");

//Radio Button for finding out if the client is in danger.
$(function() {
  $("#yesDanger").click(function() {
    inDanger = true;
    console.log("Client is in danger, call 911");
    $("#alert").html("Call 911");
  });
  $("#noDanger").click(function() {
    console.log("Client is not in immediate danger.");
    inDanger = false;
  });
});

//Inputs for Full Name Section in HTML is at this location.
//Input for Last Known Address in HTML is at this location.

//RADIO BUTTONS for children section.
$(function() {
  $("#yesKids").click(function() {
    console.log("Client has children.");
    children = true;
  });
  $("#noKids").click(function() {
    console.log("Client doesn not have children.");
    children = false;
  });
});
//INCLUDE ADDING NEW CHILDREN FUNCTION HERE.
$(function() {
  $("#kids [type=radio]").click(function() {
    if (children) {
      $("#hiddenKids").css("display", "inline");
    }
  });
});
$(function() {
  $("#kids [type=radio]").click(function() {
    if (children === false) {
      $("#hiddenKids").css("display", "none");
    }
  });
});

//RADIO BUTTONS for the "Are you in need of medical assistance."
$(function() {
  $("#yesCare").click(function() {
    console.log("Client needs medical care.");
    medicalCare = true;
  });
  $("#noCare").click(function() {
    console.log("Client does not need medical care.");
    medicalCare = false;
  });
});

//RADIO BUTTONS for the ? "Would you like to speak with one of our..."
$(function() {
  $("#yesAbuse").click(function() {
    console.log("Client is seeking assistance with substance abuse.");
    substanceAbuse = true;
  });
  $("#noAbuse").click(function() {
    console.log("Client does not need assistance with substance abuse.");
    substanceAbuse = false;
  });
});

//Submit Button Event Listener
var newSubmitButton = document.getElementById("add-new-submit");
newShopButton.addEventListener("click", handelSubmit);

//$(function() {
//this replaces document.ready

//write a function that takes argument like elements collecting info
//second argument what is done with the info, or specify info
//call function with jquery variables as parameters for arguments

