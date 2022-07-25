function changeBackgroundColor() {
	
	if (document.body.style.backgroundColor == "blue") {
		document.body.style.backgroundColor="red";
		document.getElementById("sekaiSwitch").innerHTML = "Switch to the School Sekai";
	}
	else if (document.body.style.backgroundColor != "blue"){
		document.body.style.backgroundColor = "blue";
		document.getElementById("sekaiSwitch").innerHTML = "Switch to the Street Sekai";
	}

	//document.getElementById("sekaiSwitch").innerHTML = "Switch to the Street Sekai";
		
}