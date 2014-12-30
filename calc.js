//what if the user wants to add/sub more than two numbers? 
//add if statements to the add/sub/multi/div event listeners?
//that way it can keep doing the math as the buttons are clicked?
//the solve will just clear out the array and the sign? 
//add 3d buttons

//when you keep pressing the plus button
//the solution should become the first number, and the second should be the new number.
//or we could use splice and cut them out as we go? 

//what if you did a if the sign is not empty, that way you can target more shit. 

//maybe don't clear the box on the plus's and what not
//add a clear button?  
//parsefloat?
//make the box.value always the last number in the array
// make the clear button so you have something to clear it with. 

//dividing something, and then using another symbol does not work it just adds the number to
//the box value in a string
//have you make it so when the numbers click it clears the value in the box
var sign = '';
var numbers = [];
var userNum = [];

var box = document.querySelector('#inputBox');
var add = document.querySelector('#add');
var sub = document.querySelector('#subtract');
var div = document.querySelector('#divide');
var multi = document.querySelector('#multiply');
var solve = document.querySelector('#equal');
var button = document.getElementsByTagName('button');


console.log(button.length)
console.log(button)

for (i=0; i < button.length; i++){
	button[i].onclick = function() {
		if (isNaN(this.innerHTML) === false){
			console.log(this.innerHTML);
			box.value += parseInt(this.innerHTML);
		}
	}
}

add.addEventListener('click', function(){
	if (isNaN(box.value) === true){
		alert('Please enter a number');
	} else {
		numbers.push(parseInt(box.value));

		if ((sign === '') || (sign === '+')) {
			sign = '+';
			if ((numbers.length>= 2) && (sign = '+')) {
				console.log('you are in the else if of the add')
				box.value = (numbers[numbers.length-2]) + (numbers[numbers.length-1]);
				numbers.push(parseInt(box.value));
				numbers.splice(0,1);
				console.log(numbers);
			} else {
				box.value = '';
			}	
		} else if ((sign != '+') && (sign != '')){
			console.log(sign);
			console.log(numbers);
			console.log('blah blah first if')
			solution();
			sign = '+';
		}
	}
})

sub.addEventListener('click', function(){
	if (isNaN(box.value) === true){
		alert('Please enter a number');
	} else {
		numbers.push(parseInt(box.value));

		if ((sign === '') || (sign === '-')) {
			sign = '-';

			if ((numbers.length>= 2) && (sign = '-')) {

				console.log('you are in the else if of the subtraction')
				box.value = (numbers[numbers.length-2]) - (numbers[numbers.length-1]);
				numbers.push(parseInt(box.value));
				numbers.splice(0,1);
				console.log(numbers);

			} else {
				box.value = '';
			}	

		} else if ((sign != '-') && (sign != '')){
			console.log(sign);
			console.log(numbers);
			console.log('blah blah first if')
			solution();
			sign = '-';
		}
	}
})

multi.addEventListener('click', function(){
	if (isNaN(box.value) === true){
		alert('Please enter a number');
	} else {
		numbers.push(parseInt(box.value));

		if ((sign === '') || (sign === 'x')) {
			sign = 'x';

			if ((numbers.length>= 2) && (sign = 'x')) {

				console.log('you are in the else if of the Multiplication')
				box.value = (numbers[numbers.length-2]) * (numbers[numbers.length-1]);
				numbers.push(parseInt(box.value));
				numbers.splice(0,1);
				console.log(numbers);

			} else {
				box.value = '';
			}	

		} else if ((sign != 'x') && (sign != '')){
			console.log(sign);
			console.log(numbers);
			console.log('blah blah first if')
			solution();
			sign = 'x';
		}
	}
})

div.addEventListener('click', function(){
	if (isNaN(box.value) === true){
		alert('Please enter a number');
	} else {
		numbers.push(parseInt(box.value));

		if ((sign === '') || (sign === '/')) {
			sign = '/';

			if ((numbers.length>= 2) && (sign = '/')) {

				console.log('you are in the else if of the subtraction')
				box.value = ((numbers[numbers.length-2]) / (numbers[numbers.length-1]));
				numbers.push(parseInt(box.value));
				numbers.splice(0,1);
				console.log(numbers);

			} else {
				box.value = '';
			}	

		} else if ((sign != '/') && (sign != '')){
			console.log(sign);
			console.log(numbers);
			console.log('blah blah first if')
			solution();
			sign = '/';
		}
	}
})

solve.addEventListener('click', function(){
	numbers.push(parseInt(box.value));
	solution();
	clear();
	console.log('we are solving' + numbers);
	console.log('solving sign' + sign);
});
	

function solution(){
	if (isNaN(box.value) === true){
		alert('Please enter a number');

	} else {

		if (sign === '+'){
			box.value = (numbers[numbers.length-2]) + (numbers[numbers.length-1]);
			numbers.push(parseInt(box.value));

		} else if (sign === '-'){
			box.value = (numbers[numbers.length-2]) - (numbers[numbers.length-1]);
			numbers.push(parseInt(box.value));

		} else if (sign === '/'){
			box.value = ((numbers[numbers.length-2]) / (numbers[numbers.length-1]));
			numbers.push(parseInt(box.value));

		} else if (sign === 'x'){
			box.value = numbers[numbers.length-2] * numbers[numbers.length-1];
			numbers.push(parseInt(box.value));
		}
		numbers.splice(0,1);
		console.log('this is the numbers in the solution' + numbers)
	}
}

function clear(){
	sign = '';
	numbers = [];
}




// window.addEventListener("keydown", handlingkeys, true);


// function handlingkeys(){
//     var key = event.which;

//     if (key === 37 && dir != 'right') {
//       dir = 'left';
//     } else if (key === 38 && dir != 'down') {
//       dir = 'up';
//     } else if (key === 39 && dir != 'left') {
//       dir = 'right';
//     } else if (key === 40 && dir != 'up') {
//       dir = 'down';
//     }
// };
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

box.addEventListener('keydown', function(e){
	if ((e.keyCode === 48) || (e.keyCode === 96)){
		zero.setAttribute('class', 'press');
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
	
	} else {
		return;
	}
})

box.addEventListener('keyup', function(){
	for (i=0; i < button.length; i++){
		button[i].removeAttribute('class', 'blah');
	}
})

















