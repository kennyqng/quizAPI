var newH1 = document.createElement("p");

document.body.appendChild(newH1);

newH1.textContent="hello, it's working";

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
    {question:"What is JS?",
    choices:["javascipt","blah","ok, idk", "i give up"]}, 
    {question:"Which is the correct JQUERY syntax?"}, 
    {question:"how many time will this loop? \n(var i =0; i < 5; i++){}"}];

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
    // start = false;
    buttonsBox.children[0].textContent = "Let's go!";
    info.textContent = "";
    messageTop.textContent = questionsArray[0].question;
    for (var i = 0; i < questionsArray[0].choices.length; i++){
        var btn = document.createElement("button");
        btn.textContent = questionsArray[0].choices[i];
        buttonsBox.appendChild(btn);
    }
})


