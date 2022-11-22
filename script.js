

let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
console.log(emailElement);

let submitButton = document.querySelector('#submit-button');
console.log(submitButton)

submitButton.addEventListener('click', function(event) {

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	console.log('Email is: ' emailValue);

	if(emailValue.includes('@')){
		alert('Thank you for your message')
	}else{
		alert('Oh no it looks like thats an invalid email address!')
	}
	console.log('Message is: ' messageValue);
	

})










// let greeting = 'hello world'
// alert(greeting);

// let webDevolopers = 'Hamsa Jeylani and Gideon'
// console.log(webDevolopers);

// let age = 32;
// let pl = 3.142;
// let alphabet = 'a, b, c etc';

// // alert (2, +3);

// let numberTwo = 2;
// let numberThree = 3;

// let sum = numberTwo+ numberThree;

// alert(sum);

// function add(number1, number2){
// 	let total = number1 + number2;
// 	return total;
// }

// console.log(add(78, 10));
// let sum = numberTwo + numberThree;
// let sum = add(numberTwo, numberThree);
