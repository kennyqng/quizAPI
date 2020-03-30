// timer
// start button
// view high scores
// var for hight scores
// clear high scores button
// array of questions
// array of answers
// local storage
// 
var messageTop = document.getElementById("messageTop");
var messageBottom = document.getElementById("messageBottom");
var info = document.getElementById("infoBox");
var buttonsBox = document.getElementById("response");

var time = 60;
var timeDisplay = document.getElementById("timeDisplay");
var userSelection = "";
var points = 0;
var questionsArray =[
    {question:"Commonly used data types DO NOT include:",
    choices:["Strings","Boolean","Alerts", "Numbers"],
    correctAnswer:"Alerts"},

    {question:"The condition in an if/else statement is enclosed within _______.",
    choices:["Quotes", "Curly brackets", "Parenthesis", "Square brackets"]}, 
    {question: "Arrays in JavaScript can be used to store ________.",
    choices: ["Numbers and strings", "Other arrays", "Boolean", "All of the above"]},
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices:["Javascript", "Terminal/Bash", "for loops", "Console.log()"]},
    {question:"how many time will this loop? \n(var i =0; i < 5; i++){}",
    choices: ["5", "4", "3", "1"]}];

    // questionsArray[0].question; 
    // questionsArray[0].choices[0];


// start page
// interval = setInterval(function(){
//     time--;
//     timeDisplay.textContent = time;
//     if(time === 0) {
//         clearInterval(interval);
//       }
// },1000);


messageTop.textContent = "Coding Quiz Challenge";
info.textContent = "Try to Answer the following code-related questions within the time limit. Keep in mind that incorrect response will penalize your time by ten seconds.";
var start = document.createElement("button");
messageBottom.appendChild(start);
start.textContent = "Start";
start.addEventListener("click", function(){
    event.preventDefault();
    start.remove();
    info.textContent = "";
    console.log("arry length: "+questionsArray.length);
    questionGenerator(0);
})



function questionGenerator(number){

    messageTop.textContent = questionsArray[number].question;
    for (var i = 0; i < questionsArray[number].choices.length; i++){
        var btn = document.createElement("button");
        btn.setAttribute("id", "answer"+i);
        btn.setAttribute("class", "btn-answer");
        btn.textContent = questionsArray[number].choices[i];
        buttonsBox.appendChild(btn);
    }
    
    var answerBtn = document.getElementsByClassName("btn-answer");
    for (var i = 0; i < answerBtn.length; i++){
        answerBtn[i].addEventListener("click", 
        function (){
            userSelection = this.textContent;
            console.log("correct answer " + questionsArray[number].correctAnswer);
            console.log("user selected " + userSelection);
            console.log("compare "+userSelection.localeCompare(questionsArray[number].correctAnswer));
            if(userSelection == questionsArray[number].correctAnswer){
                points++;
                console.log("points: " + points);
            }
        });
    }
    


    // $(document).on("click", ".btn-answer", function(){
    //     userSelection = this.textContent;
    //     console.log(userSelection);
    // })

}


function questionRemover(number){
    for (var i = 0; i < questionsArray[number].choices.length; i++){
        var a1 = document.getElementById("answer"+i);
        a1.remove();
    }
}
