document.getElementById('imagesTaken').focus();

var normalDaysHours = 7.5; // Setting a default value for normal day's hours
document.getElementById('fullDaysHours').value=normalDaysHours; // Putting the value of normalDaysHours in the input form
document.getElementById('hoursWorkedToday').value=normalDaysHours; // Putting the (same) value of normalDaysHours in the input form

var normalQuota = 60;
document.getElementById('quota').value=normalQuota;


// This calculates all the totals
function giveTotals() {
	var imagesTaken = document.getElementById("imagesTaken").value;
	var hoursWorkedToday = document.getElementById("hoursWorkedToday").value;
	var quota = document.getElementById("quota").value;
	var fullDaysHours = document.getElementById("fullDaysHours").value;

	var todaysScore = ((imagesTaken * (100 / quota)) / (hoursWorkedToday * (100 / fullDaysHours)) * 100);
	var todaysScore = Math.round(todaysScore);

	var expectedQuota = (quota * (hoursWorkedToday * (100 / fullDaysHours)));
	var expectedQuota = Math.round (expectedQuota / 100);
	var theDifference = (expectedQuota - imagesTaken);
	var perHour = (imagesTaken / hoursWorkedToday);
	var perHour = Math.round (perHour * 10) / 10;

	var optimalPerHour = Math.round((quota / fullDaysHours) * 10) / 10;


	if (theDifference > 0) {
		var secondMessage = "\n\n" + theDifference + " edits short of the expected quota of " + expectedQuota + "."
	} else {
		if (theDifference == 0) {
			var secondMessage = "\n\nReached expected quota."
		} else {
			var secondMessage = "\n\n" + ((theDifference) * -1) + " over the expected quota of " + expectedQuota + "."
		}
	}


	document.getElementById("theAnswers").style.borderColor = "black";
	document.getElementById("theAnswers").style.borderStyle = "solid";
	document.getElementById("theAnswers").style.borderWidth = "4px";
	document.getElementById("theAnswers").style.marginTop   = "40px";
	document.getElementById("theAnswers").style.backgroundColor = "white";



	document.getElementById('theAnswers').innerText=("Edited " + imagesTaken + " image(s) in " + hoursWorkedToday + " hours." + secondMessage + "\n\n" + perHour + " edits per hour.\n(Optimal to reach quota: " + optimalPerHour + "/hr) \n\nScore: " + todaysScore + "%");

	event.preventDefault(); // Prevents the form from resetting when button is pressed
	return false;
}