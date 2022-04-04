
/////////////////// Получение делителей числа
// let arr = 24

// function getDivisors (a) {
// 	let result = [];
	
// 	for (let i = 1; i <= a; i++){
// 		if(a % i == 0){
// 			a/2
// 			result.push(i)
// 		}
		
// 	}
// 	return result
// }

// console.log(getDivisors(arr))


//////////////////////////////// Сумма цифр числа

// let num = '23'

// function getDigitsSum (a) {
// 	let sum = 0;
// 	let result = a.split('');

// 	for (let i = 0; i < result.length; i++){

// 		sum += Number(result[i])
// 	}
	
// 	return sum

// }

// console.log(getDigitsSum(num))



////////////// Перевород строки без for

// let str = 'abcde'

// function reverseStr (a) {
// 	let result = str.split('').reverse().join('')
// 	return result
// }

// console.log(reverseStr(str))


/////////функция которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.

// (строка)

// let arr1 = ['a','b','d','c']

// let num1 = 'd'

// function delElem (num, arr) {
// let result = []
// 	for(let i = 0; i <= arr.length; i++) {

// 		if(num != arr[i]){
// 			result.push(arr[i])

// 		} 
		
// 	}
// 	result.pop()
// 	return result
// }

// console.log(delElem(num1, arr1))


////////////// с числом

// let arr1 = [1,2,3,4]

// let num1 = 2

// function delElem (num, arr) {

// 	for(let i = 1; i <= arr.length; i++) {
// 		if(num == arr[i]){
// 			arr.splice(arr[i-1], 1)
// 		}
		
// 	}
// 	return arr
// }

// console.log(delElem(num1, arr1))


///////////////// функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции:


// let num1 = 20

// function numOf (num) {
// 	let arr = []
// 	for(let i = 1; i <= 20; i++) {
// 		arr.push(i)	
// 	}
// 	return arr
// }

// console.log(numOf(num1))


//////////////// -||- но интервал чисел

// let num1 = 20
// let num2 = 30
// function numOf (num, numm) {
// 	let arr = []
// 	for(let i = num; i <= numm; i++) {
// 		arr.push(i)	
// 	}
// 	return arr
// }

// console.log(numOf(num1,num2))

////////////////////// проверка на повторные символы которые стоят рядом


// let arr1 = [1,3,3]

// function doublearr (arr) {

// 	for(let i = 0; i < arr.length; i++) {
// 		if((arr[i] == arr[i-1]) || (arr[i] == arr[i+1])) {
// 				return true;
// 		}
// 	}
// 	return false
// }


/////////////////////////// проверка на простое число


// let arr1 = [2,4,6,7,8,9]

// function arrOfNumbers (arr) {
// 	let result = []
// 	for(let i = 0; i < arr.length; i++){
// 		if(isPrime(arr[i]) == true){
// 			result.push(arr[i])
// 		}
// 	}
// 	return result
// }


// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }

// console.log(arrOfNumbers(arr1))



////////////////////// С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.

// let arr1 = []

// function res (arr) {
// 	for(let i = 1; i <= 2030; i++) {
// 		if(getDigitsSum(i) == 13){
// 			arr.push(i)
// 		}
// 	}
// 	return arr
// }


// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
	
// 	return sum;
// }

// console.log(res(arr1))


///////////////////// переворт чисел в массиве

// let nums1 = [123, 456, 789];

// const reverse = (nums) => {
// 	let result = [];

// 	for (let num of nums) {
// 		result.push(String(num).split('').reverse().join(''));
// 	}

// 	return result
// }

// console.log(reverse(nums1))


/////////////////////// проверка на совпадение суммы цифр в двух числах


// let numft = 235;
// let numsec = 531;

// function DigitsSum(num1,num2 ) {
// 	let digits1 = String(num1).split('');
// 	let digitsSum1 = 0;
	
// 	for (let digit1 of digits1) {
// 		digitsSum1 += Number(digit1);
// 	}

// 	let digits2 = String(num2).split('');
// 	let digitsSum2 = 0;

// 	for (let digit2 of digits2) {
// 		digitsSum2 += Number(digit2);
// 	}
// 		return digitsSum1 == digitsSum2;
// 	}
	
// 	if (DigitsSum(numft,numsec )) {
// 		console.log('суммы цифр совпадают');
// 		} else {
// 		console.log('суммы цифр не совпадают');
// 		}


////////////////////////////////// нетривиальные делители чисел

// let nums = [12, 24, 35, 14];

// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }

// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
	
// 	return result;
// }

///////////////////////////////////// сумма цифр цисла

// let num1 = 12345

// function getSum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
	
// 	return sum;
// }

// function getDigits(num) {
// 	return String(num).split('');
// }


// console.log(getSum(getDigits(num1)))

/////////////////////////////Дано число. Нужно найти его делители (без 1 и самого числа), а затем найти среднее арифметическое (сумма делить на количество) делителей числа и вывести результат на экран


// console.log(getAvg(getDivisors(24)) );

// // Нахождение среднего арифметического:
// function getAvg(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum / arr.length;
// }

// // Нахождение массива делителей числа:
// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
// 	return result
// }



///////////////////////////////// получение чисел сумма которых > 1 и < 9

// let arr = [12, 19, 28, 13, 14, 345];
// let result = [];

// function inRange(num) {
// 	let sum = getSum(getDigits(num));
// 	return sum >= 1 && sum <= 9;
// }

// function getSum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
	
// 	return sum;
// }

// function getDigits(num) {
// 	return String(num).split('');
// }

// for (let elem of arr) {
// 	if (inRange(elem)) {
// 		result.push(elem);
// 	}
// }

// console.log(getDigits(arr));



/////////////////////////////////// дружественные числа


// let numm1 = 220
// let numm2 = 284

// function isFreindly(num1, num2) {
// 	let sum1 = getSum(getOwnDivisors(num1));
// 	let sum2 = getSum(getOwnDivisors(num2));
	
// 	if (sum1 == num2 && sum2 == num1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function getOwnDivisors(num) {
// 	let res = []
// 	for (let i = 1; i < num; i++) {
// 		if(num % i == 0) {
// 			res.push(i)
// 		}
// 	}
// 	return res
// }

// function getSum(arr) {
// 	let sum = 0
// 	for(let i = 0; i < arr.length; i++) {
// 		sum += Number(arr[i])
// 	}
// 	return sum
// }

// console.log(isFreindly(numm1,numm2))


////////////////////////// пересечение массивов

// function getInt(arr1, arr2) {
// 	let result = [];
	
// 	for (let elem of arr1) {
// 		if (inArray(elem, arr2)) {
// 			result.push(elem);
// 		}
// 	}
	
// 	return result;
// }

// function inArray(elem, arr){
// 	return arr.indexOf(elem) !== -1;
// }



// console.log( getInt([1, 2, 3], [2, 3, 4, 5]) );

/////////////////// совершенные числа


// function getOwnDivisors(num) {
// 	let result = [ ];
// 	for(let i = 1; i < num; i++) {
// 			if(num%i == 0) result.push(i);
// 		}
// 	return result;
// }
	
// function getSum(arr) {
// 	let sum = 0;
// 		for(let elem of arr){
// 		sum += elem;
// 	}
// 	return sum;
// }

// function getPerfect(num){
// 	if( getSum(getOwnDivisors(num)) == num) return true;
// 		return false;
// }
	
// let result = [ ];
	
// for(let i = 1;i <=1000; i++){
// 	if(getPerfect(i)) result.push(i);
// }

// console.log(result);


/////////////// разность  массивов

// function getDiff(arr1, arr2){
// 	let diff1 = getFirstDiff(arr1, arr2);
// 	let diff2 = getFirstDiff(arr2, arr1);
	
// 	return [].concat( diff1, diff2 );
// }

// function getFirstDiff(arr1, arr2){
// 	let result = [];
	
// 	for (let elem of arr1) {
// 		if (!inArray(elem, arr2)) {
// 			result.push(elem);
// 		}
// 	}
	
// 	return result;
// }

// function inArray(elem, arr){
// 	return arr.indexOf(elem) !== -1;
// }

// console.log( getDiff([1, 2, 3], [2, 3, 4, 5]) );



////////////////////////////// пересечение массивов
// function getInt(...arrs){
// 	let result = [];
// 	let arr0 = arrs.shift();
	
// 	for (let elem of arr0) {
// 		if (inArrays(elem, arrs)) {
// 			result.push(elem);
// 		}
// 	}
	
// 	return result;
// }

// // возвращает true  если не находит в функции inArray(elem, arr), в ином случае возвращает false
// function inArrays(elem, arrs){
// 	for (let arr of arrs) {
// 		if (!inArray(elem, arr)) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }

// // возвращает положительное число т.е искомый элемент массива
// function inArray(elem, arr) {
// 	return arr.indexOf(elem) !== -1;
// }


// console.log(inArray(2, [2,3,4])); // выведет [2, 3]


/////////////////// получение високосного года


// const lastDay = (year) => {
// 	let result = new Date(year, 2, 0)
// 	if(result.getDate() == 29){
// 		return 'високосный'
// 	} else return result.getDate();
// }

// console.log(lastDay(2021))

////////////////// проверка корректировки даты

// let arr = [2025, 0, 32]

// let [year, month, day] = arr

// let date = new Date(year, month, day);

// const checkDate = (data) => {
// 	if (data.getFullYear() == year && data.getMonth() == month && data.getDate() == day) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(checkDate(date))

/////////////////////// выводит 1 января выходные с 2000 по 2022


// function a () {
// 	let now  = new Date();
// 	let month = now.getMonth();
// 	for (let year = 2000; year <= 2022; year++) {
// 		let date = new Date(year, month, 1);
		
// 		if ((date.getDay() == 0) || (date.getDay() == 6) ) {
// 			if(date.getDay() == 0){
// 				console.log(year + '-' + month + '-' + 'воскресенье');
// 			}
// 			else if (date.getDay() == 6) {
// 				console.log(year + '-' + month + '-' + 'суббота');
// 			}
// 		}
// 	}	
	
// }

// a()


//////////// строковые даты и работа с промежутками

// let date = '08-20';

// if (date >= '01-01' && date <= '03-08') {
// 	console.log('1 знак');
// }

// if (date >= '03-09' && date <= '06-17') {
// 	console.log('2 знак');
// }

// if (date >= '06-18' && date <= '12-31') {
// 	console.log('3 знак');
// }

//////////// проверка на преодоление половины месяца в текущую дату



// let date = new Date()

// let den = new Date(2022, 1, 15, 12)

// console.log(date > den)






/////////////////////// рандомные символы (через charAt)

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
