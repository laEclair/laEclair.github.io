///////////// Первая задача  регулярки с точкой

// let str = 'ahb acb aeb aeeb adcb axeb';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/a.b/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
// }

// console.log(arr)


////////////////// вторая задача


// let str = 'aba aca aea abba adca abea';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/a..a/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
// }

// console.log(arr)

/////////////////// третья задача



// let str = 'aba aca aea abba adca abea';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/ab.a/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
// }

// console.log(arr)


///////////////////////// регулярки + * ?

// let str = 'aa aba abba abbba abca abea';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/ab+a/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
// }

// console.log(arr)


/////////// вторая задача 

// let str = 'aa aba abba abbba abca abea';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/ab*a/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
// }

// console.log(arr)


/////////// Третья 

// let str = 'aa aba abba abbba abca abea';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/ab?a/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
// }

// console.log(arr)


//////////////// регулярки 


// let str = '*+ *q+ *qs+ *qq+ *qqq+ *qqq qqq+';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/\*q+\+/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
// }

// console.log(arr)


//////////////////// Ограничение жадности регулярки ? после +, {}, *

// let str = 'aba accca azzza wwwwa';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/a.+?a/, '!') == '!'){
// 		arr += '!' + sum[i].slice(1,-1) + '! ';
// 	}
	
// }

// console.log(arr)



///////////////////// [] ИЛИ В  РЕГУЛЯРКАХ


// let str = 'aAXa aeffa aGha aza ax23a a3sSa';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/a[a-z0-9]*a/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
	
// }

// console.log(arr)




//////////////////////////// инверсия значений в регулярках ^



// let str = 'xAaz xZZz x@@6z xz8z';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/x[^A-Za-z1-5]+z/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
	
// }

// console.log(arr)


/////////////////////// Кириллица в регулярках 

// let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/[а-яёА-ЯЁ]+/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
	
// }

// console.log(arr)



/////////////////// Группы символов внутри квадратных скобок JavaScript




// let str = 'xax xvvvvvvvx x1x x5x xhx x.x';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/x[\D^a-g]{3,7}x/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
	
// }

// console.log(arr)


/////////////////////////// Скобки внутри


// let str = '[abc] {abc} abc (abc) [abc]';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/[\[\{\(].+[\]\}\)]/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
	
// }

// console.log(arr)


///////////////////////////////// шляпка в скобках ^

// let str = '^xx axx ^zz bkk @ss';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/[\^@].{2}/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
	
// }

// console.log(arr)


////////////// дефис в скобках / экранирование 



// let str = 'xaz x$z x-z xcz x+z x%z x*z';

// let sum = str.split(' ');
// let arr = [];

// for(let i = 0; i < sum.length; i++) {
// 	if(sum[i].replace(/x[$+-]z/, '!') == '!'){
// 		arr += sum[i] + ' ';
// 	}
	
// }

// console.log(arr)

////////////// Начало и конец строки в регулярках JavaScript

////////////// начало '^' или конец строки '$'





///////////////////////////////////////////// Команда 'или' в регулярных выражениях JavaScript

// Данная команда позволяет разделить регулярку на несколько частей. 
//При этом искомое может попасть либо под одну часть регулярки, либо под другую. 


//// let str = 'aeeea aeea aea axa axxa axxxa';

// let res = str.replace(/a(e{2}|x+)a/g, '!');


// console.log(res)



//////////////// метод test возвращает true или false 

// let res = /^https?:\/\/.+(txt$)|(php$)|(html$)/.test('http://sws.php'); // вернет true

// console.log(res)


////////// календарь


// let res = /19|20\d\d-(0[0-9]|1[0-2])-(0[0-9]|1[0-9]|2[0-9]|3[0-1])/.test('2001-10-30'); // вернет true

// console.log(res)


////////////// match метод для исп регулярок и доб в массив 

// let str = 'a1b c34d x567z';
// let arr = str.match(/\d+/g)
// let sum = 0;

// for(let i = 0; i < arr.length; i++) {
// 	sum = sum + parseInt(arr[i])
// } 
// console.log(sum)


/////////////////////////// Карманы в матч () - карман



// let str = '31.12.3025';
// let arr = str.match(/(\d{2})\.(\d{2})\.(\d{4})/);

// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])


///////// матч в replace


// let str = '31.12.2025';
// let arr = str.replace(/(\d{2})\.(\d{2})\.(\d{4})/g, '$3.$2.$1');

// console.log(arr)


////////////Карманы в Replace 


// let str = 'sss site.ru zzz site.com kkk';
// let arr = str.replace(/(([a-z]+)\.([a-z]{2,}))/g, "http://$&");

// console.log(arr)


////////////Карманы в самой регулярке


// let str = 'aaa aaa bbb bbb ccc ddd';

// let arr = str.replace(/(\w+\s)\1/g, "! ");

// console.log(arr)


////////////////// Несохраняющие скобки в регулярках


// let str = 'abab123';
// let res = str.match(/(?:ab)+([1-9]+)/);

// console.log(res[1]); // выведет '123'



////////////////// Позитивный и негативный просмотр в JavaScript

////////////первая задача

// let str = 'func1() func2() func3()';

// let arr = str.replace(/([a-z\d]+)(?=())/g, "!");

// console.log(arr)


/////////////////// вторая задача

// let str = '<a href="" class="eee" id="zzz">';

// let arr = str.match(/\w+(?==)/g, "!");

// console.log(arr)

///////Коллбэк в методе replace в регулярках JavaScript
// Метод replace вторым параметром может принимать не только строку, но и функцию-коллбэк, которая применится для 
// каждого найденного совпадения. 
// Каждая подстрока, которую нашла регулярка, заменится на то, что вернет эта функция именно для этой подстроки.

// В эту функцию можно передавать параметры: в первый параметр положится найденная строка, 
// во второй параметр - первый карман, в третий параметр - второй карман и так далее - можно делать сколько параметров, 
// сколько карманов в регулярном выражении.
// В предпоследний параметр положится позиция найденного совпадения, а в последний - вся строка, по которой делается поиск.



///////////
// let str = '123 456 789';

// let result = str.replace(/\d+(?=\s)/g, 

// function(match) {
// 	return match.split('').reverse().join('')
// });

// console.log(result);


//////////////////

// let str = '31.12.2025 30.11.2024 29.10.2023'; 
// let result = str.replace(/(\d+)\.(\d+)\.(\d+)/g,
// function(match0, match1, match2, match3){ 
//     return match3+"-"+match2+"-"+match1; 
// }); 
// console.log(result);


//////////   search  ищет позицию заданной регулярки , если не находит то -1

// let str = '1 23 456 789';
// let arr = str.search(/\d{3}/);

// console.log(arr);

///////////// split

// let str = '2025-12-31 12:59:59';
// let res = str.split(/[- :]/);

// console.log(res)


/////////////////////////////// головоломки 

// Задача 1. Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения.

// console.log(/((19|20)\d\d)|2100/.test('2100'));

// Задача 2. Удалите одной регуляркой все повторяющиеся слова из строки.

// let str = 'Текст текст с повторяющимися словами словами';
// console.log(str.replace(/((?:(?:\s|^)[a-zа-яё]+(?=\s))+?)\s?\1(?=\s|$)/gi,"$1"));

// Задача 3. Удалите одной регуляркой все повторяющиеся слова из строки.

// Ответ:
// "use strict"
// let str = 'слловва сс twoo ббукввамии';
// console.log(str.replace(/([а-яёa-z])\1/gi, '$1'));