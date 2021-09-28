function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choices) {
    return choice === this.answer;
}

var question = [
    new Question("Which berry is considered to be healthier to take frozen than raw?", 
    ["Strawberry", "Blueberry", "Elderberry", "Raspberry"], "Blueberry"),
    new Question("Which fruit is part of rose family?", ["Pear", "Apricot", "Peach", "Apple"], "Apple"),
    new Question("Which one of these is actually a berry?", ["Mango", "Cherry", "Eggplant", "Strawberry"], "Eggplant"),
    new Question("Eating this fruit daily can improve your vision. Which one is not one of them?", ["Cantaloupe", "Banana", "Avocado", "Blackberry"], "Banana"),
    ]

var quiz = new Quiz(questions);

populate(); 