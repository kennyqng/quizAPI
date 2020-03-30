// timer
// start button
// view high scores
// var for hight scores
// clear high scores button
// array of questions
// array of answers
// local storage
// 
var time = 60;
var timeDisplay = document.getElementById("timeDisplay");
var questionsArray =[
    {question:"Commonly used data types DO NOT include:",
    choices:["Strings","Boolean","Alerts", "Numbers"]}, 
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

var messageTop = document.getElementById("messageTop");
var info = document.getElementById("infoBox");
var buttonsBox = document.getElementById("response");

console.log(messageTop.textContent);

messageTop.textContent = questionsArray[2];
console.log(messageTop.textContent);


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
buttonsBox.appendChild(start);
start.textContent = "Start";
start.addEventListener("click", function(){
    start.remove();
    info.textContent = "";
    questionGenerator(0);
})



function questionGenerator(number){
    messageTop.textContent = questionsArray[number].question;
    for (var i = 0; i < questionsArray[number].choices.length; i++){
        var btn = document.createElement("button");
        btn.setAttribute("id", "answer"+i);
        btn.textContent = questionsArray[number].choices[i];
        buttonsBox.appendChild(btn);
    }
}
function questionRemover(number){
    for (var i = 0; i < questionsArray[number].choices.length; i++){
        var a1 = document.getElementById("answer"+i);
        a1.remove();
    }
    

}
