//создание и вставка элементов - createElement

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#button');

// let li = document.createElement('li');


// btn.addEventListener('click', function () {
// 	li.innerHTML = 'текст';
// 	elem.appendChild(li);
// })


////////////////////////////////////
//let elem = document.querySelector('#elem');
// let btn = document.querySelector('#button');

// let li = document.createElement('li');


// btn.addEventListener('click', function () {
// 	li.innerHTML = '!';
// 	elem.appendChild(li);
// })

// li.addEventListener('click', function () {
// 	li.innerHTML += '!';
// })

// создание элементов в цикле

// let parent = document.querySelector('#parent');

// for (let i = 1; i <= 10; i++) {
// 	let li = document.createElement('li');
// 	li.innerHTML = i;
	
// 	parent.appendChild(li);
// }

// навешивание обработчиков

// let parent = document.querySelector('#parent');
// let ab = document.querySelector('#ab');

// for (let i = 1; i <= 5; i++) {
// 	let inpt = document.createElement('input');
// 	inpt.value = '!';
	
// 	// Навешиваем обработчик клика:
// 	inpt.addEventListener('blur', function() {
// 		ab.innerHTML = inpt.value
// 	});
	
// 	parent.appendChild(inpt);
// }


/// создание через массивы


// let parent = document.querySelector('#parent');

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.innerHTML = elem;
	
// 	parent.appendChild(p);
// 	p.addEventListener('click', function () {
// 		p.innerHTML += 1
// 	})
// }


// практика

// let ul = document.querySelector('#elem');

// let arr = ['first', 'second', 'third'];

// for (let elem of arr) {
// 	let li = document.createElement('li');
// 	li.innerHTML = elem;
// 	ul.appendChild(li);
	
// 	function func () {
// 		this.innerHTML += '!'
// 		this.removeEventListener('click', func)
// 	}

// 	li.addEventListener('click', func);

	
// }

//генератор таблиц

// let table = document.querySelector('#table');
// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', function () {

// 	for (let i = 0; i < input1.value; i++) {
// 		let tr = document.createElement('tr');
		
// 		for (let j = 0; j < input2.value; j++) {
// 			let td = document.createElement('td');
// 			td.innerHTML = 'x'
// 			tr.appendChild(td);
// 		}
		
// 		table.appendChild(tr);
// 	}
// })

// button2.addEventListener('click', function () {
// 	for (let i = 0; i < input1.value; i++) {
// 		let tr = document.querySelector('tr');
		
// 		for (let j = 0; j < input2.value; j++) {
// 			let td = document.querySelector('td');
// 			td.innerHTML = 'x'
// 			tr.removeChild(td);
// 		}
		
// 		table.removeChild(tr);
// 	}
	
// })

// последовательное заполнение таблицы

// let table = document.querySelector('#table');

// let k = 2; // начальное значение счетчика
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
		
// 		td.innerHTML = k; // записываем счетчик в ячейку
// 		k += 2; // увеличиваем счетчик
		
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

//таблицы из двумерных массивов

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');

// for (let subArr of arr) {
// 	let tr = document.createElement('tr');

// 	for(let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.innerHTML = elem**2;

// 		tr.appendChild(td)
// 	}

// 	table.appendChild(tr)
// }


// работа с массивом объектов

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.getElementById('table');

// for (let employ of employees){
// 	let tr = document.createElement('tr');

// 	let td1 = document.createElement('td');
// 	td1.innerHTML = employ.name;
// 	tr.appendChild(td1);

// 	let td2 = document.createElement('td');
// 	td2.innerHTML = employ.age;
// 	tr.appendChild(td2);

// 	td2.addEventListener('click', function () {
// 		td2.innerHTML = +(td2.innerHTML) + 1
// 	})

// 	let td3 = document.createElement('td');
// 	td3.innerHTML = employ.salary;
// 	tr.appendChild(td3);

// 	td3.addEventListener('click', function () {
// 		td3.innerHTML = +(td3.innerHTML) + (td3.innerHTML * 0.1)
// 	})


// 	table.appendChild(tr);
// }



// Добавление рядов

// let table = document.getElementById('table');
// let btn = document.getElementById('btn');

// btn.addEventListener('click', function () {
	
// 	let tr = document.createElement('tr');
// 	for (let i = 1; i <= 3; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// })


// добавление колонок

// let table = document.getElementById('table');
// let btn = document.getElementById('btn');

// let tr = document.createElement('tr');
// for (let i = 1; i <= 2; i++) {
// 	let td = document.createElement('td');
// 	tr.appendChild(td);
// }
// table.appendChild(tr);

// btn.addEventListener('click', function () {
	

// 	let trs = document.querySelectorAll('#table tr');

// 	for (let tr of trs) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}

// })

// изменение содержимого ячеек в таблицы без двойного цикла

// let table = document.getElementById('table');
// let btn = document.getElementById('btn');

// let tds = document.querySelectorAll('#table td');

// btn.addEventListener('click', function () {
// 	for (let td of tds) {
// 		td.innerHTML = +(td.innerHTML) * 2;
// 	}
// })


// реверсивный порядковый номер ячеек таблицы


// let table = document.getElementById('table');
// let btn = document.getElementById('btn');

// let tds = document.querySelectorAll('#table td');

// let i = 4;
// for (let td of tds) {
// 	td.innerHTML = i --;
	
// }


//номер колонки и ряда таблицы

// let table = document.getElementById('table');
// let trs = document.querySelectorAll('#table tr');

// for (let i = 0; i < trs.length; i++) {
// 	let tr = trs[i];
// 	let tds = tr.querySelectorAll('td');
	
// 	for (let j = 0; j < tds.length; j++) {
// 		let td = tds[j];
// 		td.innerHTML = i+1 + 'ряд ' + (j + 1) + 'ячейка';
// 	}
// }


// обратная нумерация ячеек через for с двумя переменными

//let table = document.getElementById('table');
// let btn = document.getElementById('btn');

// let tds = document.querySelectorAll('#table td');

// for (let i = tds.length-1, k = 0; i >= 0; i--, k++) {
// 	tds[i].addEventListener('click', function() {
// 		this.innerHTML = k;
// 	});
// }


// счетчик кликов

//let tds = document.querySelectorAll('#table td');

// let i = 1;
// for (let td of tds) {
// 	td.addEventListener('click', function func() {
// 		this.innerHTML = i;
// 		i++;
// 		td.removeEventListener('click', func)
// 	});
	
// }

//чередование

// let tds = document.querySelectorAll('#table td');

// let i = 1;
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.innerHTML = i;
		
// 		if (i == 1) {
// 			i = 2;
// 		} else if (i == 2){
// 			i = 3;
// 		} else {
// 			i = 1;
// 		}
// 	});
// }

// removeChild - удаление элементов

// let parent = document.querySelector('#parent');
// let elem   = document.querySelector('#elem');

// let btn = document.querySelector('#btn')

// btn.addEventListener('click', function () {
// 	parent.removeChild(elem);
// })


//получение родителя

// let btn = document.querySelector('#btn')

// let elem = document.querySelector('#elem');


// btn.addEventListener('click', function () {
// 	elem.parentElement.removeChild(elem);
// })

// последний li из списка

// let parent = document.querySelector('#parent');
// let li = document.querySelectorAll('#parent li');

// let btn = document.querySelector('#btn')


// btn.addEventListener('click', function () {
// 	parent.removeChild(li[li.length-1]);
// })


//remove ()

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn')


// btn.addEventListener('click', function () {
// 	elem.remove();
// })


// самоудаление элементов

// let parent = document.querySelector('#parent');
// let elems  = document.querySelectorAll('#parent li');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		parent.removeChild(this);
// 	});
// }


//удаление по клику добавленного элемента + удаление старых элементов по клику

// let parent = document.querySelector('#parent');
// let elems  = document.querySelectorAll('#parent li');

// let btn = document.querySelector('#button');
// let i = 4;
// btn.addEventListener('click', function () {
// 	let li = document.createElement('li');
// 	li.innerHTML = i;
// 	i++;
// 	parent.appendChild(li);
	
// 	li.addEventListener('click', function (){
// 		parent.removeChild(li)
// 	})

// 	for (let elem of elems) {
// 		elem.addEventListener('click', function() {
// 			parent.removeChild(this);
// 		});
// 	}
// })


//ссылка на удаление элемента

// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');

// remove.addEventListener('click', function(event) {
// 	elem.parentElement.removeChild(elem);
// 	event.preventDefault();
// });

//удаление li тега

// let elems = document.querySelectorAll('#parent li');

// for (let elem of elems) {
// 	let li = document.createElement('p');
// 	li.href = '';
// 	li.innerHTML = 'remove';
// 	elem.appendChild(li);
	
// 	li.addEventListener('click', function(event) {
// 		elem.parentElement.removeChild(elem);
// 		event.preventDefault();
// 	});
// }


// ссылка на удаление ряда из таблицы

// let elems = document.querySelectorAll('#parent tr');

// for (let elem of elems) {
// 	let td = document.createElement('td');
// 		elem.appendChild(td);
// 		td.innerHTML = 9;

// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.innerHTML = 'remove';
// 	elem.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		elem.parentElement.removeChild(elem);
// 		event.preventDefault();
// 	});
// }


// insertBefore (элемент, перед кем поставить)

// let elem = document.querySelector('#elem');
// let parent = document.querySelector('#parent')

// let li = document.createElement('li');
// li.innerHTML = 'new'
// parent.insertBefore(li, elem)

//prepend и append

// let elem = document.querySelector('#elem');
// let li1 = document.createElement('li')
// li1.innerHTML = 'finish'
// elem.append(li1);

// let li2 = document.createElement('li')
// li2.innerHTML = 'start';
// elem.prepend(li2)


//2

// let elem = document.querySelector('#elem');
// let parent = document.querySelector('#parent')

// let li = document.createElement('li');
// li.innerHTML = 'new'
// parent.insertBefore(li, elem)

// li.addEventListener('click', function (){
// 	li.innerHTML  += '!'
// })


//insertAdjacentElement

// let elem = document.querySelector('#elem');

// let p = document.createElement('p');

// p.innerHTML = 'asdad';

// // elem.insertAdjacentElement('beforeBegin', p)

// // elem.insertAdjacentElement('afterEnd', p)

// // elem.insertAdjacentElement('afterBegin', p)

// elem.insertAdjacentElement('beforeEnd', p)


//insertAdjacentHTML

// let elem = document.querySelector('#elem');
// elem.insertAdjacentHTML('beforeEnd', '<div class="www"><p>text</p><p>text</p><input></div>')


//cloneNode

// let btn = document.querySelector('#btn');
// let input = document.querySelector('#input');
// let elem = document.querySelector('#elem');

// let clone = input.cloneNode(true)

// btn.addEventListener('click', function() {
// 	elem.appendChild(clone)
// })



// matches 

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');

// // let clone = elem.cloneNode(true)

// btn.addEventListener('click', function() {
// 	console.log(elem.matches('div'))
// })

//input как blur

// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');

// input.value = elem.innerHTML; // записываем в инпут текст абзаца

// input.addEventListener('input', function() {
// 	elem.innerHTML = this.value;
// });


// редактирование отдельного элемента

// let p = document.querySelector('#elem');
// let div = document.querySelector('#parent')

// p.addEventListener('click', function () {
// 	let input = document.createElement('input');
// 	input.value = p.innerHTML;
// 	p.parentElement.appendChild(input)

// 	input.addEventListener('blur', function () {
// 		p.innerHTML = this.value;
// 		this.parentElement.removeChild(this);
// 	})

// })


// редактирование всплывающиих элементов

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.innerHTML;
	
// 	elem.innerHTML = '';
// 	elem.appendChild(input);
	
// 	input.addEventListener('blur', function() {
// 		elem.innerHTML = this.value;
// 		elem.addEventListener('click', func); // повесим событие обратно
// 	});
	
// 	elem.removeEventListener('click', func);
// });


// все элементы - навешивание редактора (инпута)

// let elems = document.querySelectorAll('li');

// for (let elem of elems) {
	
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.innerHTML;
		
// 		elem.innerHTML = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.innerHTML = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }


//редактирование текста ячейки

// let elems = document.querySelectorAll('td');

// for (let elem of elems) {

// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.innerHTML;
		
// 		elem.innerHTML = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.innerHTML = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }



//редактирование элемента и удаление

// let elems = document.querySelectorAll('#parent p');

// for (let elem of elems) {
// 	let remove = document.createElement('a');

// 	remove.href = '';
// 	remove.innerHTML = 'remove';

// 	remove.addEventListener('click', function (event) {
// 		event.preventDefault();
// 		this.parentElement.remove();
// 	});
// 	elem.appendChild(remove);

// 	let span = elem.querySelector('span');

// 	span.addEventListener('click', function func() {

// 		let input = document.createElement('input');

// 		input.value = span.innerHTML;
// 		span.innerHTML = '';
// 		span.appendChild(input);

// 		input.addEventListener('blur', function () {
// 			span.innerHTML = this.value;
// 			span.addEventListener('click', func);
// 		});

// 		span.removeEventListener('click', func);
// 	});
// }



//добавление span тега + к верхнему заданию

//let elems = document.querySelectorAll('#parent p');
// for (let elem of elems) {
// 	let span = document.createElement('span');
// 	span.innerHTML = elem.innerHTML;
// 	elem.innerHTML = '';
// 	elem.appendChild(span);
	
// 	let remove = document.createElement('a');

// 	remove.href = '';
// 	remove.innerHTML = 'remove';

// 	remove.addEventListener('click', function (event) {
// 		event.preventDefault();
// 		this.parentElement.remove();
// 	});

// 	elem.appendChild(remove);

// 	span.addEventListener('click', function func() {

// 		let input = document.createElement('input');

// 		input.value = span.innerHTML;
// 		span.innerHTML = '';
// 		span.appendChild(input);

// 		input.addEventListener('blur', function () {
// 			span.innerHTML = this.value;
// 			span.addEventListener('click', func);
// 		});

// 		span.removeEventListener('click', func);
// 	});
// }



/// на кнопку - текст абзаца зачеркнут + зеленый + ссылка удалилась


// let elems = document.querySelectorAll('#parent p');

// for (let elem of elems) {
// 	let span = document.createElement('span');
// 	span.innerHTML = elem.innerHTML;
// 	elem.innerHTML = '';
// 	elem.appendChild(span);
	
// 	let stle = document.createElement('a');

// 	stle.href = '';
// 	stle.innerHTML = 'style';

// 	stle.addEventListener('click', function (event) {
// 		event.preventDefault();
// 		this.parentElement.style.textDecoration = 'line-through';
// 		this.parentElement.style.color = 'green';
// 		stle.innerHTML = ''
// 		stle.remove()
// 	});

// 	elem.appendChild(stle);


// 	span.addEventListener('click', function func() {

// 		let input = document.createElement('input');

// 		input.value = span.innerHTML;
// 		span.innerHTML = '';
// 		span.appendChild(input);

// 		input.addEventListener('blur', function () {
// 			span.innerHTML = this.value;
// 			span.addEventListener('click', func);
// 		});

// 		span.removeEventListener('click', func);
// 	});
// }



// добавить цвет ряду и убрать

// let elems = document.querySelectorAll('#parent tr');

// for (let elem of elems) {
// 	let td = document.createElement('td');

// 	td.innerHTML = 'd';
// 	elem.innerHTML = '';
// 	elem.appendChild(td);
	
// 	let stle = document.createElement('a');

// 	stle.href = '';
// 	stle.innerHTML = 'style';

// 	stle.addEventListener('click', function (event) {
// 		event.preventDefault();
// 		this.parentElement.style.backgroundColor = 'green';
// 		stle.addEventListener('click', function (){
// 			this.parentElement.style.backgroundColor = '';
// 		});
// 	});

// 	elem.appendChild(stle);


// 	td.addEventListener('click', function func() {

// 		let input = document.createElement('input');

// 		input.value = span.innerHTML;
// 		td.innerHTML = '';
// 		td.appendChild(input);

// 		input.addEventListener('blur', function () {
// 			td.innerHTML = this.value;
// 			td.addEventListener('click', func);
// 		});

// 		td.removeEventListener('click', func);
// 	});
// }


//показать/скрыть абзац по одной кнопке

// let elem = document.querySelector('#elem');
// let show = document.querySelector('#show');
// let hide = document.querySelector('#hide');

// function func() {
// 	elem.classList.add('hidden');
// 	this.removeEventListener('click', func);
// }
// hide.addEventListener('click', func)


// hide.addEventListener('click', function (){
// 	elem.classList.remove('hidden');
// 	this.addEventListener('click', func)
// });



////////////////////////////////////////////////////// 3 решения по выцеплению через data-elem

// let buttons = document.querySelectorAll('button');

// for (let button of buttons) {
// 	button.addEventListener('click', function() {
		
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }

// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');

// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	});
// }


// let buttons = document.querySelectorAll('button');

// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		this.previousElementSibling.classList.toggle('hidden');
// 	});
// }

///////////////////////////////////////////////////////////////////


//активация элементов active


// let lis = document.querySelectorAll('#parent li')

// for(let li of lis){

// 	function func (){
// 		this.classList.add('active')
// 		li.removeEventListener('click', func);
// 	}

// 	li.addEventListener('click', func);
	
// 	li.addEventListener('click', function (){
// 		this.classList.remove('active');
		
// 		this.addEventListener('click', func);
// 	})
// }


//чередование цветов из массива

// td.color1 {
// 	background: red;
// }
// td.color2 {
// 	background: green;
// }

// td.color3 {
// 	background: yellow;
// }

// let tds = document.querySelectorAll('#parent td');
// let colors = ['color1', 'color2', 'color3'];
// let i = 0;

// for(let td of tds){
// 	td.addEventListener('click', function (){
// 		this.classList.add(colors[i]);	
// 		i++;
// 		if (i == colors.length) {
// 			i = 0;
// 		}
// 	});
// }




//// в ряду можно активировать только 5 ячеек

// let tds = document.querySelectorAll('#parent td');


// for(let td of tds){
// 	td.addEventListener('click', function (){
		
// 		let activeTds = td.parentElement.querySelectorAll('#parent td.active');

		
// 		if(activeTds.length < 5){
		
// 		this.classList.add('active');
// 		}
// 	});
// }


/// нельзя активировать соседние ячейки

// let tds = document.querySelectorAll('#parent td');


// for(let td of tds){
// 	td.addEventListener('click', function (){
// 		let next = this.nextElementSibling;
// 		let previous = this.previousElementSibling;
		
// 		let activeTds = td.parentElement.querySelectorAll('#parent td.active');

// 		if(activeTds.length < 5){
// 			if((next.classList != 'active') && (previous.classList != 'active')){
// 				this.classList.add('active');
// 			}
		
// 		}

		
// 	});
// }


/// нельзя активировать соседние сверху и снизу ячейки

// let tds = document.querySelectorAll('#parent td');


// for(let td of tds){
// td.addEventListener('click', function (){
// let next = this.parentElement.nextElementSibling.children;
// let previous = this.parentElement.previousElementSibling.children;
// let parent = this.parentElement.children;

// for(let i = 0; i < parent.length; i++){
// if(parent[i] == this){
// next = next[i];
// previous = previous[i];
// }
// }

// if(!next.classList.contains('active') && !previous.classList.contains('active')){
// this.classList.add('active')
// }
// });
// }




// массив в виде ul
// let arr = ['1', '2', '3'];
// let ul = document.querySelector('#ul');

// for(let elem of arr){
//     let li = document.createElement('li');
//     li.innerHTML = elem;
//     ul.appendChild(li);
// }



////////////// создание li из arr с редактированием через инпут и перечеркиванием


// let arr = ['1', '2', '3'];
// let ul = document.querySelector('#ul');

// for(let elem of arr){
//     let li = document.createElement('li');
//     li.innerHTML = elem;
//     ul.appendChild(li);

//     let a = document.createElement('a');
//     a.innerHTML = 'перечеркнуть';
//     a.href = ''
    
//     a.addEventListener ('click', function (event){
//         event.preventDefault();
//         this.parentElement.style.textDecoration = 'line-through';
//         a.innerHTML = ''
// 		a.remove()
//     })

//     li.appendChild(a)

//     li.addEventListener('click', function func(){
      
// 		let input = document.createElement('input');
// 		input.value = li.innerHTML;
		
// 		li.innerHTML = '';
// 		li.appendChild(input);

        
// 		input.addEventListener('blur', function() {
// 			li.innerHTML = this.value;
// 			li.addEventListener('click', func);
// 		});
		
// 		li.removeEventListener('click', func);
		
//     })

// }

// let inptmain = document.createElement('input');
// ul.appendChild(inptmain);

// inptmain.addEventListener('blur', function (){
//     let li = document.createElement('li');
//     li.innerHTML = inptmain.value;
//     ul.appendChild(li);

//     let a = document.createElement('a');
//     a.innerHTML = 'перечеркнуть';
//     a.href = ''
    
//     a.addEventListener ('click', function (event){
//         event.preventDefault();
//         this.parentElement.style.textDecoration = 'line-through';
//         a.innerHTML = ''
// 		a.remove()
//     })

//     li.appendChild(a);

//     li.addEventListener('click', function func(){
      
// 		let input = document.createElement('input');
// 		input.value = li.innerHTML;
		
// 		li.innerHTML = '';
// 		li.appendChild(input);

// 		input.addEventListener('blur', function() {
// 			li.innerHTML = this.value;
// 			li.addEventListener('click', func);
// 		});
		
// 		li.removeEventListener('click', func);
		
//     })
// })





/// поиск ячеек таблицы с помощью атрибута data

// let col = 2;
// let tds = document.querySelectorAll('#table td');

// for (let td of tds) {
	
//     td.addEventListener('click', function (){
//         let colAll = document.querySelectorAll('#table td[data-col="' + col + '"]');
//         for(let coll of colAll){
           
//             coll.style.backgroundColor ='red'
//         }
        
//     })
// }



///// поиск по колонке и строке

// let  btn = document.querySelector('#btn');

// let col = 2;
// let row = 3;
// let colAll = document.querySelectorAll('#table td[data-col="' + col + '"]');

// let rowAll = document.querySelectorAll('#table td[data-row="' + row + '"]');


// for (let td of rowAll) {
//     for(td of colAll){
//         btn.addEventListener('click', function (){
//             td.style.backgroundColor = 'red'     
//          })
//     }
// }



//Конкретная диагональ в таблице красится в красный цвет а остальное в зеленый


// let  btn = document.querySelector('#btn');
// let tds = document.querySelectorAll('#table td');

// let i = 1;
// let j = 1;
// for (let td of tds) {
//    td.setAttribute('data-col', i);
//    td.setAttribute('data-row', j);
//    i++;
//     if (i == 4){
//         i = 1;
//         j++;
//     }

//     td.addEventListener('click', function () {
//         if((td.dataset.row == '1') && (td.dataset.col == '1')){
//             td.style.backgroundColor = 'red'
//         } else if ((td.dataset.row == '2') && (td.dataset.col == '2')){
//             td.style.backgroundColor = 'red'
//         } else if ((td.dataset.row == '3') && (td.dataset.col == '3')){
//             td.style.backgroundColor = 'red'
//         } else {
//             td.style.backgroundColor = 'green'
//         }

//     })
// }



/////////// поиск ячеек через селектор css


// let tds = document.querySelectorAll('#table tr:nth-child(even) td:nth-child(odd)');

// for (let td of tds) {
// 	td.style.backgroundColor = 'red';
// }



