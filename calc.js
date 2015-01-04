//the numbers are stored and splice in the array as the user runs the math
//the sign determines what equation to run in the if/else solution below
//created a true false boolean, this allows the user to keep the box value visible
//and at each click of equal, or any other math symbol, the boolean becomes true
//an if statement in the clicking of the numbers allows us to autoclear the box.value if the boolean is true

//having trouble adding onto things after the enter key is pressed
//only happens with keyboard pressing, not with the mouse. 
//why does preventDefault() not run after the enter key is pressed?

//what is it adding to the array that is not a number?!?!?!?!
//maybe prevent default is working and the functions are built incorrectly
//and they are adding to the array incorrectly.
//I think it is the prevent default because even if you try the (shift+8) it will not work properly.

//now buttons are not working properly even when they are clicked with mouse after the enter key


var sign = '';
var numbers = [];
var clearBox = false;

var box = document.querySelector('#inputBox');
var add = document.querySelector('#add');
var sub = document.querySelector('#subtract');
var div = document.querySelector('#divide');
var multi = document.querySelector('#multiply');
var solve = document.querySelector('#equal');
var button = document.getElementsByTagName('button');
var clear = document.querySelector('#clear');

//targets the buttons on click, and adds the numbers to the box.value
for (i=0; i < button.length; i++){
	button[i].onclick = function() {
		if (isNaN(this.innerHTML) === false){
			if (clearBox === true){
				clearBox = false;
				box.value = '';
				box.value += parseFloat(this.innerHTML);
			} else {
				box.value += parseFloat(this.innerHTML);
			}
		}

	}
}
//tried to use this to remove the NaN's that happen after the preventDefault stopped working
//and began to add NaN to the array


// function removeNaN(){
// 	if (numbers.length >= 1){
	
// 		for (n=0; n<numbers.length; n++){
// 			if (numbers[n] = 'NaN'){
// 				numbers.splice(numbers[n], 1);
// 				console.log('does this shit work?');
// 			} else {
// 				return;
// 		}
// 	}
// }
// }

//could not make anonymous functions in event listener because the functions
//are also called during the mouse clicking the buttons, or on specific keyboard actions
add.addEventListener('click', addition)
sub.addEventListener('click', subtraction)
multi.addEventListener('click', multiplication)
div.addEventListener('click', division)
solve.addEventListener('click', solving)
clear.addEventListener('click', clearButton)

//not very DRY but works. 
function addition(){
	//makes sure it is a number
	if (isNaN(box.value) === true){
		alert('Please enter a number');
	} else {
		//adds the number in the input box to the numbers array
		numbers.push(parseFloat(box.value));
		clearBox = true;
		if ((sign === '') || (sign === '+')) {
			sign = '+';
			if ((numbers.length> 2) && (sign = '+')) {
				box.value = (numbers[numbers.length-2]) + (numbers[numbers.length-1]);
				numbers.push(parseFloat(box.value));
				numbers.splice(0,1);
			} 
		} else if ((sign != '+') && (sign != '')){
			solution();
			sign = '+';
		}
	}
}

function subtraction(){
	if (isNaN(box.value) === true){
		alert('Please enter a number');
	// } else if (box.value === ''){
	// 	return;
	} else {
		console.log('subtract in else');
		numbers.push(parseFloat(box.value));
		clearBox = true;
		if ((sign === '') || (sign === '-')) {
			sign = '-';
			console.log('subtract first if');
			console.log(numbers);
			console.log(sign)

			 if ((numbers.length> 2) && (sign = '-')) {
				console.log('you are in the else if of subtration');
				box.value = (numbers[numbers.length-2]) - (numbers[numbers.length-1]);
				numbers.push(parseFloat(box.value));
				numbers.splice(0,1);
			} 

		} else if ((sign != '-') && (sign != '')){
			solution();
			sign = '-';
		}
	}
}

function multiplication(){
	console.log('you got to multiply function')
	if (isNaN(box.value) === true){
		alert('Please enter a number');
	} else {
		numbers.push(parseFloat(box.value));
		clearBox = true;
		if ((sign === '') || (sign === 'x')) {
			sign = 'x';
			console.log(numbers);
			console.log(sign)
			if ((numbers.length> 2) && (sign = 'x')) {
				box.value = (numbers[numbers.length-2]) * (numbers[numbers.length-1]);
				numbers.push(parseFloat(box.value));
				numbers.splice(0,1);
			} 

		} else if ((sign != 'x') && (sign != '')){
			solution();
			sign = 'x';
		}
	}
}

function division(){
	if (isNaN(box.value) === true){
		alert('Please enter a number');
	} else {
		numbers.push(parseFloat(box.value));
		clearBox = true;
		if ((sign === '') || (sign === '/')) {
			sign = '/';

			if ((numbers.length> 2) && (sign = '/')) {
				box.value = ((numbers[numbers.length-2]) / (numbers[numbers.length-1]));
				numbers.push(parseFloat(box.value));
				numbers.splice(0,1);
			} 

		} else if ((sign != '/') && (sign != '')){
			solution();
			sign = '/';
		}
	}
}

function solving(){
	numbers.push(parseFloat(box.value));
	solution();
	clearing();
	clearBox = true;
}
	
//fix solution function please motherfucker
function solution(){
	if (isNaN(box.value) === true){
		alert('Please enter a number');

	} else {

		if (sign === '+'){
			box.value = (numbers[numbers.length-2]) + (numbers[numbers.length-1]);
			numbers.push(parseFloat(box.value));
			console.log(numbers);
			console.log(sign);

		} else if (sign === '-'){
			box.value = (numbers[numbers.length-2]) - (numbers[numbers.length-1]);
			numbers.push(parseFloat(box.value));
			console.log(numbers);
			console.log(sign);

		} else if (sign === '/'){
			box.value = ((numbers[numbers.length-2]) / (numbers[numbers.length-1]));
			numbers.push(parseFloat(box.value));
			console.log(numbers);
			console.log(sign);

		} else if (sign === 'x'){
			box.value = numbers[numbers.length-2] * numbers[numbers.length-1];
			numbers.push(parseFloat(box.value));
			console.log(numbers);
			console.log(sign);

		}
		numbers.splice(0,1);
		console.log(numbers);
		console.log(sign);

	}
}

function clearing(){
	sign = '';
	numbers.splice(0, numbers.length-1);
	console.log(numbers)
}

function clearButton(){
	sign = '';
	numbers = [];
	clearBox = false;
	box.value = '';
}

//query select the numbers needed for the keydown commands
var zero = document.querySelector('#zero')
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var decimal = document.querySelector('#decimal')

//when specific keyboard buttons are pressed, it will activate the 3d css animation style
box.addEventListener('keydown', function(e){
	if (clearBox === true){
		clearBox = false;
		box.value = '';
	}
	if ((e.keyCode === 48) || (e.keyCode === 96)){
		zero.setAttribute('class', 'press');

	} else if (e.keyCode === 56 && e.shiftKey){
		multi.setAttribute('class', 'press');
		multiplication();
		e.preventDefault();

	} else if (e.keyCode === 187 && e.shiftKey){
		add.setAttribute('class', 'press');
		addition();
		e.preventDefault();
		// return false;

	}  else if (e.keyCode === 189){
		sub.setAttribute('class', 'press');
		subtraction();
		e.preventDefault();
		// return false;

	} else if (e.keyCode === 191){
		div.setAttribute('class', 'press');
		division();
		e.preventDefault();

	} else if ((e.keyCode === 49) || (e.keyCode === 97)){
		one.setAttribute('class', 'press');

	} else if ((e.keyCode === 50) || (e.keyCode === 98)){
		two.setAttribute('class', 'press');

	} else if ((e.keyCode === 51) || (e.keyCode === 99)){
		three.setAttribute('class', 'press');

	} else if ((e.keyCode === 52) || (e.keyCode === 100)){
		four.setAttribute('class', 'press');

	} else if ((e.keyCode === 53) || (e.keyCode === 101)){
		five.setAttribute('class', 'press');

	} else if ((e.keyCode === 54) || (e.keyCode === 102)){
		six.setAttribute('class', 'press');

	} else if ((e.keyCode === 55) || (e.keyCode === 103)){
		seven.setAttribute('class', 'press');

	} else if ((e.keyCode === 56) || (e.keyCode === 104)){
		eight.setAttribute('class', 'press');

	} else if ((e.keyCode === 57) || (e.keyCode === 105)){
		nine.setAttribute('class', 'press');
	
	} else if ((e.keyCode === 107)){
		add.setAttribute('class', 'press');
		addition();
		e.preventDefault();
// the e.preventDefault() allows the user to use the special key buttons
//such as the add and subtract buttons, without inputing in 
	} else if ((e.keyCode === 109)){
		sub.setAttribute('class', 'press');
		subtraction();
		e.preventDefault();

	} else if ((e.keyCode === 106)){
		multi.setAttribute('class', 'press');
		multiplication();
		e.preventDefault();

	} else if (e.keyCode === 13){
		solve.setAttribute('class', 'press');
		solving();
		// e.preventDefault();
		// return false;
		
	} else if (e.keyCode === 187){
		solve.setAttribute('class', 'press');
		solving();
		e.preventDefault();
		
	} else if ((e.keyCode === 110)){
		decimal.setAttribute('class', 'press');
		
	} else {
		return;
	}
})


//on keyup you want to remove that c
box.addEventListener('keyup', function(){
	for (i=0; i < button.length; i++){
		button[i].removeAttribute('class', 'press');
	}
})










