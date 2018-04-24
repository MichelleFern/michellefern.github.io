// Javascripts Document for hangmanIndex.html
// handle the form submit event

function questions(img,id,question){
	        "use strict";
			this.Image = img;
			this.Id = id;
			this.Question = question;
		}
		
var questionBankArray = [];
	//INITIAL Batch
	 questionBankArray[0] = new questions("img/backToTheFuture.jpg","backToTheFuture","Marty traveling in a DeLorean");
	 questionBankArray[1] = new questions("img/crocodileDundee.jpg","crocodileDundee","Dude from the outback in the big city ");
	 questionBankArray[2] = new questions("img/ferrisBueller.jpg","ferrisBueller","A Guy skipping school");
	 questionBankArray[3] = new questions("img/ghostBusters.jpg","ghostBusters","Slime, slime and even more slime");
	 questionBankArray[4] = new questions("img/goonies.jpg","goonies","An old pirate ship");
	 questionBankArray[5] = new questions("img/indianaJones.jpg","indianaJones","A man who carries a whip");
	 
	 //SECOND Batch
	 questionBankArray[6] = new questions("img/bluesBrothers.jpg","bluesBrothers","Two guys with black suits and sunglasses");
	 questionBankArray[7] = new questions("img/dieHard1.jpg","dieHard","A guy in an airport during the holidays");
	 questionBankArray[8] = new questions("img/gremlins.jpg","gremlins","little green goblin things");
	 questionBankArray[9] = new questions("img/katateKid.jpg","katateKid","A boy pianting fence boards");
	 questionBankArray[10] = new questions("img/rambo.jpg","rambo","A military man with big guns");
	 questionBankArray[11] = new questions("img/topGun.jpg","topGun","A pilot with lady issues");
	//Third Batch
	 questionBankArray[12] = new questions("img/footLoose.jpg","footLoose","People dancing ALOT");
	 questionBankArray[13] = new questions("img/madMax.jpg","madMax","End of the world theme");
	 questionBankArray[14] = new questions("img/nationalLampoons.jpg","nationalLampoons","Lots of college dorm partying");
	 questionBankArray[15] = new questions("img/nightmareElmStreet.jpg","nightmareElmStreet","F***ed-up dreams");
	 questionBankArray[16] = new questions("img/roadHouse.jpg","roadHouse","A bad-A$$ bar bouncer");
		
	 //Fourth Batch
	 questionBankArray[17] = new questions("img/standByMe.jpg","standByMe","Kids who find a dead body");
	 questionBankArray[18] = new questions("img/starWars.jpg","starWars","Lightsaver fight scenes");
	 questionBankArray[19] = new questions("img/terminator.jpg","terminator","A killing machine from the future");

var currentQuestionHolder = new questions();
	 
function chooseQuestion(){
	"use strict";
	var randomIndexFromArray = Math.floor(Math.random()*questionBankArray.length);
	return randomIndexFromArray;
}	 

function preparePage(){
	
	"use strict";
	var mainDiv = document.getElementById("mainDiv");
	mainDiv.style.width = "800px";
	mainDiv.style.margin =  "6% auto";
	mainDiv.style.backgroundColor = "hsla(219,91%,59%,.7)"; // option: "cornflowerblue" or "#FF9500"
	mainDiv.style.padding = "20px 20px 20px 20px";
	mainDiv.style.border = "10px solid #0004ff";
	mainDiv.style.boxShadow = "0px 0px 10px 10px #FFF";
	
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
	title.innerHTML = "80's Movie Trivia Hangman";
	title.style.margin = "0 0 0 0";
	title.style.textAlign = "center";
	title.style.fontSize = "3.5em";
	title.style.fontWeight= "bold";
	titleDiv.appendChild(title);
	
	///////creatng the div's for the upper section with "# OF CORRECT" and "QUESTION #" sections
	var upperDiv = document.createElement("div");
	upperDiv.setAttribute("id","upperDiv");
	upperDiv.style.width = "100%";
	upperDiv.style.height = "40px";
	upperDiv.style.border = "5px solid hidden";
	mainDiv.appendChild(upperDiv);
	
	// creating QUESTION # CONTAINER
	var questionNumContainer = document.createElement("div");
	questionNumContainer.setAttribute("id","questionNumContainer");
	questionNumContainer.style.width = "48.75%";
	questionNumContainer.style.height = "76%";
	questionNumContainer.style.border = "5px solid hidden";
	questionNumContainer.style.cssFloat = "left";
	upperDiv.appendChild(questionNumContainer);
	
	// creating Question Number content
	var questionNumberPreText = document.createElement("p");
	questionNumberPreText.innerHTML = "Current Question Number is ";
	questionNumberPreText.style.fontSize = "1em";
	questionNumberPreText.style.fontWeight = "bold";
	questionNumberPreText.style.margin = "1% 0 0 10%";
	questionNumberPreText.style.cssFloat = "left";
	questionNumContainer.appendChild(questionNumberPreText);
	
	var questionNumberNumBox = document.createElement("input");
	questionNumberNumBox.setAttribute("id", "currentQuestionNumber");
	questionNumberNumBox.setAttribute("size", "2");
	questionNumberNumBox.style.textAlign = "center";
	questionNumberNumBox.style.fontSize = "1em";
	questionNumberNumBox.style.margin = "0% 2% 0 2%";
	questionNumberNumBox.style.cssFloat = "left";
	questionNumContainer.appendChild(questionNumberNumBox);
	
	
	
	// creating # OF CORRECT CONTAINER
	var numOfCorrectContainer = document.createElement("div");
	numOfCorrectContainer.setAttribute("id","numOfCorrectContainer");
	numOfCorrectContainer.style.width = "48.75%";
	numOfCorrectContainer.style.height = "76%";
	numOfCorrectContainer.style.border = "5px solid hidden";
	numOfCorrectContainer.style.cssFloat = "right";
	upperDiv.appendChild(numOfCorrectContainer);
	
	// creating NUMBER OF CORRECT content
	var numberOfCorrectPreText = document.createElement("p");
	numberOfCorrectPreText.innerHTML = "Number of Correct Answers is ";
	numberOfCorrectPreText.style.fontSize = "1em";
	numberOfCorrectPreText.style.fontWeight = "bold";
	numberOfCorrectPreText.style.margin = "1% 0 0 -3%";
	numberOfCorrectPreText.style.cssFloat = "left";
	numOfCorrectContainer.appendChild(numberOfCorrectPreText);
	
	var numberOfCorrectNumBox = document.createElement("input");
	numberOfCorrectNumBox.setAttribute("id", "numberOfCorrect");
	numberOfCorrectNumBox.setAttribute("size", "2");
	numberOfCorrectNumBox.style.textAlign = "center";
	numberOfCorrectNumBox.style.fontSize = "1em";
	numberOfCorrectNumBox.style.margin = "0% 2% 0 2%";
	numberOfCorrectNumBox.style.cssFloat = "left";
	numOfCorrectContainer.appendChild(numberOfCorrectNumBox);
	
	var numberOfCorrectPostText = document.createElement("p");
	numberOfCorrectPostText.innerHTML = " Out of 15";
	numberOfCorrectPostText.style.fontSize = "1em";
	numberOfCorrectPostText.style.fontWeight = "bold";
	numberOfCorrectPostText.style.margin = "1% 0 0 0";
	numberOfCorrectPostText.style.textAlign = "left-center";
	numberOfCorrectPostText.style.cssFloat = "left";
	numOfCorrectContainer.appendChild(numberOfCorrectPostText);

	///////creatng the div's for the middle section with "QUESTION BOX" and "DROPPABLE AWNSER BOX" and "HANGMAN VISUAL BOX" and "AWNSER CONFIRMATION BOX" sections
	var middleDiv = document.createElement("div");
	middleDiv.setAttribute("id","middleDiv");
	middleDiv.style.margin =  "-5% 0 -3% 0";
	middleDiv.style.width = "100%";
	middleDiv.style.height = "600px";
	middleDiv.style.border = "5px solid hidden";
	middleDiv.style.zIndex = "0";
	mainDiv.appendChild(middleDiv);
	
	//// creating QUESTION BOX and DROPPABLE AWNSER BOX CONTAINER
	var questionAndDroppableAwnserContainer = document.createElement("div");
	questionAndDroppableAwnserContainer.setAttribute("id","questionAndDroppableAwnserContainer");
	questionAndDroppableAwnserContainer.style.width = "40%";
	questionAndDroppableAwnserContainer.style.height = "98.5%";
	questionAndDroppableAwnserContainer.style.margin =  "0 0 0 2%";
	questionAndDroppableAwnserContainer.style.border = "5px solid hidden";
	questionAndDroppableAwnserContainer.style.cssFloat = "left";
	questionAndDroppableAwnserContainer.style.zIndex = "0";
	middleDiv.appendChild(questionAndDroppableAwnserContainer);
	
	//creating QUESTION BOX container
	var questionBoxContianer = document.createElement("div");
	questionBoxContianer.setAttribute("id","questionBoxContianer");
	questionBoxContianer.style.width = "87.5%";
	questionBoxContianer.style.height = "59%";
	questionBoxContianer.style.border = "6px double black";
	questionBoxContianer.style.padding = "-0% -0% -0% -0%";
	questionBoxContianer.style.margin = "2% 4% 0% 3%";
	questionBoxContianer.style.cssFloat = "left";
	questionBoxContianer.style.backgroundColor = "white";
	questionAndDroppableAwnserContainer.appendChild(questionBoxContianer);
	
	// creates Question box header
	var questionBoxHeader = document.createElement("p");
	questionBoxHeader.setAttribute("id","questionBoxHeader");
	questionBoxHeader.style.position = "relative";
	questionBoxHeader.style.width = "74%";
	questionBoxHeader.style.height = "10%";
	questionBoxHeader.style.textAlign = "center";
	questionBoxHeader.style.margin = "-2% 1% 0% 1%";
	questionBoxHeader.style.top = "8px";
	questionBoxHeader.style.fontSize = "1.5em";
	questionBoxHeader.style.fontWeight = "bold";
	questionBoxHeader.style.padding = "2% 12% 1% 12%";
	questionBoxHeader.innerHTML = "Which Movie Has:";
	questionBoxHeader.style.backgroundColor = "white";
	questionBoxContianer.appendChild(questionBoxHeader);
	
	// creates Question box
	var questionBox = document.createElement("p");
	questionBox.setAttribute("id","questionBox");
	questionBox.style.position = "relative";
	questionBox.style.width = "74%";
	questionBox.style.height = "67%";
	questionBox.style.textAlign = "center";
	questionBox.style.margin = "2% 1% 0% 1%";
	questionBox.style.top = "4px";
	questionBox.style.fontSize = "2.5em";
	questionBox.style.fontWeight = "bold";
	questionBox.style.padding = "12% 12% 12% 12%";
	questionBox.innerHTML = "Questions Shown Here!";
	questionBox.style.backgroundColor = "white";
	questionBoxContianer.appendChild(questionBox);
	
	//creating DROPPABLE AWNSER BOX container
	var droppableAwnserBoxContianer = document.createElement("div");
	droppableAwnserBoxContianer.setAttribute("id","droppableAwnserBoxContianer");
	droppableAwnserBoxContianer.setAttribute("class", "ui-widget-header");
	droppableAwnserBoxContianer.style.width = "97%";
	droppableAwnserBoxContianer.style.height = "36.75%";
	droppableAwnserBoxContianer.style.border = "5px solid hidden";
	droppableAwnserBoxContianer.style.cssFloat = "left";
	droppableAwnserBoxContianer.style.zIndex = "0";
	questionAndDroppableAwnserContainer.appendChild(droppableAwnserBoxContianer);
	
	// creates Droppable Awnser Box
	var droppableAwnserBox = document.createElement("p");
	droppableAwnserBox.setAttribute("id","droppableAwnserBox");
	droppableAwnserBox.style.position = "relative";
	droppableAwnserBox.style.width = "60%";
	droppableAwnserBox.style.height = "40%";
	droppableAwnserBox.style.border = "15px ridge grey";
	droppableAwnserBox.style.textAlign = "center";
	droppableAwnserBox.style.margin = "auto";
	droppableAwnserBox.style.top = "8px";
	droppableAwnserBox.style.fontSize = "1.5em";
	droppableAwnserBox.style.fontWeight = "bold";
	droppableAwnserBox.style.padding = "12%";
	droppableAwnserBox.innerHTML = "DROP ANSWER HERE!";
	droppableAwnserBox.style.backgroundColor = "white";
	droppableAwnserBox.style.zIndex = "0";
	droppableAwnserBoxContianer.appendChild(droppableAwnserBox);
	
	//// creating HANGMAN BOX and CORRECT/WRONG BOX CONTAINER
	var hangmanAndCorrectWrongContainer = document.createElement("div");
	hangmanAndCorrectWrongContainer.setAttribute("id","hangmanAndCorrectWrongContainer");
	hangmanAndCorrectWrongContainer.style.width = "57.5%";
	hangmanAndCorrectWrongContainer.style.height = "98.5%";
	hangmanAndCorrectWrongContainer.style.border = "5px solid hidden";
	hangmanAndCorrectWrongContainer.style.cssFloat = "right";
	middleDiv.appendChild(hangmanAndCorrectWrongContainer);
	
	//creating HANGMAN BOX container
	var hangmanBoxContianer = document.createElement("div");
	hangmanBoxContianer.setAttribute("id","hangmanBoxContianer");
	hangmanBoxContianer.style.width = "98%";
	hangmanBoxContianer.style.height = "80%";
	hangmanBoxContianer.style.border = "5px solid hidden";
	hangmanBoxContianer.style.cssFloat = "left";
	hangmanAndCorrectWrongContainer.appendChild(hangmanBoxContianer);

	///assigning variables to hangman images for processing
	//Hanging Post
	var hangingPost = document.createElement("img");
	hangingPost.setAttribute("id","hangingPost");
	hangingPost.src = "img/hangingPole.png";
	hangingPost.style.height = "120%";
	hangingPost.style.width = "80%";
	hangingPost.style.position = "relative";
	hangingPost.style.left = "50px";
	hangingPost.style.top = "-8%";
	hangingPost.style.transform = "scaleX(-1)";
	hangingPost.style.zIndex = "0";
	hangmanBoxContianer.appendChild(hangingPost);
	
	//Rope:
	var rope = document.createElement("img");
	rope.setAttribute("id","rope");
	rope.src = "img/ropeImage.png";
	rope.style.height = "35%";
	rope.style.width = "35%";
	rope.style.position = "relative";
	rope.style.left = "15%";
	rope.style.top = "-107%";
	rope.style.zIndex = "2";
	hangmanBoxContianer.appendChild(rope);
	
	//Head:
	var head = document.createElement("img");
	head.setAttribute("id","head");
	head.src = "img/Smiley-bored-2-icon.png";
	head.style.height = "20%";
	head.style.width = "13%";
	head.style.borderRadius = "35px";
	head.style.position = "relative";
	head.style.left = "-9%";
	head.style.top = "-106%";
	head.style.zIndex = "3";
	head.style.visibility = "hidden";
	hangmanBoxContianer.appendChild(head);
	
	//Face:
	var face = document.createElement("img");
	face.setAttribute("id","face");
	face.src = "img/faceImage.png";
	face.style.height = "15%";
	face.style.width = "15%";
	face.style.position = "relative";
	face.style.left = "-24%";
	face.style.top = "-107%";
	face.style.zIndex = "99";
	face.style.visibility = "hidden";
	hangmanBoxContianer.appendChild(face);
	
	//Body:
	var body = document.createElement("img");
	body.setAttribute("id","body");
	body.src = "img/bodyImage.png";
	body.setAttribute("id", "body");
	body.style.height = "28%";
	body.style.width = "20%";
	body.style.position = "relative";
	body.style.left = "-41%";
	body.style.top = "-83%";
	body.style.zIndex = "1";
	body.style.visibility = "hidden";
	hangmanBoxContianer.appendChild(body);
	
	//Left Arm:
	var leftArm = document.createElement("img");
	leftArm.setAttribute("id","leftArm");
	leftArm.src = "img/armImage.png";
	leftArm.style.height = "25%";
	leftArm.style.width = "25%";
	leftArm.style.position = "relative";
	leftArm.style.left = "14%";
	leftArm.style.top = "-110%";
	leftArm.style.zIndex = "3";
	leftArm.style.visibility = "hidden";
	hangmanBoxContianer.appendChild(leftArm);
	
	//Right Arm:
	var rightArm = document.createElement("img");
	rightArm.setAttribute("id","rightArm");
	rightArm.src = "img/armImage.png";
	rightArm.style.height = "25%";
	rightArm.style.width = "25%";
	rightArm.style.position = "relative";
	rightArm.style.left = "1%";
	rightArm.style.top = "-110%";
	rightArm.style.zIndex = "3";
	rightArm.style.visibility = "hidden";
	rightArm.style.transform = "scaleX(-1)";
	hangmanBoxContianer.appendChild(rightArm);
	
	//Left Leg:
	var leftLeg = document.createElement("img");
	leftLeg.setAttribute("id","leftLeg");
	leftLeg.src = "img/legImage.png";
	leftLeg.style.height = "17%";
	leftLeg.style.width = "14%";
	leftLeg.style.position = "relative";
	leftLeg.style.left = "-32%";
	leftLeg.style.top = "-97%";
	leftLeg.style.zIndex = "2";
	leftLeg.style.visibility = "hidden";
	hangmanBoxContianer.appendChild(leftLeg);
	
	//Right Leg:
	var rightLeg = document.createElement("img");
	rightLeg.setAttribute("id","rightLeg");
	rightLeg.src = "img/legImage.png";
	rightLeg.style.height = "17%";
	rightLeg.style.width = "14%";
	rightLeg.style.position = "relative";
	rightLeg.style.left = "-31%";
	rightLeg.style.top = "-97%";
	rightLeg.style.zIndex = "2";
	rightLeg.style.visibility = "hidden";
	rightLeg.style.transform = "scaleX(-1)";
	hangmanBoxContianer.appendChild(rightLeg);
	
	//creating CORRECT/WRONG BOX container
	var correctWrongBoxContianer = document.createElement("div");
	correctWrongBoxContianer.setAttribute("id","correctWrongBoxContianer");
	correctWrongBoxContianer.style.width = "98%";
	correctWrongBoxContianer.style.height = "16.75%";
	correctWrongBoxContianer.style.border = "5px solid hidden";
	correctWrongBoxContianer.style.cssFloat = "left";
	hangmanAndCorrectWrongContainer.appendChild(correctWrongBoxContianer);
	
	var correctWrongAnswer = document.createElement("p");
	correctWrongAnswer.setAttribute("id", "correctWrongAnswer");
	correctWrongAnswer.innerHTML = "";
	correctWrongAnswer.style.position = "relative";
	correctWrongAnswer.style.fontSize = "3em";
	correctWrongAnswer.style.textAlign = "center";
	correctWrongAnswer.style.fontWeight = "bold";
	correctWrongAnswer.style.margin = "auto";
	correctWrongAnswer.style.marginTop = "4%";
	correctWrongBoxContianer.appendChild(correctWrongAnswer);
	
	///////creatng the div's for the lower section with "DRAGGABLE CHOICE BOX" section
	var flexboxContainerDiv = document.createElement("div");
	flexboxContainerDiv.setAttribute("id","flexboxContainerDiv");
	flexboxContainerDiv.style.width = "100%";
	flexboxContainerDiv.style.height = "40%";
	flexboxContainerDiv.style.border = "5px solid hidden";
	flexboxContainerDiv.style.display = "inline-flex";
	flexboxContainerDiv.style.flexWrap = "nowrap";
	flexboxContainerDiv.style.overflowX = "auto";
	flexboxContainerDiv.style.margin = "-2% 0 0 0";
	flexboxContainerDiv.style.zIndex = "99";
	mainDiv.appendChild(flexboxContainerDiv);
	
	
	//// Loading movie covers into Flexbox ////
	loadMovieCoversIntoFlexbox();
	
  ////IMPORTANT Droppable/Draggable funtion code follows:////////////////////////////////////	
	//function code for daggable and droppable events. 
		
		$( function() {
		
			$( ".draggableFlexItem" ).draggable({opacity:'.85', helper:'clone'});
			$( "#droppableAwnserBoxContianer" ).droppable({
				
			  drop: function( event, ui ) {  
				var idOfCurrentDraggableDroppedInFlexItem = ui.draggable.prop('id');
				$( this ).addClass( "ui-state-highlight" ).find( "p" ).html( idOfCurrentDraggableDroppedInFlexItem );
	
				var idOfCurrentQuestion = currentQuestionHolder.Id;
				checkAnswer(idOfCurrentQuestion, idOfCurrentDraggableDroppedInFlexItem);
				
				}
				
			});
		} );
	
}	

//Called in the drop function: checks weither answer is correect and calls up necissary additional function based on responce.
function checkAnswer(idOfCurrentQuestion, idOfDroppedFlexItem){
	"use strict";
	if(idOfCurrentQuestion === idOfDroppedFlexItem){
		correctAnswerEffects();
		loadQuestion(chooseQuestion());
		numOfCorrectAnswerLoader();
	}
	else{
		wrongAnswerEffects();
		hangManImageEffects();
		loadQuestion(chooseQuestion());
	}
}

//number of correct awnser checker and number loader
var correctCounter = 1;
function numOfCorrectAnswerLoader(){
	"use strict";
	var loadCorrectAnswer = document.getElementById("numberOfCorrect");
	loadCorrectAnswer.value = correctCounter;
	if (correctCounter === 3){
		alert("Great Job! \nYou must be getting pretty OLD! \nHave you thought about Life Insurance lately? \nCall Eric @ (702) 867-5309" );
		sessionStorage.setItem('unlockLevel', '4');
		location.href = "mainPageIndex.html";
	}
	correctCounter++;
	
}

//question number counter
var currentQuestionNumberCounter = 1;
function questionNumberCounter(){
	"use strict";
	var loadQuestionNumber = document.getElementById("currentQuestionNumber");
	loadQuestionNumber.value = currentQuestionNumberCounter;
	currentQuestionNumberCounter++;
}

//Called in the checkAnswer() function: global variable "counter", Plus function which is called upon by incorrect answers and makes additional body parts visual for the hangman.
var counter = 0;
function hangManImageEffects(){
	"use strict";
	counter = counter + 1;
	switch(counter){
		case 1:
			var head = document.getElementById("head");
			head.style.visibility = "";
			break;
		case 2:
			var body = document.getElementById("body");
			body.style.visibility = "";
			break;
		case 3:
			var rightArm = document.getElementById("rightArm");
			rightArm.style.visibility = "";
			break;
		case 4:
			var leftArm = document.getElementById("leftArm");
			leftArm.style.visibility = "";
			break;
		case 5:
			var rightLeg = document.getElementById("rightLeg");
			rightLeg.style.visibility = "";
			break;
		case 6:
			var leftLeg = document.getElementById("leftLeg");
			leftLeg.style.visibility = "";
			break;
		case 7:
			var face = document.getElementById("face");
			face.style.visibility = "";
			break;
		default:
			alert("No Proper case was found - Retart!!!");
	}
	// reset the counter of it becomes greater then the amount of items which can be hung from the hangingPost (currently (7), ((8) if you include rope), ((9) if you include gallows)).
	if (counter >= 7){
		counter = 0;
		alert(" The dude is dead -- YOU LOST IDIOT");
		sessionStorage.setItem('unlockLevel', '1');
		location.href = "hangmanIndex.html";
		
	}
	
}

//Called in the checkAnswer() function: assignes visual effects if the awnser is correct
function correctAnswerEffects(){
	"use strict";
	var droppableAwnserBox = document.getElementById("droppableAwnserBox");
	droppableAwnserBox.style.border = "15px ridge lightgreen";
	
	var correctWrongAnswer = document.getElementById("correctWrongAnswer");
	correctWrongAnswer.innerHTML = "Correct Answer";
	correctWrongAnswer.style.color = "lightgreen";
}

//Called in the checkAnswer() function: assignes visual effects if the awnser is wrong
function wrongAnswerEffects(){
	"use strict";
	var droppableAwnserBox = document.getElementById("droppableAwnserBox");
	droppableAwnserBox.style.border = "15px ridge red";
	
	var correctWrongAnswer = document.getElementById("correctWrongAnswer");
	correctWrongAnswer.innerHTML = "Wrong Answer";
	correctWrongAnswer.style.color = "red";
}

//Called in the ONLOAD and drop functions: assignes the "Question" and "Id" variables for the global questions object named "currentQuestionHolder";
function loadQuestion(currentQuestion){
	"use strict";
	currentQuestionHolder.Question = questionBankArray[currentQuestion].Question;
	currentQuestionHolder.Id = questionBankArray[currentQuestion].Id;
	
	var firstQuestionLoader = document.getElementById("questionBox");
	firstQuestionLoader.innerHTML = currentQuestionHolder.Question;
	
	questionNumberCounter();
}	

// CODE to load flexBox with movie covers
function loadMovieCoversIntoFlexbox(){
	"use strict";
	for(var i=0; i<questionBankArray.length; i++){
		var newVideoCover = document.createElement("img");
		newVideoCover.setAttribute("id", questionBankArray[i].Id);
		newVideoCover.setAttribute("class", "draggableFlexItem");
		newVideoCover.src = questionBankArray[i].Image;
		flexboxContainerDiv.appendChild(newVideoCover);
	}
}


		
		
window.onload = function(){
	"use strict";
	preparePage();
	loadQuestion(chooseQuestion());
	
};

