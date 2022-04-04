//setInterval

// let s = 3000
// setInterval(function () {
// 	for (let i=0; i < 9; i++){
// 		console.log(i);	
// 	}

// }, s)


//счетчик через функцию

// let i = 1;
// setInterval(() => console.log(i--), 1000);

//остановка таймера clearInterval

// let i = 10;

// let timerId = setInterval(function() {
// 	console.log(i--);
	
// 	if (i < 1) {
// 		clearInterval(timerId);
// 	}
// }, 1000);


//кнопка запуска таймера и остановка

// let start = document.querySelector('#start');

// start.addEventListener('click', function func() {
// 	let i = 10;
	
// 	let timerId = setInterval(function() {
// 		console.log(--i);
// 		if (i < 1) {
// 					clearInterval(timerId);
// 				}
// 	}, 1000);

// // this.removeEventListener('click', func); - Отвязка кнопки, чтобы новые таймеры не включались
// });



// старт и стоп кнопки

//let start = document.querySelector('#start');

// let stop = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function () {
// 	let i = 10;
// 	timerId = setInterval(function () {
// 		console.log(--i)
// 		if (i < 2){
// 			clearInterval(timerId);
// 		}
// 	}, 1000)
// })

// stop.addEventListener('click', function () {
// 	clearInterval(timerId);
// })


// старт и стоп но с отвязкой событий

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// function func () {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);

// 	this.removeEventListener('click', func);
// }
// start.addEventListener('click', func);


// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// 	this.addEventListener('click', func)
// });


// с value таймер


// let elem = document.querySelector('#elem');
// let timerId;
// timerId = setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
// 	if (elem.value == 0){
// 		clearInterval(timerId);
// 	}
// }, 1000);

// потеря контекста  


// через стрелочные функции
// let elem = document.querySelector('#elem');


// elem.addEventListener('click', function() {
	
// 	setInterval(() => {
// 		this.value = Number(elem.value) + 1;
// 	}, 1000);
// });

//переменная равная this
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let this1 = this;
// 	setInterval(function() {
// 		this1.value = Number(elem.value) + 1;
// 	}, 1000);
// });


// передача контекста параметром

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setInterval(func, 1000, this);

// 	function func (self) {
// 		self.value--;
// 	}
// });



/// Задачи на таймер

//1

// let elem = document.querySelector('#elem');
// let ab = document.querySelector('#ab')

// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		ab.innerHTML = Number(ab.innerHTML) + 1;
// 	}, 1000);
// 	});

// let elem = document.querySelector('#elem');
// let ab = document.querySelector('#ab')
// let timeId

// elem.addEventListener('click', function() {
// 	timeId = setInterval(function() {
// 		ab.innerHTML = Number(ab.innerHTML) - 1;
// 		if (ab.innerHTML == 0) {
// 			clearInterval(timeId)
// 		}
// 	}, 1000);

// 	});

//3

// let elem = document.querySelector('#elem');
// let ab = document.querySelector('#ab')
// let timeId

// elem.addEventListener('click', function() {
// 	timeId = setInterval(function() {
// 		ab.value = Number(ab.value)**2;
// 		if (ab.value == 0) {
// 			clearInterval(timeId)
// 		}
// 	}, 1000);

// 	});

//4

// let elem = document.querySelector('#elem');
// let ab = document.querySelector('#ab')
// let timeId

// ab.addEventListener('blur', function() {
// 	timeId = setInterval(function() {
// 		ab.value = Number(ab.value) - 1;
// 		if (ab.value == 0) {
// 			clearInterval(timeId)
// 		}
// 	}, 1000);

// 	});

//5
// let elem = document.querySelector('#elem');
// let ab = document.querySelector('#ab')
// let inpt = document.querySelector('#inpt')
// let timeId

// elem.addEventListener('click', function() {
// 	ab.innerHTML = Number(inpt.value)
// 	timeId = setInterval(function() {
// 		ab.innerHTML = Number(ab.innerHTML) - 1;
// 		if (ab.innerHTML == 0) {
// 			clearInterval(timeId)
// 		}
// 	}, 1000);
// 	});

//6

// let btn1 = document.querySelector('#elem1');
// let btn2 = document.querySelector('#elem2');
// let ab = document.querySelector('#ab')

// let timeId

// btn1.addEventListener('click', function() {
// 	timeId = setInterval(function() {
// 		ab.innerHTML = Number(ab.innerHTML) + 1;	
// 	}, 1000);
// });

// btn2.addEventListener('click', function () {
// 	clearInterval(timeId)
// })


//7

// let ab = document.querySelector('#ab');

// let timeId;
// let timeId2;

// ab.addEventListener('click', function() {
// 	timeId = setInterval(function() {
// 		ab.style.backgroundColor = 'red';	
		
// 	}, 1000);
// });

// ab.addEventListener('click', function() {
// 	timeId = setInterval(function() {
// 		ab.style.backgroundColor = 'green';	
		
// 	}, 2000);
// });


//8
//let btn = document.querySelector('#elem1');
// let ab = document.querySelector('#ab');
// let timeId;


// btn.addEventListener('click', function() {
// 	timeId = setInterval(function() {
// 		let date = new Date ;
// 		ab.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();	
		
// 	}, 1000);
// });


//setTimeout

// let elem = document.querySelector('#elem');
// let ab = document.querySelector('#ab');

// elem.addEventListener('click', function() {
// 	setTimeout(function() {
// 		ab.innerHTML = 'пись'
// 	}, 10000);
// });

//через рекурсию

// let elem = document.querySelector('#elem');
// let ab = document.querySelector('#ab');

// let i = 0;

// function timer() {
// 	let time = 1000;
// 	let timerId = setTimeout(function func() {
// 		console.log(++i);

// 		if (i < 10) { // запускаем, только если счетчик меньше 10
// 			time = 1000 * i;
			
// 		}
// 		timerId = setTimeout (func, time);

// 	}, time);
// }
// timer();