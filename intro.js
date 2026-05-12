
//this changes the dialogue
//im sure theres a better way to do this but it is beyond me

function continue1() {
document.getElementById("continue1").disabled = true;
document.getElementById("text").innerHTML = "Welcome, dear gamer.";
document.getElementById("continue2").disabled = false;
}

function continue2() { 
	document.getElementById("text").innerHTML = "Behold: this is <strong>you</strong>.";
	document.getElementById("continue2").disabled = true;
	document.getElementById("continue3").disabled = false;
	document.getElementById("intro1").style.display = "grid"; //1st slide is revealed here
}

function continue3() { 
	document.getElementById("text").innerHTML = "You are a <strong>pillah</strong>, a beautiful creature both simple and divine.";
	document.getElementById("continue3").disabled = true;
	document.getElementById("continue4").disabled = false;
}

function continue4() { 
	document.getElementById("text").innerHTML = "Technically, your name is <strong>Wigglems</strong>, but this does not matter, for your name, as a pillah, is simply your own. Heed this name, for this is the last time you will ever hear it.";
	document.getElementById("continue4").disabled = true;
	document.getElementById("continue5").disabled = false;
}

function continue5() { 
	document.getElementById("text").innerHTML = "Like most pillahs, you work for <strong>Sandstone Society</strong>, where your job is simple: you must chew on small rocks with your sharp pillah teeth until they turn into sand.";
	document.getElementById("continue5").disabled = true;
	document.getElementById("continue6").disabled = false;
	document.getElementById("intro1").style.display = "none";
	document.getElementById("intro2").style.display = "grid";
}

function continue6() { 
	document.getElementById("text").innerHTML = "The sand you make is supplied to <strong>Krab Korporation</strong>, a sister company where all <strong>krabs</strong> work. In return, they lovingly grow plants for the pillahs using their plentiful sources of water.";
	document.getElementById("continue6").disabled = true;
	document.getElementById("continue7").disabled = false;
	document.getElementById("intro2").style.display = "none";
	document.getElementById("intro3").style.display = "grid";
}

function continue7() { 
	document.getElementById("text").innerHTML = "In a day and age where everything has been industrialised and all things natural are far off and few, pillahs and krabs find that they can feel more comfortable if they work in an environment that brings them closer to their roots.";
	document.getElementById("continue7").disabled = true;
	document.getElementById("continue8").disabled = false;
}

function continue8() { 
	document.getElementById("text").innerHTML = "Pillahs and krabs decided to team up ages ago, using their individual skillsets and resources to supply items of familiarity to each other as they grow increasingly scarce around the world.";
	document.getElementById("continue8").disabled = true;
	document.getElementById("continue9").disabled = false;
	document.getElementById("intro3").style.display = "none";
}

function continue9() { 
	document.getElementById("text").innerHTML = "This is how Sandstone Society and Krab Korporation were born. Since then, many new companies have opened up around the world to supply natural resources to those in need.";
	document.getElementById("continue9").disabled = true;
	document.getElementById("continue10").disabled = false;
}

function continue10() { 
	document.getElementById("text").innerHTML = "This has been the way of things for many years, and this will continue to be the way of things for many more.";
	document.getElementById("continue10").disabled = true;
	document.getElementById("continue11").disabled = false;
}

function continue11() { 
	document.getElementById("text").innerHTML = "<b>Or will it?</b>";
	document.getElementById("continue11").disabled = true;
	document.getElementById("continue12").disabled = false;
	document.getElementById("evil-filter").style.visibility = "visible";
}

function continue12() { 
	document.getElementById("text").innerHTML = "<b>The fate of the world rests in your little pillah hands.</b>";
	document.getElementById("continue12").disabled = true;
	document.getElementById("continue13").disabled = false;
}

function continue13() { 
	document.getElementById("text").innerHTML = "<b>Good luck :)</b>";
	document.getElementById("continue13").disabled = true;
	document.getElementById("enter").style.display = "grid"; //links to 1st area
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
