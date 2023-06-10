// references elements in the html 
var timerElement = document.querySelector("#timer-count");
var questionSection = document.querySelector("#question");
var answerSection = document.querySelector("#answers");
var resultMessage = document.querySelector("#result");
var initiateGame = document.querySelector("#initiate-game")


var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timerCount;

  // titles the page "Code Quiz" and creates the start button that triggers the quiz upon click
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
    });
  }
  
  // // The startGame function is called when the start button is clicked
  var startGame = function() {
  //   //timerCount = 60;
    question1()
  //   startTimer()
  }
  
  // // // answer question correctly 
  var correctAnswer = function() {
    answerSection.textContent = "Correct! :)"
  // //   correctCounter++
  }

  // // // answer question incorrectly
  var wrongAnswer = function() {
    answerSection.textContent = "Incorrect! :("
  // //   wrongCounter++
  }
  
  // // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
  // function startTimer() {
  //   // Sets timer
  //    var timer = setInterval(function() {
  //     timerCount--;
  //     timerElement.textContent = timerCount;
  //     if (timerCount >= 0) {
  //       // Tests if win condition is met
  //       if (isWin && timerCount > 0) {
  //         // Clears interval and stops timer
  //         clearInterval(timer);
  //         winGame();
  //       }
  //     }
  //     // Tests if time has run out
  //     if (timerCount === 0) {
  //       // Clears interval
  //       clearInterval(timer);
  //       loseGame();
  //     }
  //   }, 1000);
  // }
  
    // Runs the questions
    var question1 = function() {
      // creates true and false answer buttons
    var answerOne = "true"
    var answerTwo = "false"
    
    var buttonOne = document.createElement("button");
    answerSection.appendChild(buttonOne);
    buttonOne.textContent = answerOne;

    var buttonTwo = document.createElement("button");
    answerSection.appendChild(buttonTwo);
    buttonTwo.textContent = answerTwo;

    // runs first question - answer TRUE
    var questionOne = "A <footer> element appears at the bottom of a webpage."
    questionSection.textContent = questionOne;

    buttonOne.addEventListener("click", function() {
      if (buttonOne.click) {
        correctAnswer();
        question2();
      }
    });

    buttonTwo.addEventListener("click", function() {
      if (buttonTwo.click) {
        wrongAnswer();
        question2();
      } 
    });
  }
    

    var question2 = function() {
      // creates true and false answer buttons
      var answerOne = "true"
      var answerTwo = "false"
    
      var buttonOne = document.createElement("button");
      answerSection.appendChild(buttonOne);
      buttonOne.textContent = answerOne;

      var buttonTwo = document.createElement("button");
      answerSection.appendChild(buttonTwo);
      buttonTwo.textContent = answerTwo;

      // runs second question - answer FALSE
      var questionTwo = "A <head> element contains data that is visible in the browser."
      questionSection.textContent = questionTwo;

      buttonOne.addEventListener("click", function() {
        if (buttonOne.click) {
          wrongAnswer();
          question3();
        } 
      });

      buttonTwo.addEventListener("click", function() {
        if (buttonTwo.click) {
          correctAnswer();
          question3();
        }
      });
    }


    var question3 = function() {
      // creates true and false answer buttons
      var answerOne = "true"
      var answerTwo = "false"
        
      var buttonOne = document.createElement("button");
      answerSection.appendChild(buttonOne);
      buttonOne.textContent = answerOne;
    
      var buttonTwo = document.createElement("button");
      answerSection.appendChild(buttonTwo);
      buttonTwo.textContent = answerTwo;

      // runs third question - answer FALSE
      var questionThree = "A boolean value allows you to store multiple values in a single reference."
      questionSection.textContent = questionThree;

      buttonOne.addEventListener("click", function() {
        if (buttonOne.click) {
          wrongAnswer();
          question4();
        } 
      });

      buttonTwo.addEventListener("click", function() {
        if (buttonTwo.click) {
          correctAnswer();
          question4();
        }
      });
    }

    var question4 = function() {
     // creates true and false answer buttons
     var answerOne = "true"
     var answerTwo = "false"
       
     var buttonOne = document.createElement("button");
     answerSection.appendChild(buttonOne);
     buttonOne.textContent = answerOne;
   
     var buttonTwo = document.createElement("button");
     answerSection.appendChild(buttonTwo);
     buttonTwo.textContent = answerTwo;

      // runs fourth question - answer TRUE
      var questionFour = "Loops perform repeated tasks based on a condition and run until a specific condition is met."
      questionSection.textContent = questionFour;
      buttonOne.addEventListener("click", function() {
        if (buttonOne.click) {
          correctAnswer();
        }
      });
  
      buttonTwo.addEventListener("click", function() {
        if (buttonTwo.click) {
          wrongAnswer();
        } 
      });
    }

  // calls the function that titles the webpage and invites player to start quiz
  pageLoad();
  
 