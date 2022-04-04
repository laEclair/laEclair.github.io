
// app.get('/dir/page.html', function(req, res) {
//     console.log(req.path); // выведет '/dir/page.html'
// });

// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.url); // выведет '/dir/page.html?get1=1&get2=2'
// });


// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.originalUrl); // выведет '/dir/page.html?get1=1&get2=2'
// });


// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.query); // содержит объект {get1: '1', get2: '2'}
// });


// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.query.get1); // выведет '1'
// });

// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.protocol); // выведет 'http'
// });

// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.secure); // выведет false
// });


// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.headers);
// });

// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.acceptsLanguages);
// });

// app.get('/dir/page.html', function(req, res) {
// 	console.log(req.ip);
// });


///////////////////////////////////////////////////////////////////////



// app.get('/1/', function(req, res) {
// 	res.send('page1');
// });

// app.get('/2/', function(req, res) {
// 	res.send('page2');
// });


// app.use(function(req, res) {
// 	res.status(404).send('not found');
// });



//////////////////////////////////////////////////////////////////////////

//  ПАРСИНГ JSON 

// let file = fs.readFileSync('package.json', 'utf-8');
// let fileOBJ = JSON.parse(file);


// app.get('/', function(req, res) {
    
// 	res.type('application/json');
// 	res.send(fileOBJ['name'])
// });

//////////////////////////////////// работа с путями в експресс


// app.get('/page/', function(req, res) {
// 	res.sendFile(__dirname + '/pages/page.html');
	
// });

// app.get('/page/1/', function(req, res) {
// 	res.sendFile(__dirname + '/pages/1.html');
	
// });

// app.get('/page/2/', function(req, res) {
// 	res.sendFile(__dirname + '/pages/2.html');
	
// });

/////////////////////////////////////////////

/// СОЗДАНИЕ КОРНЕВОЙ ПАПКИ СО СТАТИКОЙ 

// let a;

// app.use(express.static(__dirname + '/public/')), (req, res) => {
// 	a = fs.readFileSync('image.jpg')
// 	res.sendFile(a)
// }

///////////////////////////////////////////////

///// Работа с массивами и html элементами

// let str = `<div>
// 	<p>text1</p>
// 	<p>text2</p>
// 	<p>text3</p>
// </div>`;

// let arr = ['M', 'a', 'M'];

// // app.get('/test/', function(req, res) {
// // 	res.send(str);
// // });

// app.get('/test/', function(req, res) {
// 	let result = '<ul>';
	
// 	for (let elem of arr) {
// 		result += '<li>' + elem + '</li>';
// 	}
	
// 	result += '</ul>';
// 	res.send(result);
// });

//////////////////////////////////////////////////////////// 

///// Прокручиваю массив из json Объектов и вывожу


// app.get('/users/', function(req, res) {
// 	let arr = [];

// 	let usersJson = fs.readFileSync('users.json', 'utf-8');
// 	arr.push(JSON.parse(usersJson));
	
	

// 	let result = '<ul>';
    
// 		for (let i of arr) {
// 			result += '<li>' + 'Name: ' + i.User1.name + ' Age: ' + i.User1.age + '</li>';
// 		}
	

	
// 	result += '</ul>';
	
// 	res.send(result);
// });


/////////////////////////////// Таблица html из свойств объекта 



// let employees = [
// 	{
// 		surname: 'surname1',
// 		name:    'user1',
// 		salary:  1000,
// 	},
// 	{
// 		surname: 'surname2',
// 		name:    'user2',
// 		salary:  2000,
// 	},
// 	{
// 		surname: 'surname3',
// 		name:    'user3',
// 		salary:  3000,
// 	},
// ];

// app.get('/users/', function(req, res) {
	

// 	// let usersJson = fs.readFileSync('users.json', 'utf-8');
// 	// arr.push(JSON.parse(usersJson));
	
	

// 	let result = '<table>';


// 	for (let i of employees) {

		
// 		result +=  '<tr style="background-color: #ccc;">' + '<td >' + ' Name: ' + i.surname + '</td>' + '</tr>' + '<dir>' + '</dir>'
// 		 + '<tr style="background-color: #ccc;">' + '<td>' + ' name:  ' + i.name + '</td>' + '</tr>' + '<dir>' + '</dir>'
// 		 + '<tr style="background-color: #ccc;">' + '<td>' + ' Salary: ' + i.salary + '</td>' + '</tr>' + '<dir>' + '</dir>';
// 	}
    
		

	
// 	result += '</table>';
	
// 	res.send(result);
// });




///////////////////////////////////////////////////////////

/////////////// Работа с маршрутизацией url и преобразование







////////////// первая задача


// let sum;
// let result;


// app.get('/test/:num1/:num2/', function(req, res) {
// 	sum = Number(req.params.num1) + Number(req.params.num2);
// 	result = String(sum);

//  	res.status(200).send(result);
// });



///////////////// вторая задача

// app.get('/test/:num1/:num2/:num3/', function(req, res) {
// 	sum = Number(req.params.num1) + Number(req.params.num2) + Number(req.params.num3);
// 	result = String(sum);

//  	res.status(200).send(result);
// });



//////// третья задача


// app.get('/test/:num/', function(req, res) {
// 	sum = Number(req.params.num) * Number(req.params.num);
// 	result = String(sum);

//  	res.status(200).send(result);
// });



////////////// работа с маршрутом

// let sum;
// let result;


// app.get('/test/:num/', function(req, res) {
// 	sum = Number(req.params.num) * Number(req.params.num);
// 	result = String(sum);

//  	res.status(200).send(result);
// });


/////////////////////////// календарь в маршруте и 404


// app.get('/test/:num/', function(req, res) {
// 	let num = req.params.num;
	
// 	if (/19|20\d\d-(0[0-9]|1[0-2])-(0[0-9]|1[0-9]|2[0-9]|3[0-1])/.test(num)) {
// 		res.send('your num: ' + num);
// 	} else {
// 		res.status(404).send('not found');
// 	}
// });



/////////////////////////////// элемент массива по номеру страницы

// let users = ['user1', 'user2', 'user3', 'user4', 'user5'];

// app.get('/test/:num/', function(req, res) {
// 	let num = req.params.num;
	
// 	if (req.params.num < 5 && req.params.num > 0) {
// 		res.send('your n of users: ' + users[req.params.num]);
// 	} else {
// 		res.status(404).send('not found'); // начало с /test/, но потом не число
// 	}
// });

// app.use(function(req, res) {
// 	res.status(404).send('not found'); // адреса, не начинающиеся с /test/
// });

///////////////////////////////////////////////// объект и айди в маршрутах

// let users = [
// 	{
// 		name: 'user1',
// 		age:  31,
// 	},
// 	{
// 		name: 'user2',
// 		age:  32,
// 	},
// 	{
// 		name: 'user3',
// 		age: " 33",
// 	},
// ];

// app.get('/user/:id/', function(req, res) {
// 	let user = users[req.params.id];
// 	res.send('Name: ' + user.name + ' ' + 'Age: ' + user.age);
// });

// app.get('/user/:id/:field/', function(req, res) {
// 	let user = users[req.params.id];
// 	res.send(user[req.params.field]);
// });


////////////////    Роутинг и файлы в Express

// app.get('/file/:num/', function(req, res) {
// 	res.sendFile(__dirname + '/' + req.params.num + '.js');
// });




//////////////////////////////////// асинхр получение страницы



// app.get('/page/:num/', async function(req, res) {
// 	let path = __dirname + '/pages/' + req.params.num + '.html';
	
// 	try {
		
// 		await fs.access(path, constants.F_OK);
// 		res.sendFile(path);
// 	} catch(err) {
// 		res.status(404).send('not found');
// 	}
// });



/////////////////////////////////////////// Группировка через Router


// let cityRouter = express.Router();
// let countryRouter = express.Router();

// cityRouter.get('/show/:id', function(req, res) {
	
// });

// cityRouter.get('/edit/:id', function(req, res) {
	
// });

// countryRouter.get('/list', function(req, res) {
	
// });
// countryRouter.get('/show/:id', function(req, res) {
	
// });
// countryRouter.get('/edit/:id', function(req, res) {
	
// });

// app.use('/city/', cityRouter)

// app.use('/country/', countryRouter)
