var time = new Date().getHours();
var partyTime = 20;
var lunchTime = 12;
var napTime = lunchTime + 2;
var wakeUpTime = 7;
var noon = 12;
var evening = 5;
var message;
var isPartyTime = false;
var buttonMessage;
var partyTimeButton = document.getElementById('partyTimeButton');
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var updateClock = function()
{
var displayMessageJS = document.getElementById("timeEvent");
var lolcat = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";

if (time == partyTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	message = "It's party time!";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	message = "Time for lunch!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	message = "It's nap time!";
} else if (time == wakeUpTime) {
	message = "Get outta bed!";
} else if (time < noon) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	message = "Good morning!";
} else if (time > evening) {
	message = "Good evening!";
} else {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	message = "Time to code!";
}

displayMessageJS.innerText = message;
lolcat.src = image;

var showCurrentTime = function()
{
	var clock = document.getElementById('clock');

	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	if (hours >= 12)
	{meridian = "PM";
	}
	if (hours > 12)
	{hours = hours - 12;
	}
	if (minutes < 10)
	{ minutes = "0" + minutes;
	}
	if (seconds < 10)
	{seconds = "0" + seconds;
	}
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
	clock.innerText = clockTime;
};
showCurrentTime();
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function()
{
	if (isPartyTime === false) {
		isPartyTime = true;
		time = partyTime;
		partyTimeButton.innerText = "Party Over";
		partyTimeButton.style.backgroundColor = "0A8DAB";
	}
	else {
		isPartyTime = false;
		time = new Date().getHours();
		partyTimeButton.innerText = "PARTY TIME";
		partyTimeButton.style.backgroundColor = "#222";
	};
}
partyTimeButton.addEventListener("click", partyEvent);

var lunchEvent = function()
{
	lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function()
{
	wakeUpTime = wakeUpTimeSelector.value;
};

var napTimeEvent = function()
{
	napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napTimeEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
