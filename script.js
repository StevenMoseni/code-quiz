var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

buildQuiz();

submitButton.addEventListener('click', showResults);

var myQuestions = [
    {
      question: "What’s the diameter of a basketball hoop in inches?",
      answers: {
        a: "10 inches",
        b: "24 inches",
        c: "18 inches",
        d: "20 inches"
      },
      correctAnswer: "c"
    },
    {
      question: "How big is an Olympic sized swimming pool in meters?",
      answers: {
        a: "50 meters long and 25 meters wide",
        b: "20 meters long and 50 meters wide",
        c: "60 meters long and 20 meters wide",
        d: "100 meters long and 50 meters wide"
      },
      correctAnswer: "a"
    },
    {
      question: "In professional basketball, how high is the basketball hoop from the ground?",
      answers: {
        a: "12 feet",
        b: "10 feet",
        c: "11 feet",
        d: "12.5 feet"
      },
      correctAnswer: "b"
    },
    {
        question: "The Olympics are held every how many years",
        answers: {
          a: "1 year",
          b: "2 years",
          c: "3 years",
          d: "4 years"
        },
        correctAnswer: "d"
      },
      {
        question: "How many players are on a baseball team?",
        answers: {
          a: "10 players",
          b: "9 players",
          c: "11 players",
          d: "12 players"
        },
        correctAnswer: "b"
      },
      {
        question: "In professional basketball, how high is the basketball hoop from the ground?",
        answers: {
          a: "12 feet",
          b: "10 feet",
          c: "11 feet",
          d: "12.5 feet"
        },
        correctAnswer: "b"
      },
      {
          question: "What do you call it when a player makes three back to back strikes in bowling?",
          answers: {
              a: "Chicken",
              b: "Eagle",
              c: "Donkey",
              d: "Turkey"
          },
          correctAnswer: "d"
      }
  ];

 


