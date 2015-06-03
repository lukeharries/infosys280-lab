function toggleLights() {
	
	var logo1src = document.getElementById("logo1img").src;
	var logo2src = document.getElementById("logo2img").src;
	
	if (logo1src.search("turnon.png") != "-1") {
		document.getElementById("logo1img").src = "images/turnoff.png";
	} else {
		document.getElementById("logo1img").src = "images/turnon.png";
	}
	
	if (logo2src.search("turnon.png") != "-1") {
		document.getElementById("logo2img").src = "images/turnoff.png";
	} else {
		document.getElementById("logo2img").src = "images/turnon.png";
	}
	
}


function changeFonts() {
	
	document.getElementById("button1").style.color = "green";
	document.getElementById("button2").style.color = "blue";
	document.getElementById("button3").style.color = "yellow";
	
	var allHeaders = document.getElementsByTagName("h1");
	
	for (i=0; i< allHeaders.length; i++) {
		allHeaders[i].style.fontFamily = "Verdana, Sans-Serif";
	}
	
	
}

function changeNavBar() {
	
	var mainNav = document.getElementById("mainnav");
	mainNav.style.width = "800px";
	mainNav.style.opacity = 0.75;
	
	
}



function checkFunc() {
	var checkForm = document.forms["frm1"];
	var foundBlank = 0;
	var foundNaN = 0;
				
	for (var i=0; i< (checkForm.length - 1); i++) {
		var thisElementValue = checkForm.elements[i].value;
		if (thisElementValue == "") {
			foundBlank = 1;
		}
		
		if (isNaN(thisElementValue)) {
			foundNaN = 1;
		}
	}
	
	if (foundBlank == 1) {
		alert("Inputs could not be blank");
	}
	
	if (foundNaN == 1) {
		alert("Inputs should be numbers");
	}
	
	// Test Expression if not blank + numbers
	
	if (!foundBlank && !foundNaN) {
		var num1 = checkForm.elements[0].value;
		var num2 = checkForm.elements[1].value;
		var num3 = checkForm.elements[2].value;
		
		var product = num1 * num2;

		var output = "";
		if (product > num3) {
			output = num1 + " * " + num2 + " > " + num3 + " is true!";
		} else {
			output = num1 + " * " + num2 + " > " + num3 + " is false!";
		}
		
		alert(output);
	}
	
}

function checkSqBox() {
	var checkForm = document.forms["frm2"];
	var foundBlank = 0;
	var foundNaN = 0;
	
	for (var i=0; i< (checkForm.length - 1); i++) {
		var thisElementValue = checkForm.elements[i].value;
		if (thisElementValue == "") {
			foundBlank = 1;
		}
		
		if (isNaN(thisElementValue)) {
			foundNaN = 1;
		}
	}
	
	if (foundBlank == 1) {
		alert("Inputs could not be blank");
	}
	
	if (foundNaN == 1) {
		alert("Inputs should be numbers");
	}
	
	// Now check Sums
	if (!foundBlank && !foundNaN) {
		//Rows
		var sums = []
		
		sums[0] = parseFloat(checkForm.elements[0].value) + parseFloat(checkForm.elements[1].value) + parseFloat(checkForm.elements[2].value); //r1
		sums[1] = parseFloat(checkForm.elements[3].value) + parseFloat(checkForm.elements[4].value) + parseFloat(checkForm.elements[5].value); //r2
		sums[2] = parseFloat(checkForm.elements[6].value) + parseFloat(checkForm.elements[7].value) + parseFloat(checkForm.elements[8].value); //r3

		//Cols
		sums[3] = parseFloat(checkForm.elements[0].value) + parseFloat(checkForm.elements[3].value) + parseFloat(checkForm.elements[6].value); //c1
		sums[4] = parseFloat(checkForm.elements[1].value) + parseFloat(checkForm.elements[4].value) + parseFloat(checkForm.elements[7].value); //c2
		sums[5] = parseFloat(checkForm.elements[2].value) + parseFloat(checkForm.elements[5].value) + parseFloat(checkForm.elements[8].value); //c3
		
		//Diags
		sums[6] = parseFloat(checkForm.elements[0].value) + parseFloat(checkForm.elements[4].value) + parseFloat(checkForm.elements[8].value); //diag1
		sums[7] = parseFloat(checkForm.elements[6].value) + parseFloat(checkForm.elements[4].value) + parseFloat(checkForm.elements[2].value); //diag2
		
		//Check that ALL sums agree (can just compare them to the first - if even one is different the whole thing is wrong)
		var foundMisMatch = 0;
		for (var j = 0; j < sums.length; j++) {
			if (sums[j] != sums[0]){
				foundMisMatch = 1;
			}
		}
		
		if (foundMisMatch == 1) {
			alert("Sums do not agree. Please try again.");
		} else {
			var resultP = document.getElementById("result");
			var newRes = "RESULT: " + sums[0];
			
			resultP.innerHTML = newRes;
		}
	}
	
}

