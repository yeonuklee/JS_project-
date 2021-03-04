class Question {
  constructor(question, choice) {
    this.question = question;
    this.choice = choice;
  }
}

var questions = [
  new Question("What season do you like?", [
    "Spring",
    "Summer",
    "Fall",
    "Winter",
  ]),
  new Question("what do you expect to see on traveling", [
    "Natrue",
    "Historic buildings and Museums",
    "Food and Coffee",
    "Shopping and Party",
  ]),
  new Question(
    "what would you do when you see the food that you have never had before",
    [
      "I won't eat it",
      "I will ask my friend to try it",
      "I will be hesitant but I will eat it",
      "I'm just going to eat it",
    ]
  ),
  new Question("What moive do you like?", [
    "Mamamia",
    "Before the sunset",
    "Eat, Play and Love",
    "Sex and the city",
  ]),
];

/*
  What questions entails 
  
  If you're willing to eat any foods that you've never seen before, you're adventurous. If not, this survey will think you are not risk taker.
  
  Your choice of movie will tell what you like
  Mamamia - beach
  before the sunset - romance
  Eat, Play and Love - vacation
  Sex and the city - You're a ciry person. You love party and shopping
  */

var questionCounter = 0; //Tracks question number
var selections = []; //User input
var quiz = $("#quiz");

//Creates new HTML with next questions and choices
var createQuestionElement = function (index) {
  var qElement = $("<div>", { id: "question" });

  var header = $("<h2>Question" + (index + 1) + "</h2>");
  qElement.append(header);

  var question = $("<p>").append(questions[index].question);
  qElement.append(question);

  var ul = $("<ul>");
  var li;
  var input = "";
  var answer = questions[index].choice.map((cur, i) => {
    li = $("<li>");
    input = '<input type="checkbox" name="answer" value=' + i + " />";
    input = input + cur;
    li.append(input);
    ul.append(li);
    return ul;
  });
  qElement.append(answer);
  // qElement.append(...answer);

  return qElement;
};

//make an array that contains keywords about user's preference.
var userInfo = function () {
  var keywords = [];
  var weather = ["warm", "hot", "cool", "cold"];
  var preference = ["nature", "history", "food", "party"];
  var adventure = ["0", "1", "2", "3"];
  var place = ["beach", "romantic", "vacation", "city"];
  var total = [weather, preference, adventure, place];

  for (var i = 0; i < selections.length; i++) {
    switch (selections[i]) {
      case 0:
        keywords.push(total[i][0]);
        break;
      case 1:
        keywords.push(total[i][1]);
        break;
      case 2:
        keywords.push(total[i][2]);
        break;
      case 3:
        keywords.push(total[i][3]);
        break;
    }
  }
  return keywords;
};

//Each country has its own keywords. It is compared with user's keywords
//It finds the best match between user and country.
var country = function (arr) {
  var korea = ["cool", "party ", "0", "city"];
  var aus = ["hot", "nature", "1", "beach"];
  var italy = ["hot", "history", "0", "beach"];
  var canada = ["cold", "nature", "0", "vacation"];
  var vietnam = ["hot", "food", "3", "vacation"];
  var bali = ["hot", "nature", "1", "vacation"];
  var german = ["hot", "party", "0", "city"];
  var holland = ["cool", "nature", "0", "romantic"];
  var singapore = ["hot", "food", "0", "city"];
  var cambodia = ["hot", "history", "3", "nature"];
  var france = ["cool", "history", "1", "romantic"];
  var brazil = ["hot", "nature", "3", "vacation"];
  var cuba = ["hot", "party", "3", "romantic"];
  var kenya = ["hot", "nature", "3", "vacation"];

  var total = [
    korea,
    aus,
    italy,
    canada,
    vietnam,
    bali,
    german,
    holland,
    singapore,
    cambodia,
    france,
    brazil,
    cuba,
    kenya,
  ];

  var countries = [
    "South Korea",
    "Australia",
    "Italy",
    "Canada",
    "Vietnam",
    "Bali",
    "Germany",
    "Holland",
    "Singapore",
    "Cambodia",
    "France",
    "Brazil",
    "Cuba",
    "Kenya",
  ];

  //It counts how many keywords are matched
  var newArr = [];
  for (var i = 0; i < 4; i++) {
    var count = 0;
    for (var j = 0; j < 4; j++) {
      if (arr[j] == total[i][j]) {
        count++;
      }
    }
    newArr.push(count);
  }

  //Finds a max number of matches.
  var index = newArr.indexOf(Math.max(...newArr));

  return countries[index];
};

//Shows the result
var result = function () {
  var qElement = $("<div>");
  var user = userInfo();
  var place = country(user);
  var text = `You like ${user[0]} weather. When you travel, You love to explore ${user[1]}!`;

  var header = $("<h3>" + place + "</h3>");
  qElement.append(header);

  var p = $("<p>" + text + "</p>");
  qElement.append(p);

  quiz.append(qElement).fadeIn();

  //hide next button
  document.getElementById("next").style.visibility = "hidden";
};

//display questions
var displayNext = function () {
  quiz.fadeOut(function () {
    $("#question").remove();

    if (questionCounter < questions.length) {
      var nextQuestion = createQuestionElement(questionCounter);
      quiz.append(nextQuestion).fadeIn();
    } else {
      result();
    }
  });
};

//display first question
displayNext();

$("#next").on("click", function (e) {
  e.preventDefault();

  console.log("click");

  //This gets the first value from a set of radio buttons.
  selections[questionCounter] = +$('input[name="answer"]:checked').val();

  var randomColor = Math.floor(Math.random() * 16777215).toString(16);

  if (isNaN(selections[questionCounter])) {
    alert("Please answer the question");
  } else {
    questionCounter++;
    document.body.style.backgroundColor = "#" + randomColor;
    displayNext();
  }
});
