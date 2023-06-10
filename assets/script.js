// references elements in the html 
var timerElement = document.querySelector("#timer-count");
var questionSection = document.querySelector("#question");
var answerSection = document.querySelector("#answers");
var resultMessage = document.querySelector("#result");
var initiateGame = document.querySelector("#initiate-game")
var end = document.querySelector("#end")



var correctCounter = 0;
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
  
  // The startGame function is called when the start button is clicked
  var startGame = function() {
  //timerCount = 60;
    question1()
    // startTimer()
  }
  
  // determines what happens when a question is answered correctly
  var correctAnswer = function() {
    correctCounter++
    resultMessage.textContent = "Correct! :)";
  }

  // determines what happens when a question is answered incorrectly
  var wrongAnswer = function() {
    resultMessage.textContent = "Incorrect! :(";
  }

  // sets correct count to client storage
  var setCorrects = function() {
    localStorage.setItem("correctCount", correctCounter);
  }

  var done = function() {
    resultMessage.textContent = "";
    var finishedMessage = "All done! Out of 5 possible points, you earned ";
    var finalScore = localStorage.getItem("correctCount");
    questionSection.textContent = finishedMessage + finalScore + "!";
    
    var nameInput = document.createElement("textarea")
    answerSection.appendChild(nameInput);
    nameInput.placeholder = "Enter your name!"
    var name = nameInput.value;

    var submitButton = document.createElement("button");
    answerSection.appendChild(submitButton);
    submitButton.textContent = "Submit";

    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      answerSection.removeChild(nameInput);
      answerSection.removeChild(submitButton);

      questionSection.textContent = "High Scores!"
      var highScores = document.createElement("table");
      end.appendChild(highScores);

      var name = nameInput.value;
      highScores.textContent = "1. " + name + "- " + finalScore;

      var goBack = document.createElement("button");
      end.appendChild(goBack);
      goBack.textContent = "Try Again";

      var refresh = document.createElement("button");
      end.appendChild(refresh);
      refresh.textContent = "Refresh High Scores"

      goBack.addEventListener("click", function(event) {
        questionSection.textContent = ""
        end.removeChild(highScores);
        end.removeChild(goBack);
        end.removeChild(refresh);
        pageLoad();
      });

      refresh.addEventListener("click", function(event) {
        questionSection.textContent = ""
        end.removeChild(highScores);
        end.removeChild(goBack);
        end.removeChild(refresh);
        pageLoad();
      });
    });
  }

  
  // // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
  // var startTimer = function() {
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
          setCorrects();
          answerSection.removeChild(buttonOne);
          answerSection.removeChild(buttonTwo);
          question2();
        }
      });

      buttonTwo.addEventListener("click", function() {
        if (buttonTwo.click) {
          wrongAnswer();
          answerSection.removeChild(buttonOne);
          answerSection.removeChild(buttonTwo);
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
          answerSection.removeChild(buttonOne);
          answerSection.removeChild(buttonTwo);
          question3();
        } 
      });

      buttonTwo.addEventListener("click", function() {
        if (buttonTwo.click) {
          correctAnswer();
          setCorrects();
          answerSection.removeChild(buttonOne);
          answerSection.removeChild(buttonTwo);
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
          answerSection.removeChild(buttonOne);
          answerSection.removeChild(buttonTwo);
          question4();
        } 
      });

      buttonTwo.addEventListener("click", function() {
        if (buttonTwo.click) {
          correctAnswer();
          setCorrects();
          answerSection.removeChild(buttonOne);
          answerSection.removeChild(buttonTwo);
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
          setCorrects();
          answerSection.removeChild(buttonOne);
          answerSection.removeChild(buttonTwo);
          question5();
        }
      });
  
      buttonTwo.addEventListener("click", function() {
        if (buttonTwo.click) {
          wrongAnswer();
          answerSection.removeChild(buttonOne);
          answerSection.removeChild(buttonTwo);
          question5();
        } 
      });
    }

    var question5 = function() {
      // creates true and false answer buttons
      var answerOne = "true"
      var answerTwo = "false"
        
      var buttonOne = document.createElement("button");
      answerSection.appendChild(buttonOne);
      buttonOne.textContent = answerOne;
    
      var buttonTwo = document.createElement("button");
      answerSection.appendChild(buttonTwo);
      buttonTwo.textContent = answerTwo;
 
       // runs fifth question - answer TRUE
       var questionFive = "CSS stands for Cascading Style Sheets."
       questionSection.textContent = questionFive;

       buttonOne.addEventListener("click", function() {
         if (buttonOne.click) {
           correctAnswer();
           setCorrects();
           answerSection.removeChild(buttonOne);
           answerSection.removeChild(buttonTwo);
           done();
         }
       });
   
       buttonTwo.addEventListener("click", function() {
         if (buttonTwo.click) {
           wrongAnswer();
           answerSection.removeChild(buttonOne);
           answerSection.removeChild(buttonTwo);
           done();
         } 
       });
     }

  // calls the function that titles the webpage and invites player to start quiz
  pageLoad();

  
 