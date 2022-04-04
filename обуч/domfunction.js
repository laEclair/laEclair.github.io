//// функция принимающая три параметра - селектор элемента, значени и текст


// function setTttr(elem, value, text){
//     let input = document.querySelector(elem);
//     input.setAttribute(value, text);
// }

// setTttr('input', 'value', 'громко')


//// работа с группой элементов

// function appendText(selector, text) {
// 	let elems = document.querySelectorAll(selector);
	
// 	for (let elem of elems) {
// 		elem.innerHTML += text;
// 	}
// }

// appendText('.elem', 'text');


/// передача  коллбэка 

// function func2 (par) {
//     par.innerHTML += '!'
// }

// function forEach(selector, func) {
// 	let elems = document.querySelectorAll(selector);

// 	for (let elem of elems) {
// 		func(elem);
// 	}
// }

// forEach('p', func2)


/// порядковый номер абзацов в коллбеке

// function func2 (par, i) {
//     par.innerHTML += i+1
// }

// function forEach(selector, func) {
// 	let elems = document.querySelectorAll(selector);
	
// 	for (let i = 0; i < elems.length; i++) {
// 		func(elems[i], i);
// 	}
// }
// forEach('p', func2)



/// передача dom элемента

// function setValue(inputtest, text){
//     inputtest.value = text
// }
// let input = document.querySelector('#input');
// setValue(input, 'bla')


////////////// еще передача

// function appendText(elem, text){
// 	elem.innerHTML += text;
// }

// let elem1 = document.getElementById('elem1');
// appendText(elem1, 'text1');

// let elem2 = document.getElementById('elem2');
// appendText(elem2, 'text2');


////// передача в цикле

// function appendText(elem, text){
// 	elem.innerHTML += text;
// }

// let allp  = document.querySelectorAll('p');

// for(let p of allp){
//     appendText(p, '!');
// }



//// массив dom элементов

// function appendText(elems, text) {
// 	for (let elem of elems) {
// 		elem.innerHTML += text;
// 	}
// }

// let elems = document.querySelectorAll('.elem');

// appendText(elems, 'text')



////создание li 

// function appendElem(ul, text) {
//     let li = document.createElement('li');
// 	li.innerHTML += text;
//     ul.appendChild(li);
// }

// let ul = document.querySelector('ul');

// appendElem(ul, 'text')


/// перебор массива

// let arr = ['1', '2']

// function appendElem(ul) {
//     for(let elem of arr){
//         let li = document.createElement('li');
//         li.innerHTML += elem;
//         ul.appendChild(li);
//     }
 
// }

// let ul = document.querySelector('ul');

// appendElem(ul)



///создание таблицы


// function createTable(rows, cols, parent) {
// 	let table = document.createElement('table');
	

//     for(let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);

//         for (let i = 0; i < cols; i++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//         }
//     }
	
// 	parent.appendChild(table);
// }


// let div1 = document.querySelector('#elem1');
// createTable(3, 4, div1);

// let div2 = document.querySelector('#elem2');
// createTable(5, 6, div2);



/// возврат таблицы в return

// let div = document.querySelector('#elem');
// let table = createTable(3, 4, div);
// table.style.color = 'red'
// div.appendChild(table);

// function createTable(rows, cols, parent) {
//     let table = document.createElement('table');
//     for(let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);

//         for (let i = 0; i < cols; i++) {
//             let td = document.createElement('td');
//             td.innerHTML = '1'
//             tr.appendChild(td);
//         }
//     }
//     parent.appendChild(table);

//     return table
// }




/////////// создание таблицы из двумерного массива

// let div = document.querySelector('#elem');

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let table = createTable(arr);
// div.appendChild(table);

// function createTable(arr) {
//     let table = document.createElement('table');

//     for(let i = 0; i < arr.length; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);

//         for (let j = 0; j < arr[i].length; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = arr[i][j]
//             tr.appendChild(td);
//         }
//     }
//     return table
// }


/////////////////// конвертация одномерного массива в двумерный

// function convertArr(arr, cols) {
//     let result = [];

//     for (let i = 0; i < arr.length; i += cols) {
//         result.push(arr.slice(i, i + cols));
//     }

//     return result;
// }

/////////////// при нехватке элементов в массиве - добавить заглушки

// let div = document.querySelector('#elem');

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let cols = 4;

// let twoDimArr = convertArr(arr, cols);
// let normalTwoDimArr = normalizeArr(twoDimArr, cols, '-');

// let table = createTableByArr(normalTwoDimArr);
// div.appendChild(table);
// function convertArr(arr, cols) {
//     let result = [];

//     for (let i = 0; i < arr.length; i += cols) {
        
//         result.push(arr.slice(i, i + cols));
      
//     }

//     return result;
// }

// function createTableByArr(arr) {
//     let table = document.createElement('table');

//     for(let i = 0; i < arr.length; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);

//         for (let j = 0; j < arr[i].length; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = arr[i][j]
//             tr.appendChild(td);
//         }
//     }
//     return table
// }

// function normalizeArr(arrt, cols, param){
//     let res = arrt;
//     for(let i = 0; i < res.length; i++){
//         if(res[i].length < cols) {
//             for(let j = cols - (res[i].length); j > 0; j--){
//                 res[i].push(param)
//             }              
//         }
//     }
//     return res;
// }


