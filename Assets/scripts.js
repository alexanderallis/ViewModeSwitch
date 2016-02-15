

var One = document.getElementById("divOne");
var Two = document.getElementById("divTwo");
var buttonOne = document.getElementById("clickOne");
var buttonTwo = document.getElementById("clickTwo");

// var toggleValue = document.getElementById("block");
//
// var addButton = document.getElementById("addButton");
// var addButtonTwo = document.getElementById("addButtonTwo");

var myCheckbox = document.getElementById("block");
myCheckbox.onchange = function() {
  One.style.display = "block";
  Two.style.display = "none";
  console.log("My Checkbox is now " + myCheckbox.checked + "!");
}

var myCheckbox2 = document.getElementById("list");
myCheckbox2.onchange = function() {
  One.style.display = "none";
  Two.style.display = "block";
  console.log("My Checkbox is now " + myCheckbox2.checked + "!");
}

// if(buttonOne.onClick === true)
// {
//    console.log("button was clicked");
// };

// var radios = document.getElementsByName("list");
//
// for (var i = 0, length = radios.length; i < length; i++) {
//     if (radios[i].checked) {
//       One.style.display = "none";
//       Two.style.display = "block";
//         // do whatever you want with the checked radio
//         alert(radios[i].value);
//     }
//     else{
//       One.style.display = "block";
//       Two.style.display = "none";
//     }
// };
  //
  //
  // buttonOne.addEventListener("click", function() {
  //
  //     One.style.display = "none";
  //     Two.style.display = "block";
  //     // buttonOne.style.color = "#47A3DA";
  //     // buttonTwo.style.color = "lightgrey";
  //
  // });
  //
  // buttonTwo.addEventListener("click", function() {
  //
  //     One.style.display = "block";
  //     Two.style.display = "none";
  //     // buttonOne.style.color = "lightgrey";
  //     // buttonTwo.style.color = "#47A3DA";
  //
  // });

// buttonOne.addEventListener("mouseover", function() {
//
//     buttonOne.style.color = "#47A3DA";
//     buttonTwo.style.color = "#47A3DA";
// });
