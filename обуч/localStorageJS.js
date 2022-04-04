///// localStorage - setItem и getItem

// localStorage.setItem('key1', '1');
// localStorage.setItem('key2', '2');
// localStorage.setItem('key3', '3');


// let str1 = localStorage.getItem('key1');
// let str2 = localStorage.getItem('key2');
// let str3 = localStorage.getItem('key3');

// let res  = Number(str1) + Number(str2) + Number(str3);

// console.log(res)



///////// получение дня рождения

// let birthDate = localStorage.getItem('birthDate');

// if (!birthDate) {
//     let birthDate = prompt("Введите дату вашего рождения:");
//     localStorage.setItem('birthDate', birthDate);
// }

// let now = (new Date()).getDate() + "." + ((new Date()).getMonth()+1);

// if (birthDate == now){
//     alert("С днюхой, бро!")
// }




//////// инпут и сохранение value

// let input = document.querySelector('input');
// let inputValue = localStorage.getItem('value');

// if(!inputValue) {
//     input.addEventListener('blur', function(){
//         inputValue = localStorage.setItem('value', this.value);
//     })
// } else {
//     input.value = inputValue;
// }   


//// переписать LocalStorage

// let counter = document.querySelector('#counter');
// let counterValue = localStorage.getItem('counter');

// if(!counterValue) {
//     counter.innerHTML = 0;
//     localStorage.setItem('counter', 0);
// } else {
//         let a = +counterValue + 1;
//         localStorage.setItem('counter', a);
//         counter.innerHTML = counterValue;
//         }


///// removeItem и clear - удаления



/////////// перезапись localStorage


// let btn = document.querySelector('#btn');
// let inputs = document.querySelectorAll('input');


// btn.addEventListener('click', function () {
//     let arr = [];
//     for(let elem of inputs) {
//         arr.push(elem.value)

//     }
//     localStorage.setItem('arr', JSON.stringify(arr));
// })

// let getValueInput = localStorage.getItem('arr');
// let res = JSON.parse(getValueInput);

// let i = 0;
// for(let elem of inputs){
//     elem.value = res[i];
//     i++
// }



////////// модификация хранимых структур

// let users = [
// 	{
// 		surname: 'surname1',
// 		name: 'name1',
// 		age: 31,
// 	},
// 	{
// 		surname: 'surname2',
// 		name: 'name2',
// 		age: 32,
// 	},
// 	{
// 		surname: 'surname3',
// 		name: 'name3',
// 		age: 33,
// 	},
// ];
// let res = localStorage.setItem('users',  JSON.stringify(users));
// let str = localStorage.getItem('users');
// let arr = JSON.parse(str);


// let btn = document.querySelector('#btn');
// let input1 = document.querySelector('#surname');
// let input2 = document.querySelector('#name');
// let input3 = document.querySelector('#age');


// btn.addEventListener('click', function () {
//     let obj = {
//         surname: input1.value,
//         name: input2.value,
//         age: input3.value
//     }
//     arr.push(obj);
//     localStorage.setItem('users',  JSON.stringify(arr));
//     console.log(localStorage.getItem('users'))
// })

