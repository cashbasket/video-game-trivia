var questions = [
	{
		questionText: 'What is the name of the main world in World of Warcraft?',
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
				answerText: 'infinite',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'Which Mario game was the first to feature the character Yoshi?',
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
		options: [{ 
				answerText: 'Soda Popinski',
				isCorrect: false
			},
			{
				answerText: 'Bald Bull',
				isCorrect: false
			},
			{
				answerText: 'Mr. Dream',
				isCorrect: true
			},
			{
				answerText: 'Super Macho Man',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'The composer for the soundtrack of the video game "Quake" is also the mastermind behind what famous band?',
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
		options: [{ 
				answerText: 'Nintendo Entertainment System',
				isCorrect: false
			},
			{
				answerText: 'Game Boy',
				isCorrect: false
			},
			{
				answerText: 'Super Nintendo Entertainment System',
				isCorrect: true
			},
			{
				answerText: 'Virtual Boy',
				isCorrect: false
			}
		]
	},
	{
		questionText: 'Which video game featured voice work by legendary Faith No More vocalist Mike Patton?',
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
		options: [{ 
				answerText: 'I-D-D-Q-D',
				isCorrect: false
			},
			{
				answerText: 'I-D-C-L-I-P',
				isCorrect: false
			},
			{
				answerText: 'I-D-K-F-A',
				isCorrect: true
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
	isGameOver: false,
	init: function() {
		this.remainingQuestions = questions.slice(0);
		this.getAndDisplayQuestion();
		$('#endDisplay').hide();
	},
	reset: function() {
		this.remainingQuestions = questions.slice(0);
		this.correctAnswers = 0;
		this.incorrectAnswers = 0;
		this.isGameOver = false;
		$('#endDisplay').hide();
		$('#options').empty();
		this.getAndDisplayQuestion();
	},
	getAndDisplayQuestion: function() {
		$('#resultDisplay').hide();
		$('#questionDisplay').show();
		var randomQuestionIndex = getRandomInt(0, this.remainingQuestions.length - 1);
		this.currentQuestion = this.remainingQuestions[randomQuestionIndex];
        this.remainingQuestions.splice(randomQuestionIndex, 1);

        $('#questionText').text(this.currentQuestion.questionText);

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
       		var optionDiv = $('<div>').text(this.currentQuestion.options[randomOptionIndex].answerText);
       		var rbOption = $('<input type="radio" />').attr('id', randomOptionIndex).attr('name', 'q' + randomQuestionIndex).attr('value', randomOptionIndex).addClass('rb-answer');
       		$('#options').append(optionDiv.prepend(rbOption));
        }
	},
	processAnswer: function(questionIndex, answerIndex) {
		var correct;
		var correctAnswerText;
		if(this.currentQuestion.options[answerIndex].isCorrect) {
			this.correctAnswers++;
			correct = true;
		}
		else {
			this.incorrectAnswers++;
			for(var i = 0 ; i < this.currentQuestion.options.length - 1; i++) {
				if(this.currentQuestion.options[i].isCorrect) {
					correctAnswerText = this.currentQuestion.options[i].answerText;
					break;
				}
			}
			correct = false;
		}
		if(this.remainingQuestions.length > 0) {
			//TO-DO: show results for question
			$('#questionDisplay').hide();
			$('#resultDisplay').show();

			if(correct) {
				$('#resultText').text('You got it right!');
			}
			else {
				$('#resultText').text('Sorry, the correct answer was "' + correctAnswerText + '."');
			}
			var seconds = 1;  
			$('#countDown').text(seconds);         
            seconds--;
            var countDown = setInterval(function() {
                $('#countDown').text(seconds);
                if (seconds == 0) {
                    clearInterval(countDown);
                   $('#options').empty();
					game.getAndDisplayQuestion();	
                }
                seconds--;
            }, 1000);
		}
		else {
			this.isGameOver = true;
			$('#questionDisplay').hide();
			$('#endDisplay').show();
			$('#endText').text("The game is over!");
			$('#correctTotal').text(this.correctAnswers);
			$('#incorrectTotal').text(this.incorrectAnswers);
		}
	}
};

$(document).ready(function() {
	game.init();
	$('body').on('click', '.rb-answer', function() {
		game.processAnswer($('#question').attr('id'), $(this).attr('id'));
	});
	$('body').on('click', 'button#resetButton', function() {
		game.reset();
	});
});