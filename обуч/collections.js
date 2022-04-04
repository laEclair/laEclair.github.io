////////// получение массива из псевдомассива

// let elems = document.querySelectorAll('p');

// let arr = Array.from(elems);
// console.log(arr)


//2

// let elems = document.querySelectorAll('p');

// let arr = Array.from(elems);
// let res = arr.slice(1,4)
// console.log(res)


////////////////// разница между children и childNodes


// let div = document.querySelector('div');
// let elems1 = document.querySelectorAll('p');     // NodeList
// let elems2 = document.getElementsByTagName('p'); // HTMLCollection

// let p = document.createElement('p');
// div.append(p);


// for (let node of div.childNodes) {
// 	console.log(node.nodeName); ////// выведет все атрибуты, элементы, текст, комменты
// }
// for (let child of div.children) {
// 	console.log(child.nodeName); ////// выведет только элементы
// }



////// Map

// let map = new Map;

// let obj1 = {key: 'object1'}
// let obj2 = {key: 'object2'}
// let obj3 = {key: 'object3'}

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// map.set(obj1, arr1);
// map.set(obj2, arr2);
// map.set(obj3, arr3);


// console.log(map.get(arr1));
// console.log(map.get(arr2));
// console.log(map.get(arr3));
// console.log(map);


///// cвойства map

// console.log(map.size); - размер коллекции

// console.log(map.has(arr1)); - проверка наличия ключа

// map.delete(arr1); - удаление элемента по ключу из коллекции

// map.clear(); - очистить всю коллекцию



/////// перебор map


// let map = new Map;

// let arr1 = [1, 2];
// let arr2 = [3, 4];

// map.set(arr1, 'data1');
// map.set(arr2, 'data2');

// for (let elem of map) {
// 	console.log(elem); // сначала [[1, 2], 'data1'], потом [[3, 4], 'data2']
// }

// for (let [key, elem] of map) {  //// деструктуризация
// 	console.log(key);
// 	console.log(elem);
// }


/// еще методы map

// let values = map.values(); - получение значений

// let keys = map.keys(); - получение ключей

// let entries = map.entries(); - получение пар ключ-значение

//// отделение ключей и значений

// let map = new Map;

// let arr1 = [1, 2];
// let arr2 = [3, 4];

// map.set(arr1, 'data1');
// map.set(arr2, 'data2');

// for (let elem of map.entries()) {
// 	console.log(elem); 
// }



//////////// применение коллекций

// let elems = document.querySelectorAll('input');

// let map = new Map;

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.addEventListener('keydown', function(event) {
// 			if(event.key == 'Enter') {
// 				map.set(this.value); 
// 				console.log(map);
// 			}		
// 		});
// 	});
// }



//// коллекция set

// let arr = [1, 2, 3, 1, 3, 4];

// let set = new Set([1,2,3]);
// set.add(2);
// console.log(set)




///// методы set

// let arr = [1, 2, 3, 1, 3, 4];
// let set = new Set([1,2,3]);
// console.log(set.has(4))



//// перебор set

// let set = new Set;

// set.add(1);
// set.add(2);
// set.add(3);

// let res = 0;

// for (let elem of set) {
// 	res += elem ;
// }
// console.log(res)



//// преобразование коллекции в массив

// let set = new Set([1, 2, 3]);
// // let arr = [...set];

// let arr = Array.from(set);

// console.log(arr)


///  преобразование массива в коллекцию

// let arr = [1, 2, 3];

// let set = new Set(arr);
// console.log(set)


///// удаление дублей из массива с помощью set

// let arr = [1, 2, 3, 1, 3, 4];

// const func = (arr) => {
// 	let res = [...new Set(arr)];
// 	console.log(res); // выведет [1, 2, 3, 4]
// }
// func(arr)


///// Получение дом элементов без дублей


// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// let set = new Set;

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		set.add(this);
// 	});
// }

// button.addEventListener('click', function() {
// 	for (let elem of set) {
// 		elem.textContent = elem.textContent + '!';
// 	}
// });



/// ArrayBuffer

// let buffer = new ArrayBuffer(32); // выделим 8 байтов
// console.log(buffer);


//// Symbol

// let id = Symbol("id")

// let obj ={
// 	first :'pppp',
	
// 	last :'dsfsd'
// }

// obj.id =  function  (){
// 	alert('!')
// }
// console.log(obj)



/////// symbol в объекте  и функция

// let symb = Symbol('ru');
// let symb1 = Symbol(1);
// let symb2 = Symbol(2);

// let obj = {
// 	1: 'Anar',
// 	2: 'Danya',
// 	3: 'Vova',
	
// 	[symb1]: 1,
// 	[symb2]: 2,
	
// 	func: function(){
// 		alert(obj[symb1] + obj[symb2]);
// 	}
// }
// obj['func']();



///// symbol и функции и массивы

// let arr = [1, 2, 3];
// let symb = Symbol('func');

// arr['func'] = function () {
// 	let res = 0;
// 	for(let i of arr) {
// 		res+=i
// 	}
// 	return res;
// }

// console.log(arr['func']())



////// symbol через .for

// let arr = [1, 2, 3];

// let symb = Symbol.for('func');

// arr[symb] = function () {
// 	let res = 0;
// 	for(let i of arr) {
// 		res+=i
// 	}
// 	return res;
// }

// console.log(arr[symb]())



//////////// создание функции slice

// function slice(str, start, end) {
//     return Array.from(str).slice(start, end).join('');
//   }
  
//   let str = '𝒳😂𩷶';
  
//   alert( slice(str, 1, 3) ); // 😂𩷶
  
//   // а вот встроенный метод не поддерживает суррогатные пары
//   alert( str.slice(1, 3) ); // мусор (две части различных суррогатных пар)





////////// Symbol.iterator

// let range = {
// 	from: 1,
// 	to: 5
//   };
  
//   // 1. вызов for..of сначала вызывает эту функцию
//   range[Symbol.iterator] = function() {
// 	// ...она возвращает объект итератора:
	
// 	// 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
// 	return {
// 	  current: this.from,
// 	  last: this.to,
  
// 	  // 3. next() вызывается на каждой итерации цикла for..of
// 	  next() {
// 		// 4. он должен вернуть значение в виде объекта {done:.., value :...}
// 		if (this.current <= this.last) {
// 		  return { done: false, value: this.current++ };
// 		} else {
// 		  return { done: true };
// 		}
// 	  }
// 	};
//   };
  
//   // теперь работает!
//   for (let num of range) {
// 	alert(num); // 1, затем 2, 3, 4, 5
//   }


////////////// тоже самое но компактнее

// let range = {
//     from: 1,
//     to: 5,
  
//     *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()

//       for(let value = this.from; value <= this.to; value++) {
//         yield value;
//       }
//     }
//   };
  
//   alert( [...range] ); // 1,2,3,4,5



///////////////////// генератор


// function* func() {
// 	yield 1;
// 	yield 2;
// 	return 3;
//   }
  
//   let generator = func();
  
//   let one = generator.next();
  
//   alert(JSON.stringify(one)); // {value: 1, done: false}


// json

// let json = `{
// 	"a": ["a", "b", "c",],
// 	"b": "111",
// 	"c": "eee",
// }`;
// console.log(json)



//// json stringify

// let json = [];


// let ul = document.querySelectorAll('li');

// for(let elem of ul){
//     json.push(elem.innerHTML);
// }

// let arr = JSON.stringify(json);
// console.log(arr)


////// json parse и добавление другого пользователя

// let json = `[
//     {
//     "name": "user1",
//     "age": 25,
//     "salary": 1000
//     },
//     {
//     "name": "user2",
//     "age": 26,
//     "salary": 2000
//     },
//     {
//     "name": "user3",
//     "age": 27,
//     "salary": 3000
//     }
//     ]`;

// let arrayUsers = JSON.parse(json);

// let newUser = {
//     name: "user4",
//     age: 28,
//     salary: 3500
// };
    
// arrayUsers.push(newUser);

// json = JSON.stringify(arrayUsers);

// console.log(json);