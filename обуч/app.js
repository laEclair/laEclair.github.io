// import { square, cube } from './math.js';
// import fs from 'fs';


// import { createGzip, createGunzip } from 'zlib';
// import __dirname from './__dirname.js';
// import { constants } from 'fs';


// for(let i = 0; i < 11; i++){
//     fs.writeFile(`${'readme' + i + '.txt'}`, `${Math.random(3) * 1000}`, function(err) {
//         if (err) {
//             console.log('ошибка');
//         }
//     });
// }





//вторая задача


// new Number();
// let sum = 0;

// fs.readFile('readme1.txt', 'utf8', function(err, data1) {
// 	if (!err) {
// 		fs.readFile('readme2.txt', 'utf8', function(err, data2) {
// 			if (!err) {
//                 fs.readFile('readme3.txt', 'utf8', function(err, data3) {
//                     if (!err) {
//                         fs.readFile('readme4.txt', 'utf8', function(err, data4) {
//                             if (!err) {
//                                 fs.readFile('readme5.txt', 'utf8', function(err, data5) {
//                                     if (!err) {
//                                         sum = Number(data1) + Number(data2) + Number(data3) + Number(data4) + Number(data5);
//                                         console.log(sum);
//                                     } else {
//                                         console.log('ошибка чтения файла readme5');
//                                     } 
//                                 });
//                             } else {
//                                 console.log('ошибка чтения файла readme4');
//                             } 
//                         });

//                     } else {
//                         console.log('ошибка чтения файла readme3');
//                     } 
//                 });
// 			} else {
// 				console.log('ошибка чтения файла readme2');
// 			}
// 		});
// 	} else {
// 		console.log('ошибка чтения файла readme1');
// 	}
// });



// Задача 7
// fs.readFile('readme.txt', 'utf8', function(err, data) {
// 	if (!err) {
// 		fs.writeFile('readme.txt', `${data * 2}`, function(err) {
// 			if (err) {
// 				console.log('ошибка записи файла');
// 			}
// 		});
// 	} else {
// 		console.log('ошибка чтения файла');
// 	}
// });

//задача 8

	// new Number();
	// let sum = 0;

	// fs.readFile('readme.txt', 'utf8', function(err, data) {
	// 		if (!err) {
	// 			fs.readFile('readme1.txt', 'utf8', function(err, data1) {
	// 				if (!err) {
	// 	                fs.readFile('readme2.txt', 'utf8', function(err, data2) {
	// 	                            if (!err) { 
	// 	                                 sum = Number(data) + Number(data1) + Number(data2) ;

	// 									 fs.writeFile('readme4.txt', `${sum}`, function(err) {
	// 										if (err) {
	// 											console.log('ошибка записи файла');
	// 										}
	// 									});
	// 	                    } else {
	// 	                        console.log('ошибка чтения файла readme2');
	// 	                    } 
	// 			});
	// 		} else {
	// 			console.log('ошибка чтения файла readme1');
	// 		}
	// 	});
	// } else {
	// 	console.log('ошибка чтения файла readme');
	// }
	// 	});



	//задача 9

	// fs.readFile('readme1.txt', 'utf8', (err, data1) => {
	// 	if (!err) {
	// 		fs.readFile('readme2.txt', 'utf8', (err, data2) => {
	// 			if (!err) {
	// 				fs.writeFile('readme.txt', data1 + data2, (err) => {
	// 					if (err) {
	// 						console.log('ошибка записи файла');
	// 					}
	// 				});
	// 			} else {
	// 				console.log('ошибка чтения файла readme2');
	// 			}
	// 		});
	// 	} else {
	// 		console.log('ошибка чтения файла readme1');
	// 	}
	// });



	// Задача 1 и 2 по промисам
	// new Number();
	
	// fs.promises.readFile('readme.txt', 'utf8').then(data => {

	// 	let result = Number(data[0])
	// 	for (let i = 1; i < data.length; i++) {
	// 		result += Number(data[i]);
	// 	  }
	// 	  console.log(result);  
	// 	}).catch(err => {
	// 		console.log('ошибка');

	// });


	//задача 3

	// fs.promises.readFile('readme.txt', 'utf8').then(data => {
	// 	for (let i = 0; i < data.length; i++){
	// 		if(data[i] != ','){
	// 			 fs.promises.writeFile(`${'readme' + i + '.txt'}`, data[i]);
	// 		} 
	// 		else continue
		
	// 	}
		
	// }).catch(err => {
	// 	console.log('ошибка');
	// });


	// // Задача 9
	// new Number();
	// new String();
	// let names = ['readme0.txt', 'readme2.txt', 'readme4.txt','readme6.txt', 'readme8.txt'];
	// let files = [];
	// let result = 0;
	// for (let name of names) {
		
	// 	files.push(fs.promises.readFile(name, 'utf8'));
	// }	

	// for (let i = 0; i < files.length; i++){
		
	// }
	
	// Promise.all(files).then(data => {

	// 	fs.promises.writeFile('readme.txt', data.join(''));

		
	// }).catch(err => {
	// 	console.log('что-то пошло не так');
	// });

	




	// задача на async await
	// первая задача 1

// 	async function func() {
// 		try {
		
// 			let data1 = await fs.promises.readFile('readme1.txt', 'utf8');
// 			let data2 = await fs.promises.readFile('readme2.txt', 'utf8');
// 			let data3 = Number(data1) + Number(data2);
// 			let data4 = String(data3)
// 			await fs.promises.writeFile('res.txt', data4 );
			
// 		} catch (err) {
// 			console.log('что-то пошло не так');
// 		}
// 	}
	
// func()




// вторая задача 

// async function func() {
// 	try {
// 		let names = ['readme1.txt', 'readme2.txt', 'readme3.txt'];
// 		let data  = [];
// 		let rand = 0;
// 		let sum = 0;

// 		for (let name of names) {
// 			rand = Math.floor((Math.random() * 100));
// 			rand = String(rand);
// 			await fs.promises.writeFile(name, rand);
// 		}
		
// 		for (let name1 of names) {
// 			data.push(await fs.promises.readFile(name1, 'utf8'));
// 		}

// 		for (let name3 of data) {
// 			sum += Number(name3);
// 		}

// 		sum = String(sum)

// 		await fs.promises.writeFile('res.txt', sum);
// 	} catch (err) {
// 		console.log('что-то пошло не так');
// 	}
// }

// func();


// задача на ссылки


// async function func() {
// try {
// 	let path = '../../../dir1/readme.txt';
// 	let data = await fs.readFile(path, 'utf8');
// 	console.log(data)
// }
// 	catch (err){
// 		console.log('ошибка')
// 	}

// }

// func()


// задачи на CommonJs

// console.log(__dirname);

// try{
// 	await fs.access('res.txt', constants.F_OK);
// 	let data = await fs.readFile('res.txt', 'utf8');

// 	console.log(data);
// } catch {
// 	console.error('file does not exists');
// }



// ПРОВЕРКА НА ЧТЕНИЕ

// try {
// 	await fs.access('res.txt', constants.R_OK);
// 	console.log('can read');
// } catch {
// 	console.error('cannot read');
// }

// ПРОВЕРКА НА ЗАПИСЬ

// try {
// 	await fs.access('res.txt', constants.W_OK);
// 	console.log('can write');
// } catch {
// 	console.error('cannot write');
// }

// ПРОВЕРКА НА ЧТЕНИЕ И ЗАПИСЬ

// try {
// 	await fs.access('res.txt', constants.R_OK | constants.W_OK);
// 	console.log('can access');
// } catch {
// 	console.error('cannot access');
// }


// ЗАДАЧИ С STREAM

// let readableStream = fs.createReadStream('readme.txt', 'utf8');
// readableStream.on('data', function(chunk) { 
// 	console.log(chunk);
// });

// let writeableStream = fs.createWriteStream('writeme.txt');
// for(let i = 0; i < 1000001; i++){
// 	writeableStream.write(i + ' \n');
	
// }
// writeableStream.end();

// let readableStream  = fs.createReadStream('readme.txt', 'utf8');

// readableStream.on('data', function(chunk) { 
// 	for (let i = 1; i < 4; i++){
// 		let writeableStream = fs.createWriteStream('writeme' + `${i}` + '.txt');
// 		writeableStream.write(chunk)
// 	}
	
// });


// let readableStream  = fs.createReadStream('readme.txt', 'utf8');
// // let writeableStream = fs.createWriteStream('writeme1.zip');

// for (let i = 1; i < 11; i++){

// 	let writeableStream = fs.createWriteStream('writeme' + `${i}` + '.zip');
// 	readableStream.pipe(createGzip()).pipe(writeableStream);

// 	 let readableStream2  = fs.createReadStream('writeme' + `${i}` + '.zip');
// 	readableStream2.pipe(createGunzip());
// 	}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//http сервер

// import http from 'http';


// new Date();
// http.createServer((request, response) => {
// 	response.writeHead(
//         200, 
//         {'Content-Type' : 'text/plain' },
//         {'Content-Language' : 'ru'});
// 	response.end('{}');
    
// }).listen(3000);
		


// response.setHeader('Content-Type', 'text/html', 'utf-8');
	// response.statusCode = 200;
	// if (i < 0 || i == 0) {
	// 	response.write('timer is 0')
	// 	response.end()
	// };
	// response.write(String((i -= 1)));
	// response.end();
	// console.log(request.url);

	/// РАБОТА С REQUEST

	// console.log(request.url);
	// console.log(request.method);
	// console.log(request.headers);
	
	// console.log(request.headers.host);

	// response.writeHead(200, {'Content-Type': 'text/html'});
	// response.write('text');
	// response.end();




	////////////////////////////// ЗАГЛУШКА ДЛЯ ДВОЙНОГО ЗАПРОСА БРАУЗЕРА

	// if (request.url != '/favicon.ico'){
	// 	console.log(request.url); // теперь выполнится один раз 
		
	// 	response.writeHead(200, {'Content-Type': 'text/html'});
	// 	response.write('text');
	// 	response.end();
	// }





	///////////////////////////////////////


	// http.createServer((request, response) => {
	// 	if (request.url != '/favicon.ico') {
	// 		let text;
	// 		let status = 200;
			
	// 		switch (request.url) {
	// 			case '/page1': 
	// 				text = '1';
	// 				break;
					
	// 			case '/page2': 
	// 				text = '2';
	// 				break;
			
	// 			default:
	// 				text = 'page not found';
	// 					status = 404;
	// 				break;
	// 		}
	// 		response.writeHead(status, {'Content-Type': 'text/html'});
	// 		response.write(text)
	// 		response.end();
	// 	}
	// }).listen(5000);




	/////////////////////////////////////////////////////////////////// url страниц из объекта 

		// if (request.url != '/favicon.ico') {
	// 	let text;
	// 	let status = 200;
		
	// 	switch (request.url) {
	// 		case ('' + a[0]): 
	// 			text = obj['/page1'];
	// 			break;
				
	// 		case ('' + a[1]): 
	// 			text = obj['/page2'];
	// 			break;
		
	// 		case ('' + a[2]): 
	// 			text = obj['/page3'];
	// 			break;
		
	// 		default:
	// 			text = 'page not found';
	// 				status = 404;
	// 			break;
	// 	}
	// 	response.writeHead(status, {'Content-Type': 'text/html'});
	// 	response.write(text)
	// 	response.end();
	// }


/////////////////////////////////////////////////////////

// http.createServer( async (request, response) => {
// 	try {
// 		if (request.url != '/favicon.ico') {
// 			let text;
// 			let status = 200;	

// 		switch (request.url) {
// 		case (a[0]): 
// 			text = await fs.promises.readFile(`${obj['/page1']}`, 'utf8');
// 			break;
			
// 		case (a[1]): 
// 			text = await fs.promises.readFile(`${obj['/page2']}`, 'utf8');
// 			break;
	
// 		case (a[2]): 
// 			text = await fs.promises.readFile(`${obj['/page3']}`, 'utf8');
// 			break;
	
// 		default:
// 			text = 'page not found';
// 				status = 404;
// 			break;
// 		}

// 		response.writeHead(status, {'Content-Type': 'text/html'});
// 		response.write(text);
// 		response.end();	
	
// 	}
// }
// 	catch (err) {
// 		console.log('error')
// 		}

		