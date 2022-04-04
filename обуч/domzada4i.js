
// 1
{/* 
<p>tesdfsdfxt</p>
<input id="input" value="" ></input>

let p = document.querySelector('p')
let input = document.querySelector('#input')
input.addEventListener('blur', function (){

p.innerHTML += input.value 
}) */}

//2

{/* 
<p>сумма = </p>
<input id="input1" value="" >
<input id="input2" value="" >
<button id="button" type="submit">клик</button>	

let p = document.querySelector('p')
let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')

let button = document.querySelector('#button')

button.addEventListener('click', function (){
	p.innerHTML += Number(input1.value ) + Number(input2.value)
}) */}

//3

{/* 
<p>сумма = </p>
<input id="input1" value="" >

let p = document.querySelector('p')
let input1 = document.querySelector('#input1')

input1.addEventListener('blur', function (){
	p.innerHTML += Number(input1.value ) + Number(input1.value)
}) */}

//4

{/* 
<p>сумма = </p>
<input id="input1" value="" ></input>

let p = document.querySelector('p')
let input1 = document.querySelector('#input1')

input1.addEventListener('blur', func);

function func (){
	let sum = 0
	let str = input1.value;
	let arr = str.split(',');

	for(let i = 0; i < arr.length; i++){
		sum += Number(arr[i]);

	}
	
	p.innerHTML = sum/arr.length;
	

} */}

///5 

// <input id="input1" value="" >
// 	<input id="input2" value="" >
// 	<input id="input3" value="" >
// 	<input id="input4" value="" >

// let p = document.querySelector('p')
// let input1 = document.querySelector('#input1')

// let input2 = document.querySelector('#input2')
// let input3 = document.querySelector('#input3')
// let input4 = document.querySelector('#input4')

// input1.addEventListener('blur', func);

// function func (){
	
// 	let str = input1.value;
// 	let arr = str.split(' ');
	
// 	input2.value = arr[0];
// 	input3.value = arr[1];
// 	input4.value = arr[2];
	

// }


//6

// let p = document.querySelector('p')
// let input1 = document.querySelector('#input1')

// input1.addEventListener('blur', func);

// function func (){
// 	let str = input1.value;
// 	let arr = str.split(' ');
// 	let stroka
// 	input1.value = '';
// 	 for(let i = 0; i < arr.length; i++) {
// 		 stroka = (arr[i].slice(0,1).toUpperCase()) + (arr[i].slice(1)) + ' ';
// 		 input1.value += stroka
// 	 }

// }

// 7

// let p = document.querySelector('p')
// let input1 = document.querySelector('#input1')

// input1.addEventListener('blur', func);

// function func (){
// 	let str = input1.value;
// 	let arr = str.split(' ');
// 	input1.value = arr.length

// }

///8

// let input1 = document.querySelector('#input1')

// input1.addEventListener('blur', func);

// function func (){
// 	let str = input1.value;
// 	let arr = str.split('.').reverse()
// 	input1.value = arr.join('-') + '.'

// }

//9

// let input1 = document.querySelector('#input1')
// let button = document.querySelector('#button')

// button.addEventListener('click', func);

// function func (){
// 	let str = input1.value.split('');
// 	str.reverse();
  
// 	let str1 = input1.value;
// 	let rev = str.join('');

// 	if(str1 == rev){
// 		console.log('читается!')
// 	} else if (str1 != rev){
// 		console.log('не читается!')
// 	}
// }


//10

// let input1 = document.querySelector('#input1')
// let button = document.querySelector('#button')

// input1.addEventListener('click', func);

// function func (){
// 	let arr = input1.value.split('');
// 	for(let i of arr){
// 		if(i == 3){
// 			console.log('есть 3')
// 		}			
// 	}
// }

//11

// let p = document.querySelectorAll('p')
// let input1 = document.querySelector('#input1')
// let button = document.querySelector('#button')

// button.addEventListener('click', func);

// function func (){
// 	let num = 0;
// 	for(let i of p) {
// 		num++
// 		i.innerHTML += num	
// 	}
// }

//12

// let a = document.querySelectorAll('a')
// let input1 = document.querySelector('#input1')
// let button = document.querySelector('#button')

// button.addEventListener('click', func);

// function func (){
// 	for(let i of a) {
// 		i.innerHTML += '(' + i.href + ')'	
// 	}
// }

//13

// let a = document.querySelectorAll('a')
// let input1 = document.querySelector('#input1')
// let button = document.querySelector('#button')

// button.addEventListener('click', func);

// function func (){
// 	for(let i of a) {
// 		if(i.href.indexOf('http://') != -1 ){
// 			i.innerHTML += '&rarr;'
// 		}
// 	}
// }

//14

// let p1 = document.querySelector('.p1')
// let p2 = document.querySelector('.p2')
// let p3 = document.querySelector('.p3')


// function func (){
// 	this.innerHTML = this.innerHTML **2;
// }

// p1.addEventListener('click', func);
// p2.addEventListener('click', func);
// p3.addEventListener('click', func);

//15

// let p = document.querySelector('.p')
// let input1 = document.querySelector('#input1')
// let button = document.querySelector('#button')

// input1.addEventListener('blur', func);

// function func(){

// 	var arr = input1.value.split('.');
// 	arr.reverse();

// 	var date = new Date(Number(arr[0]),Number(arr[1])-1,Number(arr[2]));
	
// 	var dni = ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];

// 	input1.value = 'день недели: ' + date.getDay() + ' - ' + dni[date.getDay()];
// }


//16

// let p = document.querySelector('.p')
// let input1 = document.querySelector('#input1')
// let button1 = document.querySelector('#button1')
// let button2 = document.querySelector('#button2')

// button1.addEventListener('click', function () {
// 	input1.value = +(input1.value) + 1
// });

// button2.addEventListener('click', function () {
// 	input1.value = +(input1.value) -1
// 	if(input1.value < 0){
// 		input1.value = 0;
// 	} else {
// 		input1.value = +(input1.value);
// 	}
// });

//17

{/* <div id="div">
			<p>Абзац 1</p>
			<p>Абзац 2</p>
			<p>Абзац 3</p>
			<p>Абзац 4</p>
			<p>Абзац 5</p>
	
			<input type="text" id="input">
		  
	</div>

task26();

function task26() {

  let paragraph = document.querySelectorAll('#div p');
  let input = document.querySelector('#input');

  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].addEventListener('click', func);
  }

  let count = 0;

  function func() {
    count++;
    input.value = count;
  }

} */}


//18

// let div = document.querySelectorAll('div');

// let button = document.querySelector('#button');

// button.addEventListener('click', func);

// let res;

// function func () {
//   for(let i of div){
//     res = i.innerHTML.slice(0,10);
//     i.innerHTML = res + '...';
//   }
// }

//19

// let input = document.querySelector('#input');

// input.addEventListener('blur', func);

// let res;

// function func () {
//  if((input.value > 0) && (input.value <=  100)){
//    input.style.backgroundColor = 'green'
//  } else {
//   input.style.backgroundColor = 'red'
//  }
// }

//20

// let button = document.querySelector('#button');
// let input = document.querySelector('#input');

// button.addEventListener('click', func);


// function func() {
//   let str = '';
//   let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//   for (let i = 0; i < 8; i++) {
//     str += possible.charAt(Math.floor(Math.random() * possible.length));
//   }

//   input.value = str;
// }


//21 - перемешивание массива

// let button = document.querySelector('#button');
// let input = document.querySelector('#input');

// button.addEventListener('click', func);


// function func() {
//   let arr = input.value.split('');

//   let shuffledArr = arr.sort(function(){
//     return Math.random() - 0.5;
//   });

//   let str = shuffledArr.join('')
  

//   input.value = str
// }

//21 (метод фишера-йетса)

// function shuffle(arr){
// 	var j, temp;
//   for(var i = arr.length - 1; i > 0; i--){
// 		j = Math.floor(Math.random()*(i + 1));
// 		temp = arr[j];
// 		arr[j] = arr[i];
// 		arr[i] = temp;
//   }
// 	return arr;
// }

//22 