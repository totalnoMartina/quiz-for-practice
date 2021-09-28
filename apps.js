
// Content to the quiz and functions related to flow of quiz

function populate() {
    if(quiz.isEnded()) {
        showScores();
    } 
    else {
        // show questions
        var element = document.getElementById("questions");
        element.innerHTML = quiz.getQuestionIndex().text;
    }
        // show choices 
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
};
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestion = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestion + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your score is " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("Which berry is considered to be healthier to take frozen than raw?", 
    ["Strawberry", "Blueberry", "Elderberry", "Raspberry"], "Blueberry"),
    new Question("Which fruit is part of rose family?", ["Pear", "Apricot", "Peach", "Apple"], "Apple"),
    new Question("Which one of these is actually a berry?", ["Mango", "Cherry", "Eggplant", "Strawberry"], "Eggplant"),
    new Question("Eating this fruit daily can improve your vision. Which one is not one of them?", ["Cantaloupe", "Banana", "Avocado", "Blackberry"], "Banana")]

var quiz = new Quiz(questions);
populate()

    