//changes the script/dialogue


function choice1() { 
	document.getElementById("text").innerHTML = "The fridge appears to be locked. A large padlock with a two digit combination holds the fridge doors shut.";
	document.getElementById("continue1").disabled = false;
	document.getElementById("choice1").style.display = "none";
}

function continue1() { 
	document.getElementById("text").innerHTML = "It’s all coming back to you now: after repeatedly forgetting to close your fridge time and time again, after every midnight snack you snuck, you knew you had to protect your one and only fridge through more secure measures against your greatest enemy: <b>yourself</b>.";
	document.getElementById("continue1").disabled = true;
	document.getElementById("continue2").disabled = false;
}

function continue2() { 
	document.getElementById("text").innerHTML = "Unfortunately, this lock has often proved to be too effective, as you yourself have forgotten the passcode. Though your cupboard remains lock-free, you still believe yourself to be above cupboard milk.";
	document.getElementById("continue2").disabled = true;
	document.getElementById("continue3").disabled = false;
}

function continue3() { 
	document.getElementById("text").innerHTML = "You distinctly remember writing the two-digit code down on a paper somewhere, though you’re unsure where exactly you put it. A few places still come to mind.";
	document.getElementById("continue3").disabled = true;
	document.getElementById("choice2").style.display = "grid";
	document.getElementById("choice3").style.display = "grid";
	document.getElementById("choice4").style.display = "grid";
	document.getElementById("choice5").style.display = "grid";
}
	
function choice2() { 
	document.getElementById("text").innerHTML = "Despite your valiant efforts, the fridge still remains locked.";
	document.getElementById("choice2").style.display = "none";
	document.getElementById("choice3").style.display = "none";
	document.getElementById("choice4").style.display = "none";
	document.getElementById("choice5").style.display = "none";
	document.getElementById("choice8").style.display = "none";
	document.getElementById("choice2").disabled = true;
	document.getElementById("continue6").disabled = false;
}
	
function choice3() { 
	document.getElementById("text").innerHTML = "You look down.";
	document.getElementById("choice2").style.display = "none";
	document.getElementById("choice3").style.display = "none";
	document.getElementById("choice4").style.display = "none";
	document.getElementById("choice5").style.display = "none";
	document.getElementById("choice8").style.display = "none";
	document.getElementById("choice3").disabled = true;
	document.getElementById("continue4").disabled = false;
}

function continue4() { 
	document.getElementById("text").innerHTML = "You appear to be lacking any pantaloons.";
	document.getElementById("continue4").disabled = true;
	document.getElementById("continue5").disabled = false;
}

function continue5() { 
	document.getElementById("text").innerHTML = "It will remain this way for the rest of the game and there is nothing you can do about it.";
	document.getElementById("continue5").disabled = true;
	document.getElementById("choice6").style.display = "grid";
}

function choice4() { 
	document.getElementById("text").innerHTML = "You open up your purse. The air is instantly filled with the fragrant scent of an abandoned egg salad sandwich.";
	document.getElementById("choice2").style.display = "none";
	document.getElementById("choice3").style.display = "none";
	document.getElementById("choice4").style.display = "none";
	document.getElementById("choice5").style.display = "none";
	document.getElementById("choice8").style.display = "none";
	document.getElementById("choice7").style.display = "grid";
	document.getElementById("choice4").disabled = true;
}

function choice7() {
	document.getElementById("text").innerHTML = "And that is where it shall remain. You close your purse back up to leave your little mold colony in peace.";
	document.getElementById("choice7").style.display = "none";
	document.getElementById("continue6").disabled = false;
}

function choice5() { 
	document.getElementById("text").innerHTML = "You open your wallet to find many interesting pictures that you had long forgotten about. The pictures are simply too... special to be described in words. Unfortunately, your wallet lacks any passcodes and any money.";
	document.getElementById("choice2").style.display = "none";
	document.getElementById("choice3").style.display = "none";
	document.getElementById("choice4").style.display = "none";
	document.getElementById("choice5").style.display = "none";
	document.getElementById("choice8").style.display = "none";
	document.getElementById("choice5").disabled = true;
	document.getElementById("continue6").disabled = false;
}
	
function continue6() { 
	document.getElementById("text").innerHTML = "Is there anywhere else you would like to look?";
	document.getElementById("choice2").style.display = "grid";
	document.getElementById("choice3").style.display = "grid";
	document.getElementById("choice4").style.display = "grid";
	document.getElementById("choice5").style.display = "grid";
	document.getElementById("choice8").style.display = "grid";
	document.getElementById("choice6").style.display = "none";
	document.getElementById("continue6").disabled = true;
}

function choice8() { 
	document.getElementById("text").innerHTML = "You are now positive that you’ve checked every possible location where your passcode could have been written down. Sadly, you will have to start the day milkless.";
	document.getElementById("choice2").style.display = "none";
	document.getElementById("choice3").style.display = "none";
	document.getElementById("choice4").style.display = "none";
	document.getElementById("choice5").style.display = "none";
	document.getElementById("choice8").style.display = "none";
	document.getElementById("choice9").style.display = "grid";
}

function choice9() { 
	document.getElementById("text").innerHTML = "I’m afraid so.";
	document.getElementById("choice9").style.display = "none";
	document.getElementById("choice10").style.display = "grid";
}

function choice10() { 
	document.getElementById("text").innerHTML = "I mean, it’s possible, but is it really worth the time? Don’t you want to get to your job on time for once? Impress your boss?";
	document.getElementById("choice10").style.display = "none";
	document.getElementById("choice11").style.display = "grid";
	document.getElementById("choice12").style.display = "grid";
}

function choice11() { 
	document.getElementById("text").innerHTML = "That’s the attitude! Maybe you’ll get that raise if you keep this up! And who knows, there just might be a crisp carton of milk you could get at your work’s cafeteria!";
	document.getElementById("choice11").style.display = "none";
	document.getElementById("choice12").style.display = "none";
	document.getElementById("choice13").style.display = "grid";
}

function choice12() { 
	document.getElementById("text").innerHTML = "<b>I'M AFRAID YOU DON'T HAVE A CHOICE.</b>";
	document.getElementById("choice11").style.display = "none";
	document.getElementById("choice12").style.display = "none";
	document.getElementById("choice17").style.display = "grid";
	document.getElementById("evil-filter").style.visibility = "visible";
}

function choice13() { 
	document.getElementById("text").innerHTML = "Great question! I’m sure HR will be happy to answer it!";
	document.getElementById("choice13").style.display = "none";
	document.getElementById("choice14").style.display = "grid";
}

function choice14() { 
	document.getElementById("text").innerHTML = "Sounds like you’re ready to go! Do you know the way to work?";
	document.getElementById("choice14").style.display = "none";
	document.getElementById("choice15").style.display = "grid";
	document.getElementById("choice16").style.display = "grid";
}

function choice15() { 
	document.getElementById("text").innerHTML = "Great! Let's go!";
	document.getElementById("choice15").style.display = "none";
	document.getElementById("choice16").style.display = "none";
	document.getElementById("choice18").style.display = "grid";
}

function choice16() { 
	document.getElementById("text").innerHTML = "Me neither! Let's go!";
	document.getElementById("choice15").style.display = "none";
	document.getElementById("choice16").style.display = "none";
	document.getElementById("choice18").style.display = "grid";
}

function choice17() { 
	document.getElementById("text").innerHTML = "<b>:)</b>";
	document.getElementById("choice17").style.display = "none";
	document.getElementById("continue7").disabled = false;
}

function continue7() { 
	document.getElementById("text").innerHTML = "Get out. You will not be late again.";
	document.getElementById("finish").style.display = "grid";
	document.getElementById("continue7").disabled = true;
	document.getElementById("evil-filter").style.visibility = "hidden";
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


//returns to menu upon completion

function finish() {
	document.getElementById("finishwindow").style.display = "grid";
	document.getElementById("greyout").style.visibility = "visible";
}

function closefinish() { 
	document.getElementById("finishwindow").style.display = "none";
	document.getElementById("greyout").style.visibility = "hidden";
}