/* 
 _____   _           _         _                        _                  
|_   _| | |         | |       | |                      | |                 
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___ 
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

$(document).ready(function () {

	setTimeout(function () {
		$('body').addClass('loaded');
<<<<<<< HEAD
		$('h1').css('color', '#222222');
	}, 150);

});
$(document).ready(function GetClock() {
	var d = new Date();
	var nmonth = d.getMonth(), ndate = d.getDate(), nyear = d.getFullYear();
	var nhour = d.getHours(), nmin = d.getMinutes();
	if (nmin <= 9) nmin = "0" + nmin

	document.getElementById('clockbox').innerHTML = "" + ndate + "/" + (nmonth + 1) + "/" + nyear + " " + nhour + ":" + nmin + "";
},
	window.onload = function () {
	GetClock();
	setInterval(GetClock, 1000);
=======
		$('h1').css('color','#222222');
	}, 800);
	
>>>>>>> master
});