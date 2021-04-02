//custom function
function calculateTip() {
    //store the data of the inputs
	"use strict";
    var billamount = document.getElementById("billAmount").value, servicequality = document.getElementById("serviceQuality").value, numpeople = document.getElementById("totalpeople").value, total;
    
    //quick validation
    if (billamount === "" || servicequality === 0) {
        window.alert("Please enter the vaue !!!");
        return;//quit the function...
    }
    
    //chek to see this input is empty or less than or equal to 1
    if (numpeople === "" || numpeople <= 1) {
        numpeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
		document.getElementById("each").style.display = "block";
    }
    
    total = (billamount * servicequality) / numpeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    
    //display
    document.getElementById("totaltip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}



//hide the tip amount on load
document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

//clicking the button calls our custom function

document.getElementById("button").onclick = function () { "use strict"; calculateTip(); };
