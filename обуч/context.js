//context - this

{/* <input id="elem1" value="text1">
<input id="elem2" value="text2"></input> 
 let elem1 = document.querySelector('#elem1');
 elem1.addEventListener('blur', func);

 let elem2 = document.querySelector('#elem2');
 elem2.addEventListener('blur', func);

 function func() {
 	console.log(this.value); // выведет или 'text1', или 'text2'
 } */}

//  В любой функции можно написать this, это не приведет к каким-либо ошибкам JavaScript. 
// Но вот что именно будет лежать в этом this не определено до момента вызова функции. 
// Причем при разных вызовах функции this может принимать разное значение. 
// Все зависит от контекста, в котором была вызвана функция


//потеря контекста

// Такая ситуация, когда this неожиданным для нас образом указывает не на то, 
// что нам нужно, называется потеря контекста.

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
// 	console.log(this.value); // что выведет?
	
// 	function child() {
// 		console.log(this.value); // что выведет?
// 	}
// 	child();
// }

//1

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);


// function func() {
	
// 	let self = this;

// 	function square() {
// 		return self.value **2
// 	}
// 	alert( square() );
// }

//2 через параметр

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);


// function func() {

// 	function square(param) {
// 		return param.value **2;
// 	}
// 	alert( square(this) );
// }

//3 - через стрелочные функции

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);


// function func() {

// 	let square = () => {
// 		return this.value **2;
// 	}
// 	alert( square() );
// }

// call

//1

// let elem1 = document.getElementById('elem1');
// let elem2 = document.getElementById('elem2');
// let elem3 = document.getElementById('elem3');

// function func() {
// 	alert(this.value);
// }
	
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);

//2

// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// func.call(elem, 'Pupa', 'pIPa'); // тут должно вывести 'привет, Иванов Иван'

//apply 

// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// func.apply(elem, ['Иванов', 'Иван']); // тут должно вывести 'привет, Иванов Иван'

//bind

// let elem = document.getElementById('elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// func = func.bind(elem);

// func('Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); // тут должно вывести 'привет, Петров Петр'