// JavaScript Document
(function() {
	"use strict";
  var questions = [{
	  question: "You either die a hero or you live long enough to see yourself become the villain.",
	image: "img/Begins.jpg",
    choices: ["Donnie Darko", "Batman Begins", "Pirates of the Caribbean", "King Arthur", "Unbreakable"],
    correctAnswer: 1
  }, {
    question: "We've been given our parts in the nativity play. And I'm the lobster.",
	image: "img/Love.jpg",
    choices: ["Mean Girls", "Catch Me If You Can", "The Notebook", "Thirteen", "Love Actually"],
    correctAnswer: 4
  }, {
    question: "You expect me to believe that scantily clad, in the arms of another man, in the middle of the night, inside an elephant you were rehearsing?",
	image: "img/Moulin.jpg",
    choices: ["Moulin Rouge", "Snatch", "The Count of Monte Cristo", "A Knight's Tale", "Sweeney Todd"],
    correctAnswer: 0
  }, {
    question: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
	image: "img/Underworld.jpg",
    choices: ["The Prestige", "Van Helsing", "Harry Potter and the Sorceror's Stone", "Underworld", "Blade 2"],
    correctAnswer: 3
  }, {
    question: "I love hitmen. No matter what you do to them, you don't feel bad.",
	image: "img/bond.jpg",
    choices: ["Almost Famous", "A Beautiful Mind", "Casino Royale", "Memento", "Inglourious Basterds"],
    correctAnswer: 2
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var LevelOneDiv = $("#LevelOneDiv"); //LevelOneDiv div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the next button
  $("#next").on("click", function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(LevelOneDiv.is(":animated")) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert("Wait! You must make a choice before you can move on!");
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the prev button
  $("#prev").on("click", function (e) {
    e.preventDefault();
    
    if(LevelOneDiv.is(":animated")) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
//ERIC ADDED - click handler for the next trivi game button	
$("#nextGame").on("click", function (e) {
	e.preventDefault();
	
	sessionStorage.setItem('unlockLevel', '2');
	location.href = "../mainPageIndex.html";
});
  
  // Click handler for the Start Over button
  $("#start").on("click", function (e) {
    e.preventDefault();
    
    if(LevelOneDiv.is(":animated")) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $("#start").hide();
	//ERIC ADDED - hides next trivia game button till end of game
	$("#nextGame").hide();
	  
  });
  
  // Animates buttons on hover
  $(".button").on("mouseenter", function () {
    $(this).addClass("active");
  });
  $(".button").on("mouseleave", function () {
    $(this).removeClass("active");
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $("<div>", {
      id: "question"
    });
    
    var header = $("<h2>Movie Scene " + (index + 1) + ":</h2>");
    qElement.append(header);
    

    var image = $("<img src = " + questions[index].image + " height='200' width='354' ></img>");
    qElement.append(image);
	
	
	
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
	  }
  



  function createRadios(index) {
    var radioList = $("<ul>");
    var item;
    var input = "";
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $("<li>");
      input = "<input type='radio' name='answer' value=" + i + " />";
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$("input[name='answer']:checked").val();
  }
  
  // Displays next requested element
  function displayNext() {
    LevelOneDiv.fadeOut(function() {
      $("#question").remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        LevelOneDiv.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $("input[value="+selections[questionCounter]+"]").prop("checked", true);
        }
        
        // Controls display of prev button
        if(questionCounter === 1){
          $("#prev").show();
        } else if(questionCounter === 0){
          
          $("#prev").hide();
          $("#next").show();
        }
      }else {
        var scoreElem = displayScore();
        LevelOneDiv.append(scoreElem).fadeIn();
        $("#next").hide();
        $("#prev").hide();
        $("#start").show();
		//ERIC ADDED - adds the next trivia game button to the final page
		$("#nextGame").show();
      }
    });
  }
  
  // Computes score and displays it
  function displayScore() {
    var score = $("<p>",{id: "question"});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append("You got " + numCorrect + " questions out of " +
                 questions.length + " right!!!");
    return score;
  }
})();

function preparePage(){
	"use strict";
	var LevelOneDiv = document.getElementById("LevelOneDiv");
	LevelOneDiv.style.width = "60%";
	LevelOneDiv.style.margin =  "10% auto";
	LevelOneDiv.style.backgroundColor = "hsla(318,89%,21%,.85)"; 
	LevelOneDiv.style.padding = "0 25px 40px 10px";
	LevelOneDiv.style.border = "5px solid #0004ff";
	LevelOneDiv.style.borderRadius = "5px";
	LevelOneDiv.style.color = "#FFFFFF";
	LevelOneDiv.style.fontWeight = "bold";
	//LevelOneDiv.style.boxShadow = "7px 7px 7px #fff";
	LevelOneDiv.style.boxShadow = "0px 0px 10px 10px #FFF";
	LevelOneDiv.style.textIndent = "10px";
	LevelOneDiv.style.display = "none";
	LevelOneDiv.style.fontFamily = "DejaVu Sans Condensed, Helvetica, Arial, sans-serif";
//	
//		//creating button
//	var buttonDiv = document.createElement("div");
//	buttonDiv.setAttribute("class","button");
//	buttonDiv.style.border = "3px solid";
//	buttonDiv.style.borderRadius = "5px";
//	buttonDiv.style.paddingRight = "15px";
//	buttonDiv.style.position =  "relative";
//	buttonDiv.style.float =  "right";
//	buttonDiv.style.backgroundColor =  "#DCDCDC";
//	buttonDiv.style.color =  "black";
//	buttonDiv.style.color =  "380px 2px 0 2px";
//	buttonDiv.style.color =  "380px 2px 0 2px";
//	buttonDiv.active.style.backgroundColor =  "#F8F8FF";
//	buttonDiv.active.style.color =  "#525252";
//	buttonDiv.setAttribute("id", "next");
//	LevelOneDiv.appendChild(buttonDiv);


	
}





window.onload = function(){
	"use strict";
	preparePage();
};