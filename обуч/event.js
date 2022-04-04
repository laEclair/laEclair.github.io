// //event

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	console.log(event); // увидим объект с событием
// });

//Координаты события в JavaScript

// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });

//Тип события в объекте Event в JavaScript

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(event) {
// 	if((event.type) == 'click'){
// 		elem.style.color = 'red'
// 	} else if ((event.type) == 'dblclick'){
// 		elem.style.color = 'green'
// 	}
// }

// target

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function (event) {
// 	if (event.target.tagName == 'UL') {
// 	event.target.innerHTML += '<li>text</li>';
// 	}
	
// 	if (event.target.tagName == 'LI') {
// 	event.target.innerHTML += '!';
// 	}
// 	});

//Получение нажатых клавиш в JavaScript

{/* <input id="input"  type="text">
<p id="ab"></p>

let ab = document.querySelector('#ab');
let input = document.querySelector('#input');

input.addEventListener('keydown', function (event) {
	if (event.key == 'Enter') {
		ab.innerHTML += input.value
		input.value = '';
	}
	
}); */}

// altKey, ctrlKey, shiftKey

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	if (event.altKey) {
// 		elem.style.backgroundColor = 'red'
// 	}
	
// });

//2

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {	
// 	if (event.target.tagName == 'LI') {
// 		if (event.shiftKey) {
// 			event.target.innerHTML += '2';
// 		}
// 		if (event.ctrlKey) {
// 			event.target.innerHTML += '1';
// 		}
// 	}
// });

//preventDefault - отмена действий

// let a = document.querySelector('#elem');
// let inpt1 = document.querySelector('#inpt1');
// let inpt2 = document.querySelector('#inpt2');
// let p = document.querySelector('#ab');

// a.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	p.innerHTML = +(inpt1.value) + +(inpt2.value)
// });

//Всплытие событий - bubbling

// <div id="elem1">
// 	<div id="elem2">
// 		<div id="elem3"></div>
// 	</div>
// </div>

// #elem1 {
//     width: 200px;
//     height: 200px;
//     margin: 0 auto;
//     padding: 1px;
//     background: #97FF97;
// }
// #elem2 {
//     width: 140px;
//     height: 140px;
//     margin: 30px;
//     padding: 1px;
//     background: #7777FF;
// }

// #elem3 {
//     width: 80px;
//     height: 80px;
//     margin: 30px;
//     padding: 1px;
//     background: #FF7D7D;
// }

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// elem1.addEventListener('click', function() {
// 	alert('зеленый');
// });
// elem2.addEventListener('click', function() {
// 	alert('голубой');
// });
// elem3.addEventListener('click', function() {
// 	alert('красный');
// });


//Получение целевого элемента при всплытии событий

{/* <div>
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
</div>

div, ul, li {
	padding: 20px;
}

div {
	border: 1px solid red;
}
ul {
	border: 1px solid orange;
}
li {
	border: 1px solid green;
}

let div = document.querySelector('div');

div.addEventListener('click', function(event) {
	if (event.target.matches('div')) {
		alert('клик именно по диву');
	}
	if (event.target.matches('ul')) {
		alert('клик именно ul');
		event.target.innerHTML += '<li>4</li>';
	}
	if (event.target.matches('li')) {
		alert('клик именно по li' + `${event.target.innerHTML}`);
		event.target.innerHTML += '!'
	}
}); */}

//Прекращение всплытия событий в JavaScript

{/* <div id="parent">
	<button>click me</button>
	<div id="block">
		text
	</div>
</div>

#block:not(.active) {
	display: none;
}

let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block  = document.querySelector('#block');

button.addEventListener('click', function(event) {
	block.classList.add('active');
	event.stopPropagation();
});

parent.addEventListener('click', function() {
	block.classList.remove('active');
}); */}

//погружение и третий параметр addEventListener

// elem1.addEventListener('click', function() {
// 	alert('зеленый - погружение');
// }, true);
// elem1.addEventListener('click', function() {
// 	alert('зеленый - всплытие');
// }, false);

// elem2.addEventListener('click', function() {
// 	alert('голубой - погружение');
// }, true);
// elem2.addEventListener('click', function() {
// 	alert('голубой - всплытие');
// }, false);

// elem3.addEventListener('click', function() {
// 	alert('красный - погружение');
// }, true);
// elem3.addEventListener('click', function() {
// 	alert('красный- всплытие');
// }, false);

//навешивание обработчика на новые элементы

{/* <ul>
	<li>item</li>
	<li>item</li>
	<li>item</li>
	<li>item</li>
	<li>item</li>
</ul>

<button>add</button>

let button = document.querySelector('button');
let list   = document.querySelector('ul');
let items  = list.querySelectorAll('li');

for (let item of items) {
	item.addEventListener('click', handler);
}

button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.innerHTML = 'item';
	
	item.addEventListener('click', handler);
	
	list.appendChild(item);

	function handler() {
	this.innerHTML = this.innerHTML + '!';
}
}); */}

//делегирование событий 

{/* <ul>
<li>item</li>
<li>item</li>
<li>item</li>
<li>item</li>
<li>item</li>
</ul>
<button>add</button>

let button = document.querySelector('button');
let list   = document.querySelector('ul');
let items  = list.querySelectorAll('li');


button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.innerHTML = 'item';
	list.appendChild(item);})

list.addEventListener('click', function(event) {
	event.target.innerHTML = event.target.innerHTML + '!';
}); */}


//универсальное делегирование событий

// <ul>
// 			<li>item <i>italic</i> item</li>
// 			<li>item <i>italic</i> item</li>
// 			<li>item <i>italic</i> item</li>
// 			<li>item <i>italic</i> item</li>
// 			<li>item <i>italic</i> item</li>
// 		</ul>
// 		<button>add</button>

// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');


// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.innerHTML = 'item';
// 	list.appendChild(item);})

// list.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
		
// 	if (li) {
// 		li.innerHTML = li.innerHTML + '!';
// 	}
// });