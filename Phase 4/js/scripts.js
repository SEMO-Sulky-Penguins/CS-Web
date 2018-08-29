// SIGAI Scripts

/*
 * For regular maintenance of events, you'll need to do the following:
 * 1) add a list of events for the semester following the same scheme as below.
 * 2) modify getSemester(id) to return the list you created for the corresponding id
 * 3) add a ul in events.html with the next id in line (so if we're on event29 add event30)
 *
 * Also be sure to change out the president email address whenever a new president is elected!
 */

// Global Variables

//var presidentEmail = "amgunther1s@semo.edu";
var presidentEmail = "scsladek1s@semo.edu";

// EVENT LISTS

const fall18 = [
	"8/27: General Meeting"
];

const spring18 = [
	"2/13: Bresenham's Line Algorithm for Line of Sight - Aaron Gunther",
	"2/20: Linux Navigation - Michael Ranciglio",
	"4/14 - 15: MegaMinerAI 21 at Missouri S&T",
	"4/15: Andrew Smith places 5th in student bracket at MegaMiner"
];

const fall17 = [
	"9/12: SIGAI is created",
	"11/11 - 12: MegaMinerAI 20 at Missouri S&T",
	"11/12: Michael Ranciglio, Aaron Gunther, and Tatianna Reinbolt place 3rd in globals at MegaMiner"
];

/*
 * Called upon within loadEvent()
 * The ul tag will have an id of event0, event1, etc.
 * This will return the list of events to populate that ul with
*/
function getSemester(id){
    switch(id){
        case "event0":
            return fall17;
        case "event1":
            return spring18;
        case "event2":
            return fall18;
        default:
            return "-";
            break;
    }
}

// Loads the events into the ul tags on events.html

function loadEvent(id){
	var event = document.getElementById(id);
	var info = getSemester(id);
	if(info != "-"){
		var li;
		for(let i = 0; i < info.length; i++){
			li = document.createElement("li");
			li.appendChild(document.createTextNode(info[i]));
			event.appendChild(li);
		}
	}
}

// REGISTRATION FORM

function sendMail(){
	try{
		var subject = encodeURI(document.forms["signUp"]["subject"].value);
		var name = encodeURI(document.forms["signUp"]["name"].value);
		var email = encodeURI(document.forms["signUp"]["email"].value);
		var msg = encodeURI(document.forms["signUp"]["msg"].value);
		var body = "Name: " + name + "%0D%0A" + "Email: " + email + "%0D%0A" + msg;
		var mail = "mailto:scsladek1s@semo.edu?subject=" + subject + "&body=" + body;
		window.location.href = mail;
	} catch(e) {
		window.alert("Message failed to send.");
		console.log(e);
	}
}
