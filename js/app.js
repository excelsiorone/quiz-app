$(document).ready(function() {
	var counter = 0;
	var score = 0;

	var quizQuestions = [{
	question:"In what year was America founded ?",
	choices:["1775", "1776", "1801","1492"],
	answer: 1 
},
{
	question:"Who did not sign the Declaration of Independence ?",
	choices:["George Wasington", "Ben Franklin", "John Hancock", "Thomas Jefferson"],
	answer: 0	
},
{
	question:"Who was the only president to serve more than two terms?",
	choices:["George Washington", "Woodrow Wilson", "Franklin Delano Roosevelt", "James Madison"],
	answer: 2
},
{
	question:"In what year did America land on the moon ?",
	choices:["1969", "1965", "1970", "1968"],
	answer: 0
},
{
	question:"Which country did America buy the Louisiana Purchase from ?",
	choices:["England", "Spain", "Germany", "France"],
	answer: 3
}
]

	$("#start").click(function() {
		$(this).text("Next");
	})

	$("#start").on("click", function(){
	
	$("#start").click(counter++)
			
	$(".choices").append("<h2>" + quizQuestions[counter].question + "</h2>")

	for(var i = 0 ; i < quizQuestions[counter].choices.length;i+=1){
		$(".choices").append("<li>" + quizQuestions[counter].choices[i] + "</li>")
	
}
})

counter+=0;	

});