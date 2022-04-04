/////////////// получение последнего дня месяца

// const lastDay = (year, month) => {
// 	let result = new Date(year, month, 0)
// 	return result.getDate()
// }

// console.log(lastDay(2025,5))

////////////////// DOM ПОЛУЧЕНИЕ ДНЯ НЕДЕЛИ

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