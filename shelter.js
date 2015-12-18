//Global Scope Variables.
//DATE
var savedDate = $("#date");
//IN DANGER
var inDanger = false;
//MEDICAL CARE
var medicalCare = false;
//SUBSTANCE ABUSE SECTION
var substanceAbuse = false;
//ADDITIONAL INFORMATION
var info = $("#textArea");
//CHILDREN ARRAY
var childArray = [];

//CREATING OBJECTS//
// ******NAME OBJECT******* //
var nameObject = {firstName:$("#firstName"), lastName:$("#lastName"), middleName:$("#middleName"), maidenName:$("#maiden")};
//*******ADDRESS OBJECT********//
var addressObject = {address1:$("#address1"), address2:$("#address2"), city:$("city"), state:$("state"), address:Number($("#zipCode"))};
//***********CHILDREN OBJECT*********//
var childrenObject = {children:false, childsFirst:$(".firstNames"), childsSecond:$(".lastNames")};

//Radio Button for finding out if the client is in danger.
$(function() {
  $("#yesDanger").click(function() {
    inDanger = true;
    console.log("Client is in danger, call 911");
    $("#alert").html("Call 911 immediately");
  });
  $("#noDanger").click(function() {
    inDanger = false;
    console.log("Client is not in immediate danger.");
    $("#alert").html("");
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
    } else {
      $("#hiddenKids").css("display", "none");
    }
  });
});

//Writes new data and input forms.
var x = 0;
$(document).ready(function() {
    var max_fields = 5; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID

    x = 1; //initlal text box count
    $(add_button).click(function(e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append("<div id='kids'><label >First: </label><input type='text' class='childFirstName' name='mytext[]'><label> Last: </label><input type='text'  class='childLastName' name='mytext[]'><a href='#' class='remove_field'> REMOVE</a></div>"); //add input box
        }
    });

    $(wrapper).on("click",".remove_field", function(e) { //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    });
});

//Adding event listener to submit children to childArray.
$(function() {
  $("#addChild").on("click", function(e) {
    e.preventDefault();

    var childFirstName = $(".childFirstName");
    console.log(childFirstName.length);
    //childFirstName.forEach(function(x) {console.log(x)})
    var childLastName = $(".childLastName");
    //open for loop
    //console.log('CHILDFIRSTNAME', childFirstName);

    for (var i = 0; i < childFirstName.length; i++) {
      var firstName = childFirstName[i].value;
      var lastName = childLastName[i].value;
      var childFullName = firstName + " " + lastName;
      childArray.push(childFullName);
    }

    console.log(childArray);

  });
});

//Displays child name results in table when submit is clicked
$(function() {
  var table = $("#childTable");
  $("#addChild").click(function(e) {
    $("#kidResults").css("display", "inline");
    e.preventDefault();
    for (var i = 0; i < childArray.length; i++) {
      $(table).append(childArray[i] + " " + "</br>");
    }
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
