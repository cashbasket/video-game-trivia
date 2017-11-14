var questions = [{
		questionText: 'What is the name of the humans\' homeworld in World of Warcraft?',
		questionImage: 'assets/images/azeroth.gif',
		options: [{ 
				answerText: 'Azeroth',
				isCorrect: true
			},
			{
				answerText: 'Northrend',
				isCorrect: false
			},
			{
				answerText: 'Gorgoroth',
				isCorrect: false
			},
			{
				answerText: 'Draenor',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'In the video game "Contra," how many lives does the infamous "Konami Code" give you?',
		questionImage: 'assets/images/contra.gif',
		options: [{ 
				answerText: '10',
				isCorrect: false
			},
			{
				answerText: '99',
				isCorrect: false
			},
			{
				answerText: '30',
				isCorrect: true
			},
			{
				answerText: 'Infinite',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'Which Mario game was the first to feature the character Yoshi?',
		questionImage: 'assets/images/yoshi.gif',
		options: [{ 
				answerText: 'Super Mario World',
				isCorrect: true
			},
			{
				answerText: 'Super Mario Bros. 3',
				isCorrect: false
			},
			{
				answerText: 'Super Mario Land',
				isCorrect: false
			},
			{
				answerText: 'Super Mario Galaxy',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'What is the name of the main villain in the "Legend of Zelda" series of games?',
		questionImage: 'assets/images/ganon.gif',
		options: [{ 
				answerText: 'Ganon',
				isCorrect: true
			},
			{
				answerText: 'Agahnim',
				isCorrect: false
			},
			{
				answerText: 'Bowser',
				isCorrect: false
			},
			{
				answerText: 'Mother Brain',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'In the "Metroid" series, what is the name of the character you play as?',
		questionImage: 'assets/images/samus.gif',
		options: [{ 
				answerText: 'Cloud Strife',
				isCorrect: false
			},
			{
				answerText: 'Simon Belmont',
				isCorrect: false
			},
			{
				answerText: 'Samus Aran',
				isCorrect: true
			},
			{
				answerText: 'Ellen Ripley',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'In "Mike Tyson\'s Punch-Out!!" what is the name of the enemy you face immediately BEFORE facing Mike Tyson?',
		questionImage: 'assets/images/macho-man.gif',
		options: [{ 
				answerText: 'Soda Popinski',
				isCorrect: false
			},
			{
				answerText: 'Mr. Dream',
				isCorrect: false
			},
			{
				answerText: 'Bald Bull',
				isCorrect: false
			},
			{
				answerText: 'Super Macho Man',
				isCorrect: true
			}
		]
	},
	{
		questionText: 'The composer for the soundtrack of the video game "Quake" is also the mastermind behind what highly influential  band?',
		questionImage: 'assets/images/nin.gif',
		options: [{ 
				answerText: 'Marilyn Manson',
				isCorrect: false
			},
			{
				answerText: 'Skinny Puppy',
				isCorrect: false
			},
			{
				answerText: 'Nine Inch Nails',
				isCorrect: true
			},
			{
				answerText: 'KMFDM',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'Which Nintendo system was released in the United States in 1991?',
		questionImage: 'assets/images/snes.gif',
		options: [{ 
				answerText: 'Nintendo Entertainment System',
				isCorrect: false
			},
			{
				answerText: 'Game Boy',
				isCorrect: false
			},
			{
				answerText: 'Virtual Boy',
				isCorrect: false
			},
			{
				answerText: 'Super Nintendo Entertainment System',
				isCorrect: true
			}
		]
	},
	{
		questionText: 'Which video game featured voice work by legendary Faith No More vocalist Mike Patton?',
		questionImage: 'assets/images/the-darkness.jpg',
		options: [{ 
				answerText: 'Resident Evil 5',
				isCorrect: false
			},
			{
				answerText: 'Silent Hill 3',
				isCorrect: false
			},
			{
				answerText: 'The Darkness',
				isCorrect: true
			},
			{
				answerText: 'Halo 2',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'What was the code for infinite ammo in the video game "Doom"?',
		questionImage: 'assets/images/doom.gif',
		options: [{
				answerText: 'I-D-K-F-A',
				isCorrect: true
			},
			{ 
				answerText: 'I-D-D-Q-D',
				isCorrect: false
			},
			{
				answerText: 'I-D-C-L-I-P',
				isCorrect: false
			},
			{
				answerText: 'I-D-S-P-I-S-P-O-P-D',
				isCorrect: false
			}
		]
	}
];

//global math functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myAssets = [];
//function for preloading images and audio
function preloadAssets() {
	for (i = 0; i < preloadAssets.arguments.length; i++){
		var currentAssetSplit = preloadAssets.arguments[i].split('.');
		var ext = currentAssetSplit.pop();
		if(ext === 'jpg' || ext === 'gif' || ext === 'png') {
			myAssets[i] = new Image();
		}
		else {
			myAssets[i] = new Audio();
		}
		myAssets[i].src = preloadAssets.arguments[i];
	}
}

var game = {
	remainingQuestions: [],
	currentQuestion: {},
	correctAnswers: 0,
	incorrectAnswers: 0,
	unanswered: 0,
	qCountDown: 0,
	questionNum: 1,
	init: function() {
		//create audio element
		var audio = document.createElement('audio');
		audio.id = 'audio';
		$('body').prepend(audio);
		this.remainingQuestions = questions.slice(0);
		var star = $('<img />').attr('src','assets/images/star.gif').attr('alt','Image of a rotating star').addClass('star');
		$(star).appendTo('h1').clone().prependTo('h1');
	},
	reset: function() {
		this.remainingQuestions = questions.slice(0);
		this.correctAnswers = 0;
		this.incorrectAnswers = 0;
		this.unanswered = 0;
		this.questionNum = 1;
		$('h1').show();
		$('#endDisplay, h2#questionHeader').addClass('hidden');
		$('#options, #endImage').empty();
		$('#introDisplay').removeClass('hidden');
	},
	getAndDisplayQuestion: function() {
		$('h1').hide();
		$('h2').removeClass('hidden').text('Question #' + this.questionNum).addClass('ivory').show();
		$('#introDisplay, #resultDisplay').addClass('hidden');
		$('#questionDisplay').removeClass('hidden');

		var randomQuestionIndex = getRandomInt(0, this.remainingQuestions.length - 1);
		this.currentQuestion = this.remainingQuestions[randomQuestionIndex];
        this.remainingQuestions.splice(randomQuestionIndex, 1);

        $('#questionText').html('<h3>' + this.currentQuestion.questionText + '</h3>');

        // all this crap does is randomize the order of the answers, and then display them
        var optionsUsed = [];
        for(var i = 0; i < this.currentQuestion.options.length; i++) {
        	var randomOptionIndex = getRandomInt(0, this.currentQuestion.options.length - 1);      	

        	while(true) {
	        	if(optionsUsed.includes(randomOptionIndex)) {
	        		randomOptionIndex = getRandomInt(0, this.currentQuestion.options.length - 1);
	        	}
	        	else {
	        		break;
	        	}
	        }
     		optionsUsed.push(randomOptionIndex);
       		var optionDiv = $('<div class="option-div">');
       		var option = $('<button>').attr('data-id', randomOptionIndex).addClass('answer btn btn-option').text(this.currentQuestion.options[randomOptionIndex].answerText);
       		$('#options').append(optionDiv.append(option));
        }

        var seconds = 30;  
		$('#qCountDown').text(seconds);         
        seconds--;

        this.qCountDown = setInterval(function() {
            $('#qCountDown').text(seconds);
            if (seconds <= 10) {
            	$('#qCountDown').addClass('red');
            }
            if (seconds == 0) {
                clearInterval(this.qCountDown);
               $('#options').empty();
				game.processAnswer(-1);	
            }
            seconds--;
        }, 1000);
	},
	processAnswer: function(answerIndex) {
		$('h1').hide();
		$('h2').addClass('hidden');
		$('#qCountDown').removeClass('red');
		var status, correctAnswerText;

		//clear the question timer and the image div!
		clearInterval(this.qCountDown);
		$('#answerImage').empty();

		if(answerIndex >= 0 && this.currentQuestion.options[answerIndex].isCorrect) {
			this.correctAnswers++;
			status = 'correct';
			this.playSound('correct');
		}
		else {
			if (answerIndex >= 0) {
				this.incorrectAnswers++;
				status = 'incorrect';
			}
			else {
				this.unanswered++;
				status = 'unanswered';
			}
			this.playSound('incorrect');
		}

		for(var i = 0 ; i < this.currentQuestion.options.length; i++) {
			if(this.currentQuestion.options[i].isCorrect) {
				correctAnswerText = this.currentQuestion.options[i].answerText;
				break;
			}
		}

		$('#questionDisplay').addClass('hidden');
		$('#resultDisplay').removeClass('hidden');

		if(status === 'correct') {
			$('#resultTextIntro').text('You got it right! ').removeClass('red').addClass('green');
		}
		else if (status === 'incorrect') {
			$('#resultTextIntro').text('Sorry, you got it wrong. ').removeClass('green').addClass('red');
		}
		else {
			$('#resultTextIntro').text('You ran out of time! ').removeClass('green').addClass('red');
		}
		$('#resultText').text('The correct answer is "' + correctAnswerText + '."');

		var img = $('<img />').attr('src', this.currentQuestion.questionImage).attr('alt', 'Image of the correct answer').addClass('img-responsive');
		$('#answerImage').append(img);

		var seconds = 6;  
		if(game.remainingQuestions.length > 0) {
    		$('#countDownIntro').text('Next question in: ');
    	}
    	else {
    		$('#countDownIntro').text('Results in: ');
    	}
    	$('#countDown').text(seconds);
        seconds--;
        var countDown = setInterval(function() {
            $('#countDown').text(seconds);
            if (seconds == 0) {
                clearInterval(countDown);
				$('#options').empty();

                if(game.remainingQuestions.length > 0) {
			  		game.getAndDisplayQuestion();
				}
				else {
					game.endGame();			
				}	
            }
            else {
            	seconds--;
            }
        }, 1000);
        this.questionNum++;
	},
	endGame: function() {
		$('#questionDisplay, #resultDisplay').addClass('hidden');
		$('#endDisplay').removeClass('hidden');
		$('#correctTotal').text(this.correctAnswers);
		$('#incorrectTotal').text(this.incorrectAnswers);
		$('#unansweredTotal').text(this.unanswered);

		var img = $('<img />').addClass('img-responsive');
		if(this.correctAnswers > 7) {
			img.attr('src', 'assets/images/a-winner-is-you.gif').attr('alt', 'A winner is you!');
			$('#endText').text('You clearly know your video games. Nice work!');
			this.playSound('cheer');
		}
		else if (this.correctAnswers <= 7 && this.correctAnswers >=5) {
			img.attr('src', 'assets/images/noid.gif').attr('alt', 'Image of the Noid');
			$('#endText').text('Meh. You did an adequate job, I\'d say.');
			this.playSound('meh');
		}
		else {
			img.attr('src','assets/images/duck-hunt.gif').attr('alt', 'Image of laughing dog');
			$('#endText').text('Yeesh... you\'re pretty bad at this.');
			this.playSound('boo');
		}
		$('#endImage').append(img);	
	},
	playSound: function(type) {
		var audio = document.getElementById('audio');
		switch (type) {
			case 'correct':
				audio.src = 'assets/wav/smb_coin.wav';
				break;
			case 'incorrect':
				audio.src = 'assets/wav/smb_bump.wav';
				break;
			case 'cheer':
				audio.src = 'assets/wav/smb_stage_clear.wav';
				break;
			case 'meh':
				audio.src = 'assets/wav/smb_mariodie.wav';
				break;
			case 'boo':
				audio.src = 'assets/wav/smb_gameover.wav';
				break;
		}
		audio.play();
	}
};

//do the actual preloading
preloadAssets('assets/images/star.gif',	'assets/images/a-winner-is-you.gif', 'assets/images/azeroth.gif', 'assets/images/contra.gif', 'assets/images/doom.gif',	'assets/images/duck-hunt.gif', 'assets/images/ganon.gif', 'assets/images/macho-man.gif', 'assets/images/nes.gif', 'assets/images/nin.gif', 'assets/images/noid.gif', 'assets/images/samus.gif',	'assets/images/snes.gif', 'assets/images/the-darkness.jpg', 'assets/images/yoshi.gif','assets/wav/smb_gameover.wav', 'assets/wav/smb_mariodie.wav','assets/wav/smb_stage_clear.wav','assets/wav/smb_coin.wav','assets/wav/smb_bump.wav');

$(document).ready(function() {
	game.init();
	$('body').on('click', 'button#startButton', function() {
		game.getAndDisplayQuestion();
	});
	$('body').on('click', '.answer', function() {
		game.processAnswer($(this).attr('data-id'));
	});
	$('body').on('click', 'button#resetButton', function() {
		game.reset();
	});
});