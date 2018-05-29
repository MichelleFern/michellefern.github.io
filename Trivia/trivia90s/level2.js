// JavaScript Document

//ERIC ADDED - counter variable used to count up the number of correct movie/quote combinations
var counter = 0;

$( function() {
	"use strict";
    $( "#draggable" ).draggable({
	snap: "#droppable",
	cursor:"move",
	revert:"invalid"
	});
    $( "#droppable" ).droppable({
		accept:"#draggable",
		 drop: function( ) {  
			 	counterChecker();
				}
	});
  });
	  $( function() {
	"use strict";
    $( "#draggable2" ).draggable({
	snap: "#droppable2",
	cursor:"move",
	revert:"invalid"
	});
    $( "#droppable2" ).droppable({
		accept:"#draggable2",
		 drop: function( ) {  
			 	counterChecker();
				}
	});
  });
	   $( function() {
	"use strict";
    $( "#draggable3" ).draggable({
	snap: "#droppable3",
	cursor:"move",
	revert:"invalid"
	});
    $( "#droppable3" ).droppable({
		accept:"#draggable3",
		 drop: function( ) {  
			 	counterChecker();
				}
	});
  });
	   $( function() {
	"use strict";
    $( "#draggable4" ).draggable({
	snap: "#droppable4",
	cursor:"move",
	revert:"invalid"
	});
    $( "#droppable4" ).droppable({
		accept:"#draggable4",
		 drop: function( ) {  
			 	counterChecker();
				}
	});
  }); $( function() {
	"use strict";
    $( "#draggable5" ).draggable({
	snap: "#droppable5",
	cursor:"move",
	revert:"invalid"
	});
    $( "#droppable5" ).droppable({
		accept:"#draggable5",
		 drop: function( ) {  
			 	counterChecker();
				}
	});
  });
	   $( function() {
	"use strict";
    $( "#draggable6" ).draggable({
	snap: "#droppable6",
	cursor:"move",
	revert:"invalid"
	});
    $( "#droppable6" ).droppable({
		accept:"#draggable6",
		 drop: function( ) {  
			 	counterChecker();
				}
	});
  });   $( function() {
	"use strict";
    $( "#draggable7" ).draggable({
	snap: "#droppable7",
	cursor:"move",
	revert:"invalid"
	});
    $( "#droppable7" ).droppable({
		accept:"#draggable7",
		 drop: function( ) {  
			 	counterChecker();
				}
	});
  });   $( function() {
	"use strict";
    $( "#draggable8" ).draggable({
	snap: "#droppable8",
	cursor:"move",
	revert:"invalid"
	});
    $( "#droppable8" ).droppable({
		accept:"#draggable8",
		 drop: function( ) {  
			 	counterChecker();
				}
	});
  });   $( function() {
		   "use strict";
    $( "#draggable9" ).draggable({
	snap: "#droppable9",
	cursor:"move",
	revert:"invalid"
	});
    $( "#droppable9" ).droppable({
		accept:"#draggable9",
		 drop: function( ) {  
			 	counterChecker();
				}
	});
  });   $( function() {
	"use strict";
    $( "#draggable10" ).draggable({
	snap: "#droppable10",
	cursor:"move",
	revert:"invalid"
	});
    $( "#droppable10" ).droppable({
		accept:"#draggable10",
		 drop: function( ) {  
			 	counterChecker();
				}
	});
  });



//ERIC ADDED - increses counter and determined if all movie/qoutes have been used
function counterChecker(){
	"use strict";
	counter++;
	if(counter >= 10){
		alert("you have won! We will miss the best decade! - Designed by Clarissa Ray");
		counter = 0;
		sessionStorage.setItem('unlockLevel', '3');
		location.href = "../mainPageIndex.html";
	}
}

