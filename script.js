//variables
var messageTop = document.getElementById("messageTop");
var messageBottom = document.getElementById("messageBottom");
var info = document.getElementById("infoBox");
var buttonsBox = document.getElementById("response");
var startBtn = document.getElementById("startBtn");
var highScoreForm = document.getElementById("highScoreForm");
var submitForm = document.getElementById("submitForm");
var formValue = document.getElementById("initial");
// selecting the displayed-List
var scoreList = document.getElementById("scoreList");
// selecting the button
var submitBtn = document.getElementById("submitBtn");
// creating a localList variable connect a local storage called "localList"
var localList = localStorage.getItem("localList");



var number = 0;
var time = 60;
var timeDisplay = document.getElementById("timeDisplay");
var userSelection = "";
var point = 0;
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
    
    // functions
    
    function startQuiz(){
        
        messageTop.textContent = "Coding Quiz Challenge";
        var welcome = document.createElement("p");
        welcome.textContent = "Try to Answer the following code-related questions within the time limit. Keep in mind that incorrect response will penalize your time by ten seconds.";
        info.appendChild(welcome);
        
        var start = document.createElement("button");
        startBtn.appendChild(start);
        start.textContent = "Click to take Quiz";
        
        start.addEventListener("click", function(){
            // resetting variables and form
            hideDiv(highScoreForm);
            messageBottom.textContent = "";
            info.textContent = "";
            time = 60;
            number = 0;
            point = 0;
            hideDiv(startBtn);
            welcome.textContent = "";
            console.log("array length: "+questionsArray.length);
            
        interval = setInterval(function(){
            time--;
            timeDisplay.textContent = time;
            if(time < 1) {
                clearInterval(interval);
                showScore("Time's up!");
                questionRemover(number);
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
                point++;
                console.log("points: " + point);
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
        else{
            showScore("All done!");
            clearInterval(interval);
        }
        
    }
}


function questionRemover(n){
    for (var i = 0; i < questionsArray[n].choices.length; i++){
        var a1 = document.getElementById("answer"+i);
        a1.remove();
    }
}
function showScore (str){
    messageTop.textContent = str;
    info.textContent = "Your final score: " + point;
    showDiv(highScoreForm);
    
    submitBtn.addEventListener("click", function(){
        // var newDiv = document.createElement("div");
        // highScoreForm.appendChild(newDiv);
        if(formValue.value == "" || formValue.value == null){
            alert("Please enter your initial.");
        }
        else{
            // localList = "";
            localList += "\n" + formValue.value + ": " + point + "pts";

              // displayed-list content updated to variable localList
            scoreList.textContent = localList;
              // saving localList variable to local storage "localList"
            localStorage.setItem("localList", localList);
            // newDiv = formValue.value + ": " + point + "pts\n";
            submitForm.reset();
            showDiv(startBtn);
        }
        event.preventDefault();
    })
}

// function setAttributes (el, attrs){
//     for(var key in attrs){
//         el.setAttribute(key, attrs[key]);
//     }
// } 
function hideDiv(divName){
    divName.style.display = "none";
}
function showDiv(divName){
    divName.style.display = "block";    
}

// start
startQuiz();
