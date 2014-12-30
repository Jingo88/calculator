//add a clear button
// get rid of the outline using "outline: 0"


var addButt = document.querySelector('#add');
var subButt = document.querySelector('#sub');
var multButt = document.querySelector('#mult');
var divButt = document.querySelector('#div');
var powButt = document.querySelector('#pow');
var mathSymbol = document.querySelector('#symbol');

var imgAdd = document.createElement('img');
imgAdd.src = 'calculatorImages/add.png';
var imgSub = document.createElement('img');
imgSub.src = 'calculatorImages/sub.png';
var imgMult = document.createElement('img');
imgMult.src = 'calculatorImages/mult.png';
var imgDiv = document.createElement('img');
imgDiv.src = 'calculatorImages/divide.png';
var imgPow = document.createElement('img');
imgPow.src = 'calculatorImages/dbz.png';

// var img = document.createElement("IMG");
// img.src = "images/1.gif";
// var oldImg = document.getElementById('oldImg');
// document.getElementById('imgDiv').replaceChild(img, oldImg);

function add(){
	var firstNum = parseInt(document.querySelector('#firstnum').value);
	var secondNum = parseInt(document.querySelector('#secondnum').value);
	if (isNaN(firstNum) || isNaN(secondNum)) {
		alert('Please enter a number in both eyeballs')
	} else {
	answer.value = firstNum + secondNum;
	mathSymbol.innerHTML = '';
	mathSymbol.appendChild(imgAdd);
}}

function subtract(){
	var firstNum = parseInt(document.querySelector('#firstnum').value);
	var secondNum = parseInt(document.querySelector('#secondnum').value);
	if (isNaN(firstNum) || isNaN(secondNum)) {
		alert('Please enter a number in both eyeballs')
	} else {
	answer.value = firstNum - secondNum;
	mathSymbol.innerHTML = '';
	mathSymbol.appendChild(imgSub);
}}

function multiply(){
	var firstNum = parseInt(document.querySelector('#firstnum').value);
	var secondNum = parseInt(document.querySelector('#secondnum').value);
	if (isNaN(firstNum) || isNaN(secondNum)) {
		alert('Please enter a number in both eyeballs')
	} else {
	answer.value = firstNum * secondNum;
	mathSymbol.innerHTML = '';
	mathSymbol.appendChild(imgMult);
}}

function divide(){
	var firstNum = parseInt(document.querySelector('#firstnum').value);
	var secondNum = parseInt(document.querySelector('#secondnum').value);
	if (isNaN(firstNum) || isNaN(secondNum)) {
		alert('Please enter a number in both eyeballs')
	} else {
	answer.value = firstNum / secondNum;
	mathSymbol.innerHTML = '';
	mathSymbol.appendChild(imgDiv);
}}


function pow(){
	var firstNum = parseInt(document.querySelector('#firstnum').value);
	var secondNum = parseInt(document.querySelector('#secondnum').value);
	if (isNaN(firstNum) || isNaN(secondNum)) {
		alert('Please enter a number in both eyeballs')
	} else {
	answer.value = Math.pow(firstNum, secondNum);
	mathSymbol.innerHTML = '';
	mathSymbol.appendChild(imgPow);
}}

addButt.addEventListener('click', add);
subButt.addEventListener('click', subtract);
multButt.addEventListener('click', multiply);
divButt.addEventListener('click', divide);
powButt.addEventListener('click', pow);


// $(document).ready(function(){
// 	if (document.querySelector('button').click) {
// 		allOfThem();
// 	}
// });

// when a button is clicked then run the functions

// var math = document.getElementsByClassName('math');
// console.log(math + " Act like a fucking array");

// for (i=0; i<math.length; i++){
// 	math[i].addEventListener('click', function(){
// 		var x = parseInt(document.querySelector('.firstnum').value);
// 		var y = parseInt(document.querySelector('.secondnum').value);
// 		console.log(x, y);


// 		//this is a loop, but how to you separate between buttons
// 		//since the class is clicked it automatically accepts the id as clicked
// 		if (math[i] == document.getElementById('add')){
// 			add(x, y);

// 		} else if (math[i] = document.getElementById('#sub')) {
// 			subtract(x, y);

// 		} else if (document.querySelector('#mult')) {
// 			multiply(x, y);

// 		} else if (document.querySelector('div')) {
// 			divide(x,y);

// 		}
// 	})
// }

// function add(x,y){
// 	var sum = x+y;
// 	result = sum;
// 	alert(result);
// 	// return result
// }

// function subtract(x, y){
// 	if (x > y){
// 		var diff = x - y;
// 	} else if (x < y){
// 		var diff = y - x;
// 	} else {
// 		var diff = '0';
// 	}
// 	console.log(diff);
// }

// function multiply(x, y){
// 	var times = x * y;
// 	alert(times); 
// }

// function divide(x, y){
// 	var divide = x / y;
// 	alert(divide);
// }


// document.getElementById("add").addEventListener("click", function(){
// 	userInput();
// 	console.log('what the fuck');
// 	// if (document.getElementById('add')){
// 		add(firstNum, secondNum);
// 	// }
// });

// var firstNum;
// var secondNum;






// //This works as well, stole Rachels third input box idea
// var user1 = document.querySelector('#firstnum');
// var user2 = document.querySelector('#secondnum');
// var addButt = document.querySelector('#add');
// var subButt = document.querySelector('#sub');
// var multButt = document.querySelector('#mult');
// var divButt = document.querySelector('#div');
// var sqrtButt = document.querySelector('#sqrt'); 
// var powButt = document.querySelector('#pow');
// var answer = document.querySelector('#answer');
// var mathSymbol = document.querySelector('#symbol');

// var imgAdd = document.createElement('img');
// imgAdd.src = 'calculatorImages/add.png';
// var imgSub = document.createElement('img');
// imgSub.src = 'calculatorImages/sub.png';
// var imgMult = document.createElement('img');
// imgMult.src = 'calculatorImages/mult.png';
// var imgDiv = document.createElement('img');
// imgDiv.src = 'calculatorImages/divide.png';

// function clearBox()
// {
//     mathSymbol.removeChild(imgAdd);
//     mathSymbol.removeChild(imgSub);
//     mathSymbol.removeChild(imgMult);
//     mathSymbol.removeChild(imgDiv);
//     // document.getElementById('mathSymbol').innerHTML = "";
// }

// // var image_x = document.getElementById('image_X');
// // image_x.parentNode.removeChild(image_x);

// // $('div#imageContainer').on('mouseover', function(){
// //     $(this).children('img').attr('src','../newImage.png');
// // });



// //Do you query selectors RIGHT WHEN YOU NEED IT
// //the below code will/may get stale at some point,
// //the query selectors will be an image of the past values at some point
// function add(){
// 	var sum = parseInt(user1.value) + parseInt(user2.value);
// 	answer.value = sum;
// 	clearBox();
// 	mathSymbol.appendChild(imgAdd);
// }

// function subtract(){
// 	var diff = parseInt(user1.value) - parseInt(user2.value);
// 	answer.value = diff;
// 	mathSymbol.appendChild(imgSub);
// }

// function multiply(){
// 	var times = parseInt(user1.value) * parseInt(user2.value);
// 	answer.value = times;
// 	mathSymbol.appendChild(imgMult);
// }

// function divide(){
// 	var divider = parseInt(user1.value) / parseInt(user2.value);
// 	answer.value = divider;
// 	mathSymbol.appendChild(imgDiv);
// }

// // function sqrt() {
// // 	var sqrt = parseInt(user1.value) + parseInt(user2.value);
// // 	answer.value = sqrt;
// // }

// function pow(){
// 	var power = Math.pow(parseInt(user1.value), parseInt(user2.value));
// 	answer.value = power;
// }

// addButt.addEventListener('click', add);
// subButt.addEventListener('click', subtract);
// multButt.addEventListener('click', multiply);
// divButt.addEventListener('click', divide);
// // sqrtButt.addEventListener('click', sqrt);
// powButt.addEventListener('click', pow);







//THESE WORK WHEN YOU ADD ONCLICK TO THE HTML INLINE
//CALL THESE LATER, ONCLICK IN HTML IS OLD SCHOOL STAY AWAY FROM THAT ISH

// function add(){
// 	var firstNum = parseInt(document.querySelector('.firstnum').value);
// 	var secondNum = parseInt(document.querySelector('.secondnum').value);
// 	sum = firstNum + secondNum;
// 	alert(sum);	
// }

// function subtract(){
// 	var firstNum = parseInt(document.querySelector('.firstnum').value);
// 	var secondNum = parseInt(document.querySelector('.secondnum').value);
// 	if (firstNum > secondNum){
// 		var diff = firstNum - secondNum;
// 	} else if (firstNum < secondNum){
// 		var diff = secondNum - firstNum
// 	} else {
// 		var diff = '0';
// 	}
// 	alert(diff);
// }

// function multiply(){
// 	var firstNum = parseInt(document.querySelector('.firstnum').value);
// 	var secondNum = parseInt(document.querySelector('.secondnum').value);
// 	var times = firstNum * secondNum;
// 	alert(times); 
// }

// function divide(){
// 	var firstNum = parseInt(document.querySelector('.firstnum').value);
// 	var secondNum = parseInt(document.querySelector('.secondnum').value);
// 	var divide = firstNum / secondNum;
// 	alert(divide);
// }
