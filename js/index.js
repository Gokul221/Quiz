var score = parseInt(0);
var formNumber = parseInt(0);
var ansBlock;
var correctAnswers = [1, 1, 0, 3];
var userAnswers = [];
var quesNumber;

function start(argument) {
	// document.getElementById("message").style.display = "none";
	document.getElementById("startbtn").style.display = "none";
	document.getElementById("headerImage").src = "images/b&w box.gif";
	document.getElementById("question0").style.display = "block";
}

function check(btnId) {
	quesNumber = btnId;
	for (var i=0; i<4; i++) {
		if(document.forms[btnId].elements[i].checked) {
			userAnswers[btnId] = i;			//saving user's answer
		}
	}


	ansBlock = "ansBlock" + btnId;
	if(userAnswers[btnId] == correctAnswers[btnId]) {
		document.getElementById("headerImage").src = "images/yellow box.gif";
		document.getElementById(ansBlock).style.visibility = "visible";
		document.getElementById(ansBlock).innerHTML = "You scored +1 point!";
		swal({

  			title: "Good job!",

  			text: "Correct Answer!",

  			icon: "success",

		});
		score++;
	}

	else{
		document.getElementById(ansBlock).style.visibility = "visible";
		document.getElementById(ansBlock).innerHTML = "You got -1 point";
		swal({

  			title: "Nope",

  			text: "Wrong Answer!",

  			icon: "error",

		});
	}

	document.getElementById(btnId).value = "Next";
	document.getElementById(btnId).setAttribute("onclick", "next()");
}



function next() {

	var oldQuestion = "question" + quesNumber;
	document.getElementById(ansBlock).style.visibility = "hidden";

	if(quesNumber == 3) {
		document.getElementById(oldQuestion).style.display = "none";
		document.getElementById("headerImage").src = "images/yellow box.gif";
		finalScore();
	}

	else {
		document.getElementById(oldQuestion).style.display = "none";
		quesNumber++;

		var newQuestion = "question" + quesNumber;
		document.getElementById(newQuestion).style.display = "block";
	}
}



function finalScore() {
	document.getElementById("message").style.display = "block";
	document.getElementById("message").innerHTML = "You scored "+score+"/4 points!";
}