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

var tab = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";

//ls commands
//needs to be changed into a table later?
var personal = ["about", "education", "resume", "contact", "website"];
var websites = ["linkedin", "facebook", "github"];
var cmdprompt = ["help", "clear", "ls", "echo"];
var commandList = "Personal: <strong>";
for (var i = 0; i < personal.length; i++) {
	commandList = commandList + personal[i] + tab;
}
commandList = commandList + "</strong><br>Websites: <strong>"
for (var i = 0; i < websites.length; i++) {
	commandList = commandList + websites[i] + tab;
}
commandList = commandList + "</strong><br>Command Prompt: <strong>"
for (var i = 0; i < cmdprompt.length; i++) {
	commandList = commandList + cmdprompt[i] + tab;
}
commandList = commandList + "</strong>"

//parse through the input
var parse = function() {
	var input = document.getElementById("command").value;
	document.getElementById("command").value = '';
	switch(input) {
		//typical of command prompt
		case "help":
			output = "This website is suppose to be a simulation of a computer terminal.<br>You type 'commands' into the terminal to have different information appear.<br>To view a list of possible commands, enter the command 'ls'.<br>You may type any of those commands (e.g. 'about', 'education', 'resume') to view more information about me.<br>If any extra help needed, please contact me at 'terencecho@berkeley.edu'.<br>Thank you for visiting my website!";
			break;
		case "ls":
			output = commandList;
			break;
		case "who":
			output = "guest";
			break;
		case "":
			return "";

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
			output = "I'm a 20 year old socal native who is currently interning at Agilent Technologies for the summer.";
			break;
		case "education":
			output = "I am a third year undergraduate student attending UC Berkeley and majoring in EECS (Electrical Engineering & Computer Science) and Mechanical Engineering.";
			break;
		case "resume":
			output = "I am currently updating my resume. To see my old resume <a href = 'https://www.dropbox.com/s/4l6a47zbz907q1t/TChoResume.pdf'>click here.</a>";
			break;
		case "contact":
			output = "Please e-mail me at 'terencecho@berkeley.edu' and I will promptly respond to you as soon as I can.";
			break;
		case "website":
			output = "This is my personal website that I made utilizing HTML/CSS and Javascript."
			break;
		case "clear":
			return "clear";

		//random
		case "hello":
			output = "Hello there, friend! Welcome to my website.";
			break;
		case "hello world":
			output = "Hello World!";
			break;
		case "you suck":
			output = "Says the one saying you suck to a computer...";
			break;










		//family
		case "terence cho":
			output = "<strong>Terence Cho</strong> is a student at UC Berkeley. He's alright, I guess...";
			break;
		case "andrew cho":
			output = "<strong>Andrew Cho</strong> is my brother, a really chill guy who has a masters in Computer Engineering from UCLA.";
			break;
		case "stephanie leung":
			output = "<strong>Stephanie Leung</strong> is my cousin who attends Notre Dame studying architecture. She's hella good at drawing and playing music and all that crazy stuff and very over-achieving, psh typical asian. haha jk she's pretty hipstery, way too cool for me. You should hit her up, she's pretty friendly and talkative";
			break;
		case "nathan leung":
			output = "<strong>Nathan Leung</strong> is my cousin who still attends high school. He's such a stud, I wish i was as cool as him. Drumline, Tennis, getting girls. What more could a teenage boy want in life? In all seriously, he's a pretty chill dude.";
			break;

		//friends
		case "dickson lui":
			output = "<strong>Dickson Lui</strong> is a god of webdev, linkedin, and cooking. He's so cool, I wish I was him. What more needs to be said?";
			break;
		case "jesse luo":
			output = "<strong>Jese Luo</strong>, also known as <em>FratStar-90,0000</em>, is a god among boys. He has an internship with AT&T, is in a frat, and works for rescomp. What a stud.";
			break;
		case "delia he":
			output = "<strong>Delia He</strong> is my awesome friend that I've known since 6th grade! She's hella chill and literally one of the best friends I have ever had in my life. I can't imagine life without her! Sucks to be you if you don't have her in your life.";
			break;
		case "jami wang":
			output = "<strong>Jami wang</strong> is a doctor in training who's really awesome! If I were to write out all I had to say about her, my website would crash!";
			break;
		case "unzi park":
			output = "<strong>Unzi Park</strong> is my hella chill German R5B buddy! She's pretty cool and popular, the only weird thing about her is how she eats her food. Other than that, she's pretty aight";
			break;
		case "jing chen":
			output = "<strong>Jing Chen</strong> is a really smart and chill girl who's insanely friendly and talks a bit too much. But it's all good cause she's really cool to hang out with and is an awesome friend!";
			break;
		case "eric tu":
			output = "<strong>Eric To</strong>, the tu-ster, is a hella smart and chill dude who flakes sometimes... but it's okay, if I can forgive him, you can too. He's pretty chill to hang out with, if he doesn't flake on you!";
			break;
		case "jonathan shum":
			output = "<strong>Jonathan Shum</strong> is a hella smart man who's doubling in EECS and ME. Who the heck does that?! And he's taking like all the classes ever offered. Definitely a chill dude who likes to build cool stuff. If there's a next iron man out there, it's definitely him.";
			break;
		case "bryan thov":
			output = "<strong>Bryan Thov</strong> is a hella smart dude who's doublien in EECS and ME. Who the heck does that?! Even though he's hella smart, he's also hella chill. Definitely a guy who you can just have life talks with and relax with.";
			break;
		case "yoloswag4jesus":
			output = "YOLOSWAG4JESUS<br>Requested by Dickson.";
			break;

		//People from the House
		case "louis wong":
			output = "<strong>Louis Wong</strong> is one of the nicest friend I have ever had the pleasure of meeting. He's so popular that he has a hard time remebering names, which makes me feel special to know that he knows who I am!";
			break;
		case "serina gee":
			output = "<strong>Serina Gee</strong> is the most og shorty I've ever met in my life. Super friendly, nice, and amazing at drawing. Just check out the amazing picture she drew my by typing the command 'spaceship'. Feature not ready yet at this time though, please check again later, or remind me if it's past summer and I totally just forgot.";
			break;
		case "imran mahmood":
			output = "<strong>Imran Mahmood</strong> is hella smart and hella chill. 10/10 would bang again. p.s. don't be jelly serina, but you're just a beard.";
			break;
		case "cherry liu":
			output = "<strong>Cherry Liu</strong> is a short little asain girl who lacks common sense. On the bright side, she's pretty chill and interesting and nice to me (which is all that matters). She's kinda bad at tetris though.";
			break;
		case "james wei":
			output = "<strong>James Wei</strong> is hella smart and really good at teaching. Seriously if you want something explained well, you should ask him. Always the word of wisdom. Also he's pretty chill, you should go hang out with him!";
			break;
		case "makoto lalwani":
			output = "<strong>Makoto Lalwani</strong> is a really chill guy who knows his pokemon (so does a good amount of people at the house actually...). I'm always impressed by how he keeps his grades up while joining like hella clubs. I'm pretty sure he's a robot... makotron....";
			break;
		case "andrew yen":
			output = "<strong>Andrew Yen</strong> is my hella chill roommate! From ping pong to league, this guy is hella intense, so you should try challenging him someday and let me watch, it'll be my entertainment!";
			break;
		case "charles zhang":
			output = "<strong>Charles Zhang</strong> is a hella chill dude. One day I wish I can grow up to be just like him. I'll alway cherish my time sitting next to him in German. #nohomo #waityeshomo #waitwut";
			break;
		case "varun naik":
			output = "<strong>Varun Naik</strong> is my hella dark friend. Other than be hella dark, he enjoys being a god and getting paid $40 an hour. Also he taught me how to properly scoop curry with naan. The man, the myth, the legend. Varun.";
			break;
		case "krista kurisaki":
			output = "<strong>Krista Kurisaki</strong> is my only friend from socal in the house (from floor 2)! She's hella chill and always happy, everyone should be more like her. YAY! #SocalBestcal";
			break;
		case "sameer nayak":
			output = "<strong>Sameer Nayak</strong> is a really nice and genuine guy from socal! (woo socal!) He's really easy to talk to and an all around awesome guy, you should definitely take the time to say hi to him whenever you're free. Also, he's pretty funny, you should catch him at one of his theater rice shows!";
			break;
		case "leo kwan":
			output = "<strong>Leo Kwan</strong>, the ruler of the shower. He's the one who taught me how to play league. I wouldn't be as OP without him. Seriously, I'm so good because of him that riot doesn't let me play anymore, why else would I have not played in like months?";
			break;
		case "clifford cheng":
			output = "<strong>Clifford Cheng</strong> is my hella chill roommate! He's really a nice guy and easy to talk to. I'm hella lucky to have him as a roommate! Don't be jelly.";
			break;
		case "ivan chau":
			output = "<strong>Ivan Chau</strong> is hella chill. Many refer to him as 'The God', but I tend to think he's just an ordinary man. An ordinary man who can who secretly fights crime. Why else is he never at the house???";
			break;
		case "jocelyn kuswanto":
			output = "<strong>Jocelyn Kuswanto</strong> is a really nice girl who is awesome to sit next to in ee20. Thank god we'll never have to take that class again.... Anyway, she's really easy to talk to and I highly recommending that you go say hi to her whenever you see her!";
			break;
		case "catherine li":
			output = "<strong>Catherine Li</strong>, the girl who saved me hours and hours of my life by helping me in chem1al. She's also hella chill and better than leo kwan at beer pong!";
			break;
		case "patrick truong":
			output = "<strong>Patrick Truong/strong> is a hella chill guy from socal. He's great to talk to, always interesting conversations. One of the chillest, calmest guys I've met at berkeley, you should really get to know him!";
			break;
		case "james maa":
			output = "<strong>James Maa</strong> is a computer programming god. He's also easy to talk to and has some interesting things to say, hit him up if you're in the mood for an interesting conversation!";
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
    	div.innerHTML = "guest@terencecho.com:~$&nbsp&nbsp" + command;
    	output.appendChild(div);
	}
};

//for blinking cursor
$(function () {
    var cursor;
    $('#cmd').click(function () {
        $('#command').focus();
        cursor = window.setInterval(function () {
            if ($('#cursor').css('visibility') === 'visible') {
                $('#cursor').css({
                    visibility: 'hidden'
                });
            } else {
                $('#cursor').css({
                    visibility: 'visible'
                });
            }
        }, 500);

    });

    $('#command').keyup(function () {
        $('#cmd span').text("guest@terencecho.com:~$  "+ $(this).val());
    });

    $('#command').blur(function () {
        clearInterval(cursor);
        $('#cursor').css({
            visibility: 'visible'
        });
    });
});