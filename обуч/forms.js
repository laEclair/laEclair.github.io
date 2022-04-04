//textarea

// let textarea = document.querySelector('#textarea')

// let p = document.querySelector('.p')

// textarea.addEventListener('blur', function (){
//     p.innerHTML = textarea.value
// })

//disabled

// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')
// let input = document.querySelector('#input')

// btn1.addEventListener('click', function (){
//     input.disabled = true;
// })
// btn2.addEventListener('click', function (){
//     input.disabled = false;
// })

//checkbox

{/* 
<input id="input" type="checkbox" ></input>		
<input id="btn1" type="submit" value="checked"></input>
<input id="btn2" type="submit" value="unchecked"></input>

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let input = document.querySelector('#input')


btn1.addEventListener('click', function (){
 input.setAttribute('checked', 'checked');
})
btn2.addEventListener('click', function () {
  input.removeAttribute('checked');
}) */}

//Чередование атрибутов без значений (включение/выключение кнопки)

// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')
// let input = document.querySelector('#input')


// btn1.addEventListener('click', function (){
//  input.checked = !input.checked;
// })


//radio


{/* <input id="input" type="radio" value="1"></input><br>
		<input id="input" type="radio" value="2" ></input> <br>
		<input id="input" type="radio" value="3"></input> <br> <br>

		<input id="btn1" type="submit" value="checked"></input>
		
		<p id="ab"></p>

// let btn1 = document.querySelector('#btn1')
// let p = document.querySelector('#ab')
// let radios = document.querySelectorAll('input[type="radio"]')


// btn1.addEventListener('click', function (){
//  for(let radio of radios){
//   if(radio.checked){
//     p.innerHTML = radio.value
//   }
//  }
// }) */}


//change 

// let btn1 = document.querySelector('#btn1')
// let p = document.querySelector('#ab')
// let input = document.querySelector('#input1')


// input.addEventListener('change', function (){
//   let str = (input.value).split('').length
//  if(str > 5) {
//    input.style.color = 'red'
//  } else {
//   input.style.color = 'green'
//  }
// })

//событие input


// let p = document.querySelector('#ab')
// let input = document.querySelector('#input1')


// input.addEventListener('input', function (){
//   let str = (input.value).split('').length
//  if(str < 5) {
//   alert('до лимита еще : ' + `${5 - str}`)
//   } 
//   else {
//     alert('лимит превышен на : ' + `${str - 5}`)
//   }
// })


//focus и blur как методы

// let p = document.querySelector('#ab')
// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')

// input1.addEventListener('input', function (){
//   let str1 = (input1.value).split('').length;
  
//   if(str1 == 2) {
//     input2.focus();
//   } 
  
// })
// input2.addEventListener('input', function () {
//   let str2 = (input2.value).split('').length;
//   if(str2 == 2) {
//     input2.blur();
//   } 
// })

//select (value)

// let btn = document.querySelector('#btn')
// let p1 = document.querySelector('#p1')
// let select = document.querySelector('#select')

// select.addEventListener('click', function (){
//  if((this.value == 6) || (this.value == 7)){
//    console.log(` выходной`)
//  } else {
//   console.log( `не выходной`)
//  }
  
// })

//select (високосный год без value)

// let btn = document.querySelector('#btn')
// let p1 = document.querySelector('#p1')
// let select = document.querySelector('#select')

// select.addEventListener('click', function (){
//  if(this.value % 4 == 0){
//    console.log(`${this.value} год високосный`)
//  } else {
//   console.log(`${this.value} год не високосный`)
//  }
  
// })

//select - выпадающий месяц = текущий месяц - изменение выбранного пункта списка

// let select = document.querySelector('#select')

// let date = new Date();
// let month= date.getMonth() + 1;

// select.value = month;


//номер выбранного пункта selectedIndex

// let inpt = document.querySelector('#inpt')

// let select = document.querySelector('#select')

// inpt.addEventListener('blur', function () {
//   select.selectedIndex =  +(inpt.value) - 1
// })

//текущий день недели

// let inpt = document.querySelector('#inpt')

// let select = document.querySelector('#select')

// let data = new Date ();
// let day = data.getDay() -1;

// select.selectedIndex = day

// все пункты списка
//console.log(document.querySelectorAll('#select option'));

//Пусть у нас есть переменная, хранящая ссылку на селект:

// let select = document.querySelector('#select');
// В таком случае поиск тегов option можно вести не по всему документу, а конкретно в нашем селекте:
// console.log(select.querySelectorAll('option'));

// При работе с селектами есть следующая особенность: переменная, в которой хранится ссылка на селект является массивом, элементами которого являются теги option. Это значит, что эту переменную можно перебрать циклом:

// let select = document.querySelector('#select');

// for (let option of select) {
// 	console.log(option);
// }
// Ну или просто обратится к пункту с нужным номером:

// let select = document.querySelector('#select');
// console.log(select[0]);

//перебор циклом select

// let inpt = document.querySelector('#inpt')

// let select = document.querySelector('#select')

// select.addEventListener('click', function () {
//   for(let option of select){
//     option.innerHTML += option.value
//   }
// })

//пункт списка через цикл

// let inpt = document.querySelector('#inpt')

// let select = document.querySelector('#select')

// select.addEventListener('click', function () {
//   for(let option of select){
//   if(option.selected){
//     option.innerHTML += '!'
//   } else {
//     option.innerHTML += '?'
//   }
//   }
// })

// выбор пункта списка

// let inpt = document.querySelector('#inpt')

// let select = document.querySelector('#select')

// inpt.addEventListener('click', function () {
//   for(let option of select){
//     option.selected = 'true'
   
//   }
// })

//2 

// let inpt = document.querySelector('#inpt')

// let select = document.querySelector('#select')

// inpt.addEventListener('click', function () {
//   alert('день недели : '+ ((select.selectedIndex) + 1))
// })

//3

// let inpt = document.querySelector('#inpt')

// let select = document.querySelector('#select')

// select.addEventListener('click', function () {
//   let index = select[select.selectedIndex];
//   index.innerHTML += '!'
// })