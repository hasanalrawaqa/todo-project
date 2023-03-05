'get strict'

var firstName = prompt("What is your first name:");
var lastName = prompt("What is your last name:");
var fullName= firstName + lastName;
var gender = prompt("Enter your Gender:");
var age = prompt("Enter your Age:");
while (age<=0) {
    alert("the Age isn't real, please enter your true Age");
    age = prompt("Enter your Age:");
 }
var welcomeMassage= confirm("are you want to skip welcome massage?")

if (welcomeMassage=== false) {
    if (gender== "male") {
        alert("Hello Mr "+ lastName);
    } else { if (gender== "female") {
        alert("Hello Ms " + lastName); 
        
    }
    else{ 
        alert("Hello "+ lastName);
    }
    
}
    
}

// lab 06

let userQusetions=[];
let answerUserQuestions=[]
function addQuestion(questionArr, questionsNum) {
    for (let i = 0; i < questionsNum; i++) {
      let question = prompt("Enter a new question (Yes/No):");
      if (question === "") {
        question = "invalid";

      }
      else{
        questionArr.push(question);
      }
    
    }
  }
  function questionsAnswer(questionArr,answerArr){
    let answer="";
    for (let i = 0; i < questionArr.length; i++) {
        answer=prompt("please answer;"+questionArr[i])
        if (answer=="yes"||answer=="no") {
            answerArr.push(answer);
        } else {
            answerArr.push("invalid");
        }
        
    }
  }

 
  addQuestion(userQusetions,3);
  questionsAnswer(userQusetions, answerUserQuestions);
  console.log(userQusetions);
  console.log(answerUserQuestions)