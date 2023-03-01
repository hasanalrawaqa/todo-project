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