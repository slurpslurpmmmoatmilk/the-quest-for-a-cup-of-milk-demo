
//this changes the dialogue
//im sure theres a better way to do this but it is beyond me

function continue1() { 
	document.getElementById("text").innerHTML = "Your quest for what, you ask? Well, your quest to get to your job on time for once.";
	document.getElementById("continue1").disabled = true;
	document.getElementById("continue2").disabled = false;
}

function continue2() { 
	document.getElementById("text").innerHTML = "But before you go to work, you must fulfill your daily ritual of consuming a tall, white, calcium-infused glass of milk. This has been the way of things for approximately <strong>57</strong> days now, and who knows what will happen if you break that streak?";
	document.getElementById("continue2").disabled = true;
	document.getElementById("continue3").disabled = false;
}

function continue3() { 
	document.getElementById("text").innerHTML = "<b>I DO.</b>";
	document.getElementById("continue3").disabled = true;
	document.getElementById("continue4").disabled = false;
	document.getElementById("evil-filter").style.visibility = "visible";
}

function continue4() { 
	document.getElementById("text").innerHTML = "<b>DON'T YOU CROSS ME, MORTAL.</b>";
	document.getElementById("continue4").disabled = true;
	document.getElementById("continue5").disabled = false;
}

function continue5() { 
	document.getElementById("text").innerHTML = "The fridge, the natural habitat of the bagged milk, is just down the hall. In here, you will find your second-favourite liquid that you must consume to commence your journey.";
	document.getElementById("continue5").disabled = true;
	document.getElementById("evil-filter").style.visibility = "hidden";
	document.getElementById("choice1").style.display = "grid";
}

//opens menu
function openmenu() { 
	document.getElementById("menuwindow").style.display = "grid";
	document.getElementById("greyout").style.visibility = "visible";
}

function closemenu() { 
	document.getElementById("menuwindow").style.display = "none";
	document.getElementById("greyout").style.visibility = "hidden";
}