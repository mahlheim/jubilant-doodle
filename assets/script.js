var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");
var questionSection = document.querySelector("#question");
var answerSection = document.querySelector("#answers")
var resultMessage = document.querySelector("#result");

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

function init() {
    getWins();
    getlosses();
  }
  
  // The startGame function is called when the start button is clicked
  function startGame() {
    //timerCount = 60;
    // // Prevents start button from being clicked when round is in progress
    // startButton.disabled = true;
    question1()
    startTimer()
  }
  
  // answer question correctly 
  function correctAnswer() {
    answerSection.textContent = "Correct! :)"
    correctCounter++
  }

  // answer question incorrectly
  function wrongAnswer() {
    answerSection.textContent = "Incorrect! :("
    wrongCounter++
  }

//   // The winGame function is called when the win condition is met
//   function winGame() {
//     wordBlank.textContent = "YOU WON!!!🏆 ";
//     winCounter++
//     startButton.disabled = false;
//     setWins()
//   }
  
//   // The loseGame function is called when timer reaches 0
//   function loseGame() {
//     wordBlank.textContent = "GAME OVER";
//     loseCounter++
//     startButton.disabled = false;
//     setLosses()
//   }
  
  // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
//   function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {
//         // Tests if win condition is met
//         if (isWin && timerCount > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//           winGame();
//         }
//       }
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000);
//   }
  
    // Question 1 - answer TRUE
    function question1() {
    var questionOne = "A <footer> element appears at the bottom of a page."
    var answerOne = "true"
    var answerTwo = "false"
    questionSection.textContent = questionOne;

    var buttonOne = document.createElement("button");
    main.appendChild(buttonOne);
    buttonOne.textContent = answerOne;

    var buttonTwo = document.createElement("button");
    main.appendChild(buttonTwo);
    buttonOne.textContent = answerTwo;

    buttonOne.addEventListener("click", function(event) {
        correctAnswer();
        question2();
    });

    buttonTwo.addEventListener("click", function(event) {
        wrongAnswer();
        question2();
    });
    }

    // Question 2 - answer FALSE
    function question2() { 
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
    }

    // Question 3 - answer FALSE
    function question3() {
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
    }

    // Question 4 - answer TRUE
    function question4 () {
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
  
  // Updates win count on screen and sets win count to client storage
  function setWins() {
    win.textContent = correctCounter;
    localStorage.setItem("winCount", correctCounter);
  }
  
  // Updates lose count on screen and sets lose count to client storage
  function setLosses() {
    lose.textContent = wrongCounter;
    localStorage.setItem("loseCount", wrongCounter);
  }
  
  // These functions are used by init
  function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
      winCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
  }
  
  function getlosses() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
      loseCounter = 0;
    } else {
      loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
  }
  
  function checkWin() {
    // If the word equals the blankLetters array when converted to string, set isWin to true
    if (chosenWord === blanksLetters.join("")) {
      // This value is used in the timer function to test if win condition is met
      isWin = true;
    }
  }
  
  
  // Attach event listener to start button to call startGame function on click
  startButton.addEventListener("click", startGame);