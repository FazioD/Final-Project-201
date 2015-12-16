//Global Scope Variables.
//DATE
var savedDate = $("#date");
//IN DANGER
var inDanger = false;
//NAME SECTION
var firstName = $("#firstName");
var lastName = $("#lastName");
var middleName = $("#middle");
var maidenName = $("#maiden");
//ADDRESS SECTION
var address1 = $("#address1");
var address2 = $("#address2");
var city = $("#city");
var state = $("#state");
var address = Number($("#zipCode"));
//CHILDREN SECTION
var children = false;
var childsFirst = $(".firstNames");
var childsSecond = $(".lastNames");
var childArray = [];
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
    inDanger = false;
    console.log("Client is not in immediate danger.");
    $("#alert").html("");
  });
});

//Inputs for Full Name Section in HTML is at this location.
//Input for Last Known Address in HTML is at this location.

// *************** CHILDREN SECTION: BOBBY **************** //
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
    } else {
      $("#hiddenKids").css("display", "none");
    }
  });
});

$(document).ready(function() {
    var max_fields = 10; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function(e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append("<div><label>First: </label><input type='text' name='mytext[]'><label>Last: </label><input type='text' name='mytext[]'></div></div>"); //add input box
        }
    });

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    });
});
//Adding event listener to submit children to childArray.
$(function() {
  $("#addChild").click(function() {
    childArray.push($(".childName"));
    console.log(childArray);
  });
});
// ***************END CHILDREN SECTION***************** //

//RADIO BUTTONS for "Are you in need of medical assistance."
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

//RADIO BUTTONS for the "Would you like to speak with one of our..."
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
