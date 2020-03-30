var messageTop = document.getElementById("messageTop");
var messageBottom = document.getElementById("messageBottom");
var info = document.getElementById("infoBox");
var buttonsBox = document.getElementById("response");
var startBtn = document.getElementById("startBtn");

var time = 60;
var timeDisplay = document.getElementById("timeDisplay");
var userSelection = "";
var points = 0;
var number = 0;
var questionsArray =[
    {question:"Commonly used data types DO NOT include:",
    choices:["Strings","Boolean","Alerts", "Numbers"],
    correctAnswer:"Alerts"},

    {question:"The condition in an if/else statement is enclosed within _______.",
    choices:["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
    correctAnswer:"Parenthesis"}, 

    {question: "Arrays in JavaScript can be used to store ________.",
    choices: ["Numbers and strings", "Other arrays", "Boolean", "All of the above"],
    correctAnswer:"All of the above"},

    {question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices:["Javascript", "Terminal/Bash", "for loops", "Console.log()"],
    correctAnswer:"Console.log()"},

    {question:"how many time will this loop? \n(var i =0; i < 5; i++){}",
    choices: ["5", "4", "3", "1"],
    correctAnswer: "5"}];

    restart();


    function restart(){

    messageTop.textContent = "Coding Quiz Challenge";
    var welcome = document.createElement("p");
    welcome.textContent = "Try to Answer the following code-related questions within the time limit. Keep in mind that incorrect response will penalize your time by ten seconds.";
    info.appendChild(welcome);
    var start = document.createElement("button");
    startBtn.appendChild(start);
    start.textContent = "Start";
    start.addEventListener("click", function(){
        event.preventDefault();
        start.remove();
        welcome.textContent = "";
        console.log("array length: "+questionsArray.length);

        interval = setInterval(function(){
            time--;
            timeDisplay.textContent = time;
            if(time === 0) {
                clearInterval(interval);
              }
        },1000);

        questionGenerator(number);
    })

}


function questionGenerator(n){

    messageTop.textContent = questionsArray[n].question;
    for (var i = 0; i < questionsArray[n].choices.length; i++){
        var btn = document.createElement("button");
        btn.setAttribute("id", "answer"+i);
        btn.setAttribute("class", "btn-answer");
        btn.textContent = questionsArray[n].choices[i];
        buttonsBox.appendChild(btn);
    }
    
    var answerBtn = document.getElementsByClassName("btn-answer");
    for (var i = 0; i < answerBtn.length; i++){
        answerBtn[i].addEventListener("click", 
        function (){
            userSelection = this.textContent;
            console.log("correct answer " + questionsArray[n].correctAnswer);
            console.log("user selected " + userSelection);
            console.log("compare "+userSelection.localeCompare(questionsArray[n].correctAnswer));
            // compare: 0 means equals
            if(userSelection == questionsArray[n].correctAnswer){
                points++;
                console.log("points: " + points);
                questionRemover(n);
                nextQuestion();
                messageBottom.textContent = "Correct!";
            }
            else{
                time -= 10;
                questionRemover(n);
                nextQuestion();
                messageBottom.textContent = "Wrong.";
            }
        });
    }
    function nextQuestion(){
        var length = (questionsArray.length-1);
        if (number < length){
            number++;
            questionGenerator(number);
        }
        else{restart()}
        
    }
}


function questionRemover(n){
    for (var i = 0; i < questionsArray[n].choices.length; i++){
        var a1 = document.getElementById("answer"+i);
        a1.remove();
    }
}
// function showScore (){
//     messageTop.textContent = "All done!";
//     info.textContent = "Your final score: " + points;
//     var newDiv = document.createElement("div");
//     info.appendChild(newDiv);
//     var newForm = document.createElement("form");
//     newForm.setAttribute("input", "text")
//     setAttributes(newForm,{"input":"text", })

// }

// function setAttributes (el, attrs){
//     for(var key in attrs){
//         el.setAttribute(key, attrs[key]);
//     }
// } 