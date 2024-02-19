const btn = document.getElementById('btn');

let index = 0;

const colors = ['salmon', 'green', 'blue', 'purple'];
btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});
function displayGreeting() {
var now = new Date();
var hour = now.getHours();

// Create a greeting message
var greeting;
if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

// Display the alert box
alert(greeting);
}
function calculator(){
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number ')); 
const add = num1 + num2; 

document.write("Result is " + add);
}