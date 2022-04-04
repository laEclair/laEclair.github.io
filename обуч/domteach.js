//////////////// клики
// let button1 = document.querySelector('#button1');
// button1.addEventListener('mouseover', function() {
// 	alert('1'); // выведет по наведению
// });
// button1.addEventListener('mouseout', function() {
// 	alert('2'); // выведет по уходу курсора
// });

// let button2 = document.querySelector('#button2');
// button2.addEventListener('doubleclick', function() {
// 	alert('2');
// });

// let button3 = document.querySelector('#button3');
// button3.addEventListener('click', function() {
// 	alert('3');
// });

//////////////// функции

// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', func1);

// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', func2);

// function func1() {
// 	alert(1);
// }

// function func2() {
// 	alert(2);
// }

//////////////////// одну функцию ко многим элементам

// let button1 = document.querySelector('#elem1');
// let button2 = document.querySelector('#elem2');
// let button3 = document.querySelector('#elem3');
// let button4 = document.querySelector('#elem4');
// let button5 = document.querySelector('#elem5');

// button1.addEventListener('click', func);
// button2.addEventListener('click', func);
// button3.addEventListener('click', func);
// button4.addEventListener('click', func);
// button5.addEventListener('click', func);

// function func() {
// 	alert('message');
// }

///////////////////// несколько обработчиков одного события

// let button = document.querySelector('#button');

// button.addEventListener('click', func1);
// button.addEventListener('click', func2);
// button.addEventListener('click', func3);


// function func1() {
// 	alert('1');
// }

// function func2() {
// 	alert('2');
// }

// function func3() {
// 	alert('3');
// }

//////////////// анонимные функции 
// let button = document.querySelector('#button');

// button.addEventListener('dblclick', function() {
// 	alert('1');
// });
// button.addEventListener('dblclick', function() {
// 	alert('2');
// });

// button.addEventListener('dblclick', function() {
// 	alert('3');
// });

////////////////// сложение чисел из тегов

// let button = document.querySelector('#button');
// let elem1   = document.querySelector('#elem1');
// let elem2   = document.querySelector('#elem2');

// button.addEventListener('click', function() {
// 	alert(Number(elem1.innerHTML) + Number(elem2.innerHTML));
// });

/////////// чтение из тега

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let elem1   = document.querySelector('#elem1');
// let elem2   = document.querySelector('#elem2');

// button1.addEventListener('click', function() {
// 	alert(elem1.innerHTML);
// });

// button2.addEventListener('click', function() {
//     alert(elem2.innerHTML)
// })

/////////////////// задачи

//1

// let elem1   = document.querySelector('#elem1');
// let elem2   = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3')

// elem1.addEventListener('click', function() {
// 	elem1.innerHTML = 1;
// });
// elem2.addEventListener('click', function() {
// 	elem2.innerHTML = 2;
// });
// elem3.addEventListener('click', () => {
//     elem3.innerHTML = 3
// })

//2 (работа с числовым значением)


// let elem1   = document.querySelector('#elem1');
// let button1 = document.querySelector('#button1')

// button1.addEventListener('click', function() {
//     elem1.innerHTML = Number(elem1.innerHTML)**2;
// });


//3 Оборот в теги

// let elem1   = document.querySelector('#elem1');
// let button1 = document.querySelector('#button1')

// button1.addEventListener('click', function() {
// 	elem1.innerHTML = '<b>'+ elem1.innerHTML + '</b>';
// });


///////////////////// Замена ссылок внутри тега

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// // let elem   = document.querySelector('#elem');
// let img = document.querySelector('#img');
// let p = document.querySelector('#p');

// button1.addEventListener('click', function() {
// 	 img.src = 'img.jpg' ; 
// });
// button2.addEventListener('click', () => { img.src = 'img2.bmp'})

////////// квадрат числа в инпутах

// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let button = document.querySelector('#button')

// let p = document.querySelector('#p')

// button.addEventListener('click', () => {
// 	input2.value += Number(input1.value)**2
// })

////////// смена кнопок туда-сюда

// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let button1 = document.querySelector('#button1')
// let button2 = document.querySelector('#button2')

// let p = document.querySelector('#p')
// let inputf = input1.value
// let inputs = input2.value

// button1.addEventListener('click', () => {
// 	input2.value = inputf
// 	input1.value = inputs
// })

// button2.addEventListener('click', () => {
// 	input1.value = inputf
// 	input2.value = inputs
// })



//////////////////////// среднее арифметическое 

// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let input3 = document.querySelector('#input3');
// let input4 = document.querySelector('#input4');
// let input5 = document.querySelector('#input5');


// let button1 = document.querySelector('#button1')


// let p = document.querySelector('#p')

// button1.addEventListener('click', () => {
// 	let res = Number(input1.value) + Number(input2.value) 
// 	+ Number(input3.value) + Number(input4.value) + Number(input5.value)
	
// 	p.innerHTML = res / 5
// })


//////////////// focus и blur

// let elem = document.querySelector('#elem');

// elem.addEventListener('focus', function() {
// 	elem.value = ''
// });

// elem.addEventListener('blur', function() {
// 	elem.value = ''
// });

////////////////// присваивание класса

// let elem = document.querySelector('#elem');

// let button = document.querySelector('button')

// button.addEventListener('click', () => {
// 	elem.className = 'kkkkk'
// })

/////////////////////////// массив сss классов из атрибута class div'a

// let elem = document.querySelector('#elem');

// let button = document.querySelector('button')

// button.addEventListener('click', () => {

// 	let arr = elem.className.split(' ');
// 	let result = arr
// 	console.log(result)
// })


///////////// Запись через одну строку ( если много параметров, То нагрузка очень сильная)

// console.log(document.querySelector('#image').src);




//////////////////////// this 

// let button = document.querySelector('#button');
// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
// let input3 = document.querySelector('#input3')


// function func () {
//     this.value = Number(this.value)**2
// }

// input1.addEventListener('blur', func );
// input2.addEventListener('blur', func );
// input3.addEventListener('blur', func );



////////querySelectorAll

// let inputs = document.querySelectorAll('.www');
// let button = document.querySelector('#button')
// let p = document.querySelector('.p')

// button.addEventListener('click', function () {
//     let sum = 0
//     for(let elem of inputs){
//         sum += Number(elem.value) 
//     }
//     p.innerHTML = sum
// })

//////////////////// получение тегов 

// let elems = document.querySelectorAll('p');

// function func() {
// 	this.innerHTML = Number(this.innerHTML) **2;
// }

// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }

////////////// анонимные функции

// let divs = document.querySelectorAll('div');

// for (let div of divs) {
// 	div.addEventListener('click', function () {
//         this.innerHTML++;
//     });
// }


////////////////// removeEventListener


// let button = document.querySelector('#button');

// button.addEventListener('click', func);

// function func() {
// 	button.innerHTML = Number(button.innerHTML ) +1;

// 	if(button.innerHTML == 10) {
//         this.removeEventListener('click', func);
//     }
// }

/////////////////////// В ЦИКЛЕ ОТВЯЗЫВАЮ СОБЫТИЯ - анонимные функции 

// (Через цикл на каждый элемент привязывается функция, 
// но в самой функции после основной отработки идет отвязка функции 
// - и получается что она перезаписывается на каждый раз)

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }

// function func() {
// 	this.innerHTML += '!'
// 	this.removeEventListener('click', func); // отвязываем обработчик
// }


////////////////////// атрибуты

///                                          getAtribute                                                          ///

// let elem = document.querySelector('#elem')

// let value = elem.getAttribute('value')

// alert(value)

// let elem = document.querySelector('#elem')

// let class1 = elem.getAttribute('class')

// alert(class1)

///                                          setAtribute                                                          ///

// let elem = document.querySelector('#elem');
// elem.setAttribute('class', 'valid');

///                                          removeAtribute                                                          ///

// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');

///                                          hasAtribute                                                          ///

// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'))



/////////////// проверка на изменение инпута

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

//  elem.value = 'new';

// let valueold = elem.getAttribute('value')

// button.addEventListener('click', function () {
// 	if(elem.value != valueold ){
// 		console.log('изменено')
// 	} else if(elem.value == valueold) {
// 		console.log('не изменено')
// 	}
// })




///////////////////////////////// возвращение начального значения инпута

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// elem.setAttribute('value', 'Значение');

// let value = elem.getAttribute('value');


// button.addEventListener('click', function () {
// 	elem.value = value;
// })

//////////////////////////// classList

// let elem = document.querySelector('#elem');
// console.log(elem.classList.length)


//let elem = document.querySelector('#elem');
// let elems = elem.classList

// for(let i of elems){
// 	console.log(i)
// }

///////////////// add

// let elem = document.querySelector('#elem');
// elem.classList.add('xxx')

/////////// remove

// let elem = document.querySelector('#elem');
// elem.classList.remove('zzz')


///////////////// contains

// let elem = document.querySelector('#elem');
// console.log(elem.classList.contains('zzz'))


//////////////// toggle

// let elem = document.querySelector('#elem');
// elem.classList.toggle('xxx')


/////////////////// style css

// let button = document.querySelector('#button')

// let div = document.querySelector('#div')

// button.addEventListener('click', function () {
// 	div.style.height = '100px'
// 	div.style.width = '100px'
// 	div.style.color = 'red'
// 	div.style.fontSize = '100px'
// 	div.style.backgroundColor = 'green'
// 	div.style.borderTop = '1px solid black';
// 	div.style.borderColor = 'red'
// })




/////////////////// работа с css

// let p = document.querySelector('#p');
// let btn1 = document.querySelector('#button1');
// let btn2 = document.querySelector('#button2');
// let btn3 = document.querySelector('#button3');

// btn1.addEventListener('click', function func(){
// 	p.classList.add('line')
// });

// btn2.addEventListener('click', function func(){
// 	p.classList.add('fat')
// });

// btn3.addEventListener('click', function func(){
// 	p.classList.add('red')
// });


////////////////////////////// классы 

// let p = document.querySelector('#p');
// let btn1 = document.querySelector('#button1');
// let btn2 = document.querySelector('#button2');
// let btn3 = document.querySelector('#button3');

// btn1.addEventListener('click', function func(){
// 	p.classList.toggle('line')
// });

// btn2.addEventListener('click', function func(){
// 	p.classList.toggle('fat')
// });

// btn3.addEventListener('click', function func(){
// 	p.classList.toggle('active')
// });


// #p {
// 	display: none;
// 	width: 200px;
// 	height: 200px;
// 	border: 1px solid green;
// }

// #p.active {
// 	display: block;
// }



////////////////// дочерние элементы


// let ul = document.querySelector('#elem');

// let btn1 = document.querySelector('#button1');

// let elems = ul.children;

// btn1.addEventListener('click', function func(){
// 	for (let elem of elems) {
// 		elem.innerHTML += '!'
// 	}
// ul.firstElementChild.style.color = 'red'
// ul.lastElementChild.style.color = 'red'
// });

//////////////////////// родительские элементы (родитель родителя)

// let li = document.querySelector('#elem');

// let btn1 = document.querySelector('#button1');
// let ul = li.parentElement
// btn1.addEventListener('click', function func(){
	
// 	ul.parentElement.style.border = '1px solid red'
	
// });

///////////////// метод closest

// let li = document.querySelector('#elem');

// let btn1 = document.querySelector('#button1');

// btn1.addEventListener('click', function func(){
	
// 	li.closest('header').style.border = '1px solid red'
	
// });

///////////////////// предыдущие и следующие элементы

// let span = document.querySelector('#elem');

// let btn1 = document.querySelector('#button1');
// let next = span.nextElementSibling.innerHTML
// let pres = span.previousElementSibling.innerHTML

// btn1.addEventListener('click', function func(){
// 	span.nextElementSibling.innerHTML = pres
// 	span.previousElementSibling.innerHTML = next
	
// });


//////////////////////// getElementById

// let span = document.getElementById('elem')

// let btn1 = document.querySelector('#button1');

// btn1.addEventListener('click', function func(){
// span.innerHTML = 'sadasdsad'
	
// });

///////////////////////// getElementByTagName

// let li = document.getElementsByTagName('li')

// let btn1 = document.querySelector('#button1');

// btn1.addEventListener('click', function func(){
// 	for(let i of li) {
// 		i.style.color = ' red'
// 	}
	
// });

///////////////////// getElementByClassName

// let li = document.getElementsByClassName('www')

// let btn1 = document.querySelector('#button1');

// btn1.addEventListener('click', function func(){
// 	for(let i of li) {
// 		i.style.color = 'red'
// 	}
	
// });

/////////////// поиск внутри родителя

// let parent = document.querySelector('#parent');

// let elems1 = parent.querySelectorAll('.www')

// let elems2 = parent.querySelectorAll('.ggg')

// console.log(elems1, elems2)



//////////////////////// пользовательское создание атрибутов


// let elems = document.querySelectorAll('div');

// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }

// function func() {
// 	this.innerHTML += this.dataset.num
// 	this.removeEventListener('click', func); // отвязываем обработчик
// }

////////////

// let elems = document.querySelector('div');
// let button = document.querySelector('#button1');

// button.addEventListener('click', function() {
// 	elems.dataset.num = Number(elems.dataset.num) + 1
// 	elems.innerHTML = elems.dataset.num
// })


////////////////////////// Длина инпута


// let input = document.querySelector('#elem');
// let button = document.querySelector('#button1');

// input.addEventListener('blur', lengthIn)

// function lengthIn () {
// 	if(input.value.length > input.dataset.length){
// 		alert('Превышение длины ввода')
// 	}
// }

/////////// диапазон

// let input = document.querySelector('#elem');
// let button = document.querySelector('#button1');

// input.addEventListener('blur', lengthIn)

// function lengthIn () {
// 	if((input.value.length < input.dataset.min) || (input.value.length > input.dataset.max)){
// 		alert('Не попали в диапазон')
// 	}
// }


////////////////// имена с дефисами

// let div = document.querySelector('#elem');
// let button = document.querySelector('#button1');

// div.addEventListener('click', function() {
// 	div.innerHTML += Number(div.dataset.productPrice) * Number(div.dataset.productAmount)
// })


////////////// нумерование нескольких тегов

// let elem = document.querySelectorAll('p');
// let num = 1;

// for(let i of elem) {
// 	i.setAttribute('data-num', num)
// 	num++;
// }

////////////////// childNodes

// let elem = document.querySelector('#elem')


// for (let node of elem.childNodes) {
// 	console.log(node.nodeName);
// }

///////////// nodeType

// let elem = document.querySelector('#elem')


// for (let node of elem.childNodes) {
// 	if((node.nodeType == 1) || (node.nodeType == 3)){
// 		console.log(node.nodeName)
// 	}
// }

///////////////////////// data(от node)


// let elem = document.querySelector('#elem')


// for (let node of elem.childNodes) {
// 		if(node.nodeType == 1){
// 			console.log(node.innerHTML)
// 		}
// 		else {
// 			console.log(node.data)
// 		}
// }

