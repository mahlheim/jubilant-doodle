var timerElement = document.querySelector("#timer-count");
var questionSection = document.querySelector("#question");
var answerSection = document.querySelector("#answers");
var resultMessage = document.querySelector("#result");
var initiateGame = document.querySelector("#initiate-game")


var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timerCount;

  var pageLoad = function() {
    var titleText = "Code Quiz!";
    var startText = "Start";
    var title = document.createElement('h1');
    var startButton = document.createElement('button');
    initiateGame.appendChild(title);
    initiateGame.appendChild(startButton);
    title.textContent = titleText;
    startButton.textContent = startText;
    startButton.addEventListener("click", function() {
      initiateGame.removeChild(title);
      initiateGame.removeChild(startButton);
      startGame();
    }
    );
  }


  

  
  // The startGame function is called when the start button is clicked
  function startGame() {
    //timerCount = 60;
    questions()
    startTimer()
  }
  
  // // answer question correctly 
  // function correctAnswer() {
  //   answerSection.textContent = "Correct! :)"
  //   correctCounter++
  // }

  // // answer question incorrectly
  // function wrongAnswer() {
  //   answerSection.textContent = "Incorrect! :("
  //   wrongCounter++
  // }
  
  // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
  function startTimer() {
    // Sets timer
     var timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
  
    // Question 1 - answer TRUE
    function questions() {
    var questionOne = "A <footer> element appears at the bottom of a page."
    var answerOne = "true"
    var answerTwo = "false"
    questionSection.textContent = questionOne;

    var buttonOne = document.createElement("button");
    answerSection.appendChild(buttonOne);
    buttonOne.textContent = answerOne;

    var buttonTwo = document.createElement("button");
    answerSection.appendChild(buttonTwo);
    buttonOne.textContent = answerTwo;

    buttonOne.addEventListener("click", function(event) {
        correctAnswer();
        question2();
    });
   
     buttonTwo.addEventListener("click", function(event) {
        wrongAnswer();
        question2();
    });

    // Question 2 - answer FALSE
    var questionTwo = "A <head> element contains data that is visible in the browser."
    var answerOne = "true"
    var answerTwo = "false"
    questionSection.textContent = questionTwo;

    var buttonOne = document.createElement("button");
    main.appendChild(buttonOne);
    buttonOne.textContent = answerOne;

    var buttonTwo = document.createElement("button");
    main.appendChild(buttonTwo);
    buttonOne.textContent = answerTwo;

    buttonOne.addEventListener("click", function(event) {
        wrongAnswer();
        question3();
    });

    buttonTwo.addEventListener("click", function(event) {
        correctAnswer();
        question3();
    });

    // Question 3 - answer FALSE
    var questionThree = "A boolean value allows you to store multiple values in a single reference."
    var answerOne = "true"
    var answerTwo = "false"
    questionSection.textContent = questionThree;

    var buttonOne = document.createElement("button");
    main.appendChild(buttonOne);
    buttonOne.textContent = answerOne;

    var buttonTwo = document.createElement("button");
    main.appendChild(buttonTwo);
    buttonOne.textContent = answerTwo;

    buttonOne.addEventListener("click", function(event) {
        wrongAnswer();
        question4();
    });

    buttonTwo.addEventListener("click", function(event) {
        correctAnswer();
        question4();
    });

    // Question 4 - answer TRUE
    var questionFour = "Loops perform repeated tasks based on a condition and run until a specific condition is met."
    var answerOne = "true"
    var answerTwo = "false"
    questionSection.textContent = questionFour;

    var buttonOne = document.createElement("button");
    main.appendChild(buttonOne);
    buttonOne.textContent = answerOne;

    var buttonTwo = document.createElement("button");
    main.appendChild(buttonTwo);
    buttonOne.textContent = answerTwo;

    buttonOne.addEventListener("click", function(event) {
        correctAnswer();
    });

    buttonTwo.addEventListener("click", function(event) {
        correctAnswer();
    });
  }
  // Invites player to start quiz
  pageLoad();
  
 