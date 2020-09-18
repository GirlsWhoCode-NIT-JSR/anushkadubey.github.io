window.alert("Welcome to the quiz!");
function startquiz(){
const maxscore = 10;
var userscore = 0;
const result = document.querySelector(".result");


const Q1 = document.forms["quiz"] ["Q1"].value;
const Q2 = document.forms["quiz"] ["Q2"].value;
const Q3 = document.forms["quiz"] ["Q3"].value;
const Q4 = document.forms["quiz"] ["Q4"].value;
const Q5 = document.forms["quiz"] ["Q5"].value;
const Q6 = document.forms["quiz"] ["Q6"].value;
const Q7 = document.forms["quiz"] ["Q7"].value;
const Q8 = document.forms["quiz"] ["Q8"].value;
const Q9 = document.forms["quiz"] ["Q9"].value;
const Q10 = document.forms["quiz"] ["Q10"].value;

const fs = document.querySelector(".finalscore");

for(i=1; i<=maxscore; i++){
    if(eval("Q"+i) == null || eval("Q"+i) == " "){
       alert("Question is unanswered!");
        
    }
}
const answers = ["d", "b", "a", "c", "c", "b", "c", "c", "a", "c"];
 
for(i=1; i<=maxscore; i++)
{
    if(eval("Q"+i) == answers[i-1])
    userscore++;
}
alert("Your score is " + userscore);
fs.innerHTML = userscore;
return false;
}