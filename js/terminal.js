/*
 * commands for terminal
 * help
 * ls
 * cd
 * resume
 * projects
 * cotanct
 * email
 * linkedin
 * facebook
 * education
 */


$("#command").keyup(function (e) {
    if (e.keyCode == 13) {
    	command = parse();
        submit(command);
    }
});

//needs to be changed into a table later?
var tab = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
var commandList = "Perosnal: about" + tab + "education" + tab + "resume" + tab + "contact<br>Websites: linkedin" + tab + "facebook" + tab + "github<br>Command Prompt: help" + tab + "clear" + tab + "ls" + tab + "echo";

//parse through the input
var parse = function() {
	var input = document.getElementById("command").value;
	document.getElementById("command").value = '';
	switch(input) {

		//typical of command prompt
		case "help":
			output = "The help command is still in the works. Good luck without it!";
			break;
		case "ls":
			output = "<strong>" + commandList + "</strong>";
			break;

		//websites
		case "linkedin":
			output = "<a href='http://www.linkedin.com/in/tlcho'>Click here to visit my Linkedin page.</a>";
			break;
		case "facebook":
			output = "<a href='http://www.facebook.com/tlcho'>Click here to visit my Facebook page.</a>";
			break;
		case "github":
			output = "<a href='http://www.github.com/terencecho'>Click here to visit my Github page.</a>";
			break;

		//Personal
		case "about":
			output = "command not ready";
			break;
		case "education":
			output = "command not ready";
			break;
		case "resume":
			output = "command not ready";
			break;
		case "contact":
			output = "command not ready";
			break;
		case "clear":
			output = "command not ready";
			break;

		//friends
		case "andrew cho":
			output = "Andrew Cho is my brother, a really chilll guy who has a masters in Computer Engineering from UCLA."
			break;





		default:
			output = input + ": command not found";
	}

	var check = input.slice(0, 4);
	if (check == "echo") {
		if (input.length == 4) {
			output = "<br>";
		} else if (input.slice(4,5) == " "){
			output = input.slice(5);
		} else {
			output = input + ": command not found";
		}
	}

	output = input + "<br>" + output;
	return output;
}

//submits command
var submit = function (command) {
    var output = document.getElementById("output");
    var div = document.createElement("div");
    div.innerHTML = "guest@terencecho.com:~$ " + command;
    output.appendChild(div);
};