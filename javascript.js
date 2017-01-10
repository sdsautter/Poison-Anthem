function registerClickListener(memberInfo) {
	document.getElementById(memberInfo.name).addEventListener("click", function() {
		document.getElementById("bandPic").src="pics/" + memberInfo.name + ".png";
		document.getElementById("caption").innerHTML = memberInfo.instrument + ": " + memberInfo.fullName;
	});
}

var members = [
	{ name: "Ashley", fullName: "Ashley Wynn", instrument: "Singer"},
	{ name: "Sean", fullName: "Sean Shotdown", instrument: "Rhythm Guitarist"},
	{ name: "Larz", fullName: "Larz Robison", instrument: "Bassist"},
	{ name: "Manny", fullName: "Emmanuel Parial", instrument: "Drummer"},
	{ name: "Scott", fullName: "Scott Sautter", instrument: "Drummer"},
	{ name: "Jon", fullName: "Jon Evyl", instrument: "Lead Guitarist"},
	{ name: "Chris", fullName: "Chris Stolarczyk", instrument: "Bassist"},
	{ name: "Shawn", fullName: "Shawn Dickison", instrument: "Lead Guitarist"},
	{ name: "Danny", fullName: "Danny Sauer", instrument: "Bassist"},
	{ name: "Lee", fullName: "Lee DeVille", instrument: "Lead Guitarist"},
	{ name: "Lauren", fullName: "Lauren Bartlett", instrument: "Singer"},
	{ name: "Jason", fullName: "Jason Graven", instrument: "Bassist"},
	{ name: "Jeremy", fullName: "Jeremy Kelly", instrument: "Bassist"},
];

members.forEach(function(member) {
	registerClickListener(member);
});

document.getElementById("reset").addEventListener("click", function() {
		document.getElementById("bandPic").src="pics/Full Band.png";
		document.getElementById("caption").innerHTML ="From left to right: Lee DeVille, Scott Sautter, Jeremy Kelly, Sean Shotdown, and Lauren Bartlett";
});	