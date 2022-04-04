////////////////// исключения с try catch
// try {
//     let str = '';
//     for (let i = 1; i <= 6 * 10 ** 6; i++) {
//         str += i
//     }
    
//     localStorage.setItem('key', str);
//     console.log('Успех');
    
// } catch (error) {
//     console.log('Ошибка локальное хранилища переполнено');
// }



///////////////////// типы ошибок

// try {
// 	saveData('[1,2,3,4,5]');
// } catch (error) {
// 	if (error.name == 'QuotaExceededError') {
// 		alert('закончилось место в хранилище');
// 	}
	
// 	if (error.name == 'SyntaxError') {
// 		alert('некорректный JSON');
// 	}
// }




//////////// new Error и throw

// let res = 2

// function div(a) {
// 	if (a > 0) {
// 		return Math.sqrt(a)
// 	} else {
// 		throw new Error('ошибка выведения отрицательного корня');
// 	}
// }

// try {
// 	alert( div(res) );
// } catch (error) {
// 	alert('отрицательное число в корне');
// }

////////////// typeError

// try {
// 	throw new TypeError('текст исключения');
// } catch (error) {
// 	console.log(error.name); // 'SyntaxError'
// 	console.log(error.message); // 'текст исключения'
// }

////////////// Несколько ошибок

// function test(num) {
//     if (num > 0) {
//         throw new SyntaxError('ошибка SyntaxError');
//     }
//     else {
//         throw new RangeError('ошибка RangeError');
//     }
// }

// try {
//     test(-1)
// } catch (error) {
//     if (error.name == 'SyntaxError') {
//         console.log(error.name + ' - ' + error.message)
//     }
//     if (error.name == 'RangeError') {
//         console.log(error.name + ' - ' + error.message)
//     }
//     }




//////////////////// Свои ошибки

// function test(num) {
//     if (num > 0) {
//         throw {name: 'DivisionByZeroError', message: 'текст DivisionByZeroError'}
//     }
//     else {
//         throw new RangeError('ошибка RangeError');
//     }
// }

// try {
//     test(1)
// } catch (error) {
//     if (error.name == 'DivisionByZeroError') {
//         console.log(error.name + ' - ' + error.message)
//     }
//     if (error.name == 'RangeError') {
//         console.log(error.name + ' - ' + error.message)
//     }
//     }



/////////// throw error - если непредусмотренная ошибка - проброс дальше

// catch (error) {
// 	if (error.name == 'SyntaxError') {
// 		alert('Некорректный JSON продукта');
// 	} else if (error.name == 'ProductCostError') {
// 		alert('У продукта отсутствует цена или количество');
// 	} else {
// 		throw error; // пробрасываем исключение далее
// 	}
// }