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

//parse through the input
var parse = function() {
	var input = document.getElementById("command").value;
	if (input == "help" || input == "h") {
		output = input + "<br>The help command is still in the works. Good luck without it!";
	} else if (input == "ls") {
		output = input + "<br><strong>About    Education    Resume    Contact</strong>";
	} else {
		output = input + "<br>Invalid Command";
	}
	return output;
}


//submits command
var submit = function (command) {
    var output = document.getElementById("output");
    var div = document.createElement("div");
    div.innerHTML = "guest@terencecho.com:/web> " + command;
    output.appendChild(div);
    document.getElementById("command").value = '';
};