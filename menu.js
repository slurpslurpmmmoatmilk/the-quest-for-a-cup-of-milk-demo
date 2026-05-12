//the lil popup windows

function start() { 
	document.getElementById("main").style.display = "none";
	document.getElementById("startwindow").style.display = "grid";
}

function closestart() { 
	document.getElementById("main").style.display = "grid";
	document.getElementById("startwindow").style.display = "none";
}

function options() { 
	document.getElementById("main").style.display = "none";
	document.getElementById("optionswindow").style.display = "grid";
}

function closeoptions() { 
	document.getElementById("main").style.display = "grid";
	document.getElementById("optionswindow").style.display = "none";
}

function credits() { 
	document.getElementById("main").style.display = "none";
	document.getElementById("creditswindow").style.display = "grid";
}

function closecredits() { 
	document.getElementById("main").style.display = "grid";
	document.getElementById("creditswindow").style.display = "none";
}

function mystery() { 
	document.getElementById("main").style.display = "none";
	document.getElementById("mysterywindow").style.display = "grid";
}

function closemystery() { 
	document.getElementById("main").style.display = "grid";
	document.getElementById("mysterywindow").style.display = "none";
}