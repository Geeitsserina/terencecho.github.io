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
  		var terminal = document.getElementById('terminal');
  		terminal.scrollTop = terminal.scrollHeight;
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
			return "clear";

		//friends
		case "terence cho":
			output = "<strong>Terence Cho</strong> is a student at UC Berkeley. He's alright, I guess...";
			break;
		case "andrew cho":
			output = "<strong>Andrew Cho</strong> is my brother, a really chill guy who has a masters in Computer Engineering from UCLA.";
			break;
		case "dickson lui":
			output = "<strong>Dickson Lui</strong> is a god of webdev, linkedin, and cooking. He's so cool, I wish I was him. What more needs to be said?";
			break;
		case "jesse luo":
			output = "<strong>Jese Luo</strong>, also known as <em>FratStar-90,0000</em>, is a god among boys. He has an internship with AT&T, is in a frat, and works for rescomp. What a stud.";
			break;
		case "yoloswag4jesus":
			output = "YOLOSWAG4JESUS";
			break;





		default:
			output = input + ": command not found";
	}

	//if echo command
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
    if (command == "clear") {
    	output.innerHTML = "";
    } else {
    	var div = document.createElement("div");
    	div.innerHTML = "guest@terencecho.com:~$ " + command;
    	output.appendChild(div);
	}
};