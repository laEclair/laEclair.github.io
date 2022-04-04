/////////// модуль в js

// ;(function() {
// 	let elem = document.querySelector('#div1'); // первый див
	
// 	function func(num) {
// 		return num * num; // возведем в квадрат
// 	}
	
// 	elem.addEventListener('click', function() {
// 		this.textContent = func(elem.textContent);
// 	});
// })();

// ;(function() {
// 	let elem = document.querySelector('#div2'); // второй див
	
// 	function func(num) {
// 		return num * num * num; // возведем в куб
// 	}
	
// 	elem.addEventListener('click', function() {
// 		this.textContent = func(elem.textContent);
// 	});
// })();


/////// модуль  с инпутами

// ;(function(selector1, selector2, selector3, selector4) {
	
// 	let btn = document.querySelector(selector1);
//     let input1 = document.querySelector(selector2);
//     let input2 = document.querySelector(selector3);
//     let input3 = document.querySelector(selector4);
	
	
// 	btn.addEventListener('click', function () {
//         console.log(Number(input1.value) + Number(input2.value) + Number(input3.value))
// 		return Number(input1.value) + Number(input2.value) + Number(input3.value) ;
//     });

// })('#btn', '#input1', '#input2', '#input3');



/// передача родительского элемента

// ;(function(root) {
// 	let parent = document.querySelector(root);
	
// 	let div1 = parent.querySelector('#div1');
// 	let div2 = parent.querySelector('#div2');
// 	let div3 = parent.querySelector('#div3');
	
// 	let res  = parent.querySelector('#res');
// 	let btn  = parent.querySelector('#btn');
	
// 	btn.addEventListener('click', function() {
// 		let num1 = Number(div1.textContent);
// 		let num2 = Number(div2.textContent);
// 		let num3 = Number(div3.textContent);
		
// 		res.textContent = num1 + num2 + num3;
// 	});
// })('#parent');



///// передача настроек модуля из объекта

// let config = {
// 	root:  '#parent',
// 	type:  'p',
// 	amount: 5
// }


// ;(function({root, type, amount}) {
// 	let parent = document.querySelector(root);
	
// 	for (let i = 1; i <= amount; i++) {
// 		let elem = document.createElement(type);
// 		parent.append(elem);
// 	}
// })(config);



///// параметры по умолчанию в модуле

// ;(function({root, type = 'p', amount = 5}) {
// 	let parent = document.querySelector(root);
	
// 	for (let i = 1; i <= amount; i++) {
// 		let elem = document.createElement(type);
// 		parent.append(elem);
// 	}
// })(config);



//// экспорт переменных и функций из модуля

// let arr = [];

// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
	
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
//     arr.push(str1, func1, func2)
// })();
// console.log(arr)



///// вывод объекта во вне

// let arr = [];

// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
	
//     let res = {}

// 	res.func1 = function () {
// 		alert('функция модуля');
// 	}
// 	res.func2 = function () {
// 		alert('функция модуля');
// 	}
// 	res.func3 = function () {
// 		alert('функция модуля');
// 	}
//     res.func4 = function () {
// 		alert('функция модуля');
// 	}
//     res.func5 = function () {
// 		alert('функция модуля');
// 	}

//     arr.push(res) 
// })();

// console.log(arr)




/////////// библиотека js

{/* <script src="bibl.js"></script>
		<script>
			alert(Math.avg2([1,2,3]));
		</script>


;(function () {
    function avg1(arr) {
        return sum(arr, 1) / arr.length;
    }
    
    function avg2(arr) {
        return sum(arr, 2) / arr.length;
    }
    
    function avg3(arr) {
        return sum(arr, 3) / arr.length;
    }
    
    // вспомогательная функция
    function sum(arr, pow) {
        let res = 0;
        
        for (let elem of arr) {
            res += elem ** pow;
        }
        
        return res;
    }

    window.Math = {avg1, avg2, avg3};
})(); */}