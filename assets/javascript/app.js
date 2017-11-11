var questions = [
	{
		questionText: 'What is the name of the humans\' homeworld in World of Warcraft?',
		questionImage: 'azeroth.jpg',
		options: [{ 
				answerText: 'Azeroth',
				isCorrect: true
			},
			{
				answerText: 'Middle Earth',
				isCorrect: false
			},
			{
				answerText: 'Gorgoroth',
				isCorrect: false
			},
			{
				answerText: 'Oakland',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'In the video game "Contra," how many lives does the infamous "Konami Code" give you?',
		questionImage: 'contra.jpg',
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
		questionImage: 'yoshi.jpg',
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
		questionText: 'What is the name of the main villain in the Legend of Zelda series?',
		questionImage: 'ganon.png',
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
		questionText: 'In the Metroid series, what is the name of the player character?',
		questionImage: 'samus.jpg',
		options: [{ 
				answerText: 'Toad',
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
				answerText: 'Jimmy Carter',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'What was the name of the end boss in the video game "Punch-Out" AFTER Mike Tyson was removed from the game?',
		questionImage: 'mr-dream.jpg',
		options: [{ 
				answerText: 'Soda Popinski',
				isCorrect: false
			},
			{
				answerText: 'Mr. Dream',
				isCorrect: true
			},
			{
				answerText: 'Bald Bull',
				isCorrect: false
			},
			{
				answerText: 'Super Macho Man',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'The composer for the soundtrack of the video game "Quake" is also the mastermind behind what famous band?',
		questionImage: 'nine-inch-nails.jpg',
		options: [{ 
				answerText: 'Marilyn Manson',
				isCorrect: false
			},
			{
				answerText: 'Filter',
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
		questionText: 'Which Nintendo system was released in 1991?',
		questionImage: 'snes.jpg',
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
		questionImage: 'the-darkness.jpg',
		options: [{ 
				answerText: 'Resident Evil 5',
				isCorrect: false
			},
			{
				answerText: 'Silent Hill',
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
		questionImage: 'doom.jpg',
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

var game = {
	remainingQuestions: [],
	currentQuestion: {},
	correctAnswers: 0,
	incorrectAnswers: 0,
	unanswered: 0,
	isGameOver: false,
	qCountDown: 0,

	init: function() {
		this.remainingQuestions = questions.slice(0);
		$('#questionDisplay, #resultDisplay, #endDisplay').hide();
	},
	reset: function() {
		this.remainingQuestions = questions.slice(0);
		this.correctAnswers = 0;
		this.incorrectAnswers = 0;
		this.unanswered = 0;
		this.isGameOver = false;
		$('#endDisplay').hide();
		$('#options').empty();
		$('#introDisplay').show();
	},
	getAndDisplayQuestion: function() {
		$('#introDisplay, #resultDisplay').hide();
		$('#questionDisplay').show();

		var randomQuestionIndex = getRandomInt(0, this.remainingQuestions.length - 1);
		this.currentQuestion = this.remainingQuestions[randomQuestionIndex];
        this.remainingQuestions.splice(randomQuestionIndex, 1);

        $('#questionText').html('<h2>' + this.currentQuestion.questionText + '</h2>');

        // all this crap does is randomize the order of the answers, and then display them
        var optionsLeft = this.currentQuestion.options.slice(0);
        var optionsUsed = [];
        for(var i = 0; i < optionsLeft.length; i++) {
        	var randomOptionIndex = getRandomInt(0, optionsLeft.length - 1);      	

        	while(true) {
	        	if(optionsUsed.includes(randomOptionIndex)) {
	        		randomOptionIndex = getRandomInt(0, optionsLeft.length - 1);
	        	}
	        	else {
	        		break;
	        	}
	        }
     		optionsUsed.push(randomOptionIndex);
       		var optionDiv = $('<div class="option-div">');
       		var option = $('<a>').attr('data-id', randomOptionIndex).addClass('answer').text(this.currentQuestion.options[randomOptionIndex].answerText);
       		$('#options').append(optionDiv.append(option));
        }
        var seconds = 30;  
		$('#qCountDown').text(seconds);         
        seconds--;

        this.qCountDown = setInterval(function() {
            $('#qCountDown').text(seconds);
            if (seconds == 0) {
                clearInterval(this.qCountDown);
               $('#options').empty();
				game.processAnswer(randomQuestionIndex, -1);	
            }
            seconds--;
        }, 1000);
	},
	processAnswer: function(questionIndex, answerIndex) {
		var status;
		var correctAnswerText = '';

		//clear the question timer and the image div!
		clearInterval(this.qCountDown);
		$('#answerImage').empty();

		if(answerIndex >= 0 && this.currentQuestion.options[answerIndex].isCorrect) {
			this.correctAnswers++;
			status = 'correct';
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
		}

		for(var i = 0 ; i < this.currentQuestion.options.length; i++) {
			if(this.currentQuestion.options[i].isCorrect) {
				correctAnswerText = this.currentQuestion.options[i].answerText;
				break;
			}
		}

		console.log(correctAnswerText);

		$('#questionDisplay').hide();
		$('#resultDisplay').show();

		if(status === 'correct') {
			$('#resultTextIntro').text('You got it right! ');
		}
		else if (status === 'incorrect') {
			$('#resultTextIntro').text('Sorry, you got it wrong. ');
		}
		else {
			$('#resultTextIntro').text('You ran out of time! ');
		}
		$('#resultText').text('The correct answer is "' + correctAnswerText + '."');

		var img = $('<img />').attr('src', 'assets/images/' + this.currentQuestion.questionImage).attr('alt', 'Image of the correct answer').addClass('img-responsive');
		$('#answerImage').append(img);

		// one biiiiig setInterval
		var seconds = 7;  
		if(game.remainingQuestions.length > 0) {
    		$('#countDownIntro').text('Time until next question: ');
    	}
    	else {
    		$('#countDownIntro').text('Time until results screen: ');
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
					game.isGameOver = true;
					$('#questionDisplay, #resultDisplay').hide();
					$('#endDisplay').show();
					$('#endText').text("The game is over!");
					$('#correctTotal').text(game.correctAnswers);
					$('#incorrectTotal').text(game.incorrectAnswers);
					$('#unansweredTotal').text(game.unanswered);
				}	
            }
            else {
            	seconds--;
            }
        }, 1000);
	}
};

$(document).ready(function() {
	game.init();
	$('body').on('click', 'button#startButton', function() {
		game.getAndDisplayQuestion();
	});
	$('body').on('click', '.answer', function() {
		game.processAnswer($('#question').attr('id'), $(this).attr('data-id'));
	});
	$('body').on('click', 'button#resetButton', function() {
		game.reset();
	});
});