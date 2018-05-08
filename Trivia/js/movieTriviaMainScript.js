// JavaScript Document for Movie Trivia Main Index Page
// handle the form submit event 


function runWinnerGraphics(){
	"use strict";
	alert("Your Super ROCK \n Yout Beat the Entire Game \n Click Ok to start Again!!!!!");
	sessionStorage.setItem('unlockLevel', '1');
}


function preparePage(){
	
	
"use strict";
	var mainDiv = document.getElementById("triviaGameMainDiv");
	mainDiv.style.width = "600px";
	mainDiv.style.height = "600px";
	mainDiv.style.margin =  "2% auto 6% auto";
	mainDiv.style.backgroundColor = "transparent"; // option: "cornflowerblue" or "#FF9500"
	mainDiv.style.padding = "20px 20px 20px 20px";
	
	
	//creating headng container
	var titleDiv = document.createElement("div");
	titleDiv.setAttribute("id","headingDiv");
	titleDiv.style.backgroundColor = "#ff9500"; // option: "cornflowerblue" or "#FF9500"
	titleDiv.style.width = "100%";
	titleDiv.style.height = "80px";
	titleDiv.style.border = "5px solid hidden";
	titleDiv.style.margin =  "-1% -0% 2% -2.5%";
	titleDiv.style.padding = "1% 2.5% 4% 2.5%";
	mainDiv.appendChild(titleDiv);
	
	var title = document.createElement("p");
	title.innerHTML = "Movie Trivia Game";
	title.style.margin = "0 0 0 0";
	title.style.textAlign = "center";
	title.style.fontSize = "4.5em";
	title.style.fontWeight= "100";
	title.style.fontFamily= "impact";
	titleDiv.appendChild(title);
	
	
	
	
	
	
	
	
	
	
	//DEPRICATED VERSION OF STYLES CHANGED ON THE LAST DAY
	/*
	"use strict";
	var mainDiv = document.getElementById("triviaGameMainDiv");
	mainDiv.style.width = "800px";
	mainDiv.style.height = "800px";
	mainDiv.style.margin =  "6% auto";
	mainDiv.style.backgroundColor = "cornflowerblue"; // option: "cornflowerblue" or "#FF9500"
	mainDiv.style.padding = "20px 20px 20px 20px";
	mainDiv.style.border = "25px solid black";
	
	//creating headng container
	var titleDiv = document.createElement("div");
	titleDiv.setAttribute("id","headingDiv");
	titleDiv.style.backgroundColor = "#FF9500"; // option: "cornflowerblue" or "#FF9500"
	titleDiv.style.width = "100%";
	titleDiv.style.height = "40px";
	titleDiv.style.border = "5px solid hidden";
	titleDiv.style.margin =  "-1% -0% 2% -2.5%";
	titleDiv.style.padding = "0% 2.5% 3% 2.5%";
	mainDiv.appendChild(titleDiv);
	
	var title = document.createElement("p");
	title.innerHTML = "Movie Trivia Game";
	title.style.margin = "0 0 0 0";
	title.style.textAlign = "center";
	title.style.fontSize = "3.5em";
	title.style.fontWeight= "bold";
	titleDiv.appendChild(title);
	*/
	///////creatng the div's for the upper section with "# OF CORRECT" and "QUESTION #" sections
	

	///////creatng the div's for the middle section with "QUESTION BOX" and "DROPPABLE AWNSER BOX" and "HANGMAN VISUAL BOX" and "AWNSER CONFIRMATION BOX" sections
	var middleDiv = document.createElement("div");
	middleDiv.setAttribute("id","middleDiv");
	middleDiv.style.margin =  "auto";
	middleDiv.style.width = "100%";
	middleDiv.style.height = "90%";
	//middleDiv.style.border = "5px solid green";
	middleDiv.style.zIndex = "0";
	mainDiv.appendChild(middleDiv);
	
	//// creating BUTTONS for each individual game
	var levelONEButton = document.createElement("button");
	levelONEButton.setAttribute("disabled","false");
	levelONEButton.setAttribute("id","levelONEButton");
	levelONEButton.innerHTML = "2000's Movie Trivia";
	levelONEButton.style.width = "90%";
	//levelONEButton.style.height = "30%";
	levelONEButton.style.border = "5px solid hidden";
	levelONEButton.style.margin =  " 5% auto";
	levelONEButton.style.display = "block";
	levelONEButton.style.zIndex = "0";
	levelONEButton.onclick = function(){
		location.href = "trivia2000s/multichoiceIndex.html";
	};
	middleDiv.appendChild(levelONEButton);
	
	var levelTWOButton = document.createElement("button");
	levelTWOButton.setAttribute("id","levelTWOButton");
	
	//ADDED AFTER WEEK 10 CLASS
	levelTWOButton.setAttribute("disabled","true");
	levelTWOButton.style.opacity = ".75";
	
	levelTWOButton.innerHTML = "90's Movie Trivia";
	levelTWOButton.style.width = "90%";
	//levelTWOButton.style.height = "30%";
	levelTWOButton.style.margin =  " 5% auto";
	levelTWOButton.style.display = "block";
	levelTWOButton.style.zIndex = "0";
	levelTWOButton.onclick = function(){
		location.href = "trivia90s/level2.html";
	};
	middleDiv.appendChild(levelTWOButton);
	
	var levelTHREEButton = document.createElement("button");
	levelTHREEButton.setAttribute("id","levelTHREEButton");
	
	//ADDED AFTER WEEK 10 CLASS
	levelTHREEButton.setAttribute("disabled","true");
	levelTHREEButton.style.opacity = ".75";
	
	levelTHREEButton.innerHTML = "80's Movie Trivia";
	levelTHREEButton.style.width = "90%";
	//levelTHREEButton.style.height = "30%";
	levelTHREEButton.style.margin =  " 5% auto";
	levelTHREEButton.style.display = "block";
	levelTHREEButton.style.zIndex = "0";
	levelTHREEButton.onclick = function(){
		location.href = "hangmanIndex.html";
	};
	middleDiv.appendChild(levelTHREEButton);
	
	var levelFOURButton = document.createElement("button");
	levelFOURButton.setAttribute("id","levelFOURButton");
	
	//ADDED AFTER WEEK 10 CLASS
	levelFOURButton.setAttribute("disabled","true");
	levelFOURButton.style.opacity = ".75";
	
	levelFOURButton.innerHTML = "70's Movie Trivia";
	levelFOURButton.style.width = "90%";
	//levelFOURButton.style.height = "30%";
	levelFOURButton.style.margin =  " 5% auto";
	levelFOURButton.style.display = "block";
	levelFOURButton.style.zIndex = "0";
	levelFOURButton.onclick = function(){
		location.href = "trivia70s/index.html";
	};
	middleDiv.appendChild(levelFOURButton);
	
	//Code which unlock the next level when you complete the previos one
	var unlockLevelsUpToo = parseInt(sessionStorage.unlockLevel);
	
	if(unlockLevelsUpToo === 1){
		levelONEButton.disabled = false;
		levelONEButton.style.opacity = "";
		levelTWOButton.disabled = true;
		levelTWOButton.style.opacity = ".75";
		levelTHREEButton.disabled = true;
		levelTHREEButton.style.opacity = ".75";
		levelFOURButton.disabled = true;
		levelFOURButton.style.opacity = ".75";
	}
	else if(unlockLevelsUpToo === 2){
		levelONEButton.disabled = false;
		levelONEButton.style.opacity = "";
		levelTWOButton.disabled = false;
		levelTWOButton.style.opacity = "";
		levelTHREEButton.disabled = true;
		levelTHREEButton.style.opacity = ".75";
		levelFOURButton.disabled = true;
		levelFOURButton.style.opacity = ".75";
	}
	else if(unlockLevelsUpToo === 3){
		levelONEButton.disabled = false;
		levelONEButton.style.opacity = "";
		levelTWOButton.disabled = false;
		levelTWOButton.style.opacity = "";
		levelTHREEButton.disabled = false;
		levelTHREEButton.style.opacity = "";
		levelFOURButton.disabled = true;
		levelFOURButton.style.opacity = ".75";
	}
	else if(unlockLevelsUpToo === 4){
		levelONEButton.disabled = false;
		levelONEButton.style.opacity = "";
		levelTWOButton.disabled = false;
		levelTWOButton.style.opacity = "";
		levelTHREEButton.disabled = false;
		levelTHREEButton.style.opacity = "";
		levelFOURButton.disabled = false;
		levelFOURButton.style.opacity = "";
	}
	else if(unlockLevelsUpToo === 5){
		levelONEButton.disabled = false;
		levelONEButton.style.opacity = "";
		levelTWOButton.disabled = false;
		levelTWOButton.style.opacity = "";
		levelTHREEButton.disabled = false;
		levelTHREEButton.style.opacity = "";
		levelFOURButton.disabled = false;
		levelFOURButton.style.opacity = "";
		runWinnerGraphics();
	}
	else{
		levelONEButton.disabled = false;
		levelONEButton.style.opacity = "";
	}
	
	
}



/*
// code for disabling and enabling buttons when levels are completed
// this code will enable button TWO 
$(#levelTWOButton).disabled = false;



*/



window.onload = function(){
	"use strict";
	preparePage(); 
	//alert(sessionStorage.unlockLevel);
};
