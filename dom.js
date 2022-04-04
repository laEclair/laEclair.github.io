"use strict"

let input = document.querySelector('#inputText');
let tasks = document.querySelector('#tasks');
let buttonAdd = document.querySelector('#btnAdd');


// console.log(localStorage.getItem('savedtasks'))

function addLocalStorage () {
    let jsonLS = JSON.parse(localStorage.getItem('savedtasks'));

    for(let i = 0; i < jsonLS.length; i++ ){
        let activeTask = document.createElement('li');
        activeTask.innerHTML = '<span>' + jsonLS[i].text + '</span>' ; 
        activeTask.className = 'activeTask';
        activeTask.style.backgroundColor = jsonLS[i].colored;
        tasks.appendChild(activeTask);
    
        
        let completedBtn = document.createElement('button');
        
        completedBtn.innerHTML = '^';
        completedBtn.className = 'completedBtn';
        if(activeTask.style.backgroundColor == 'green'){
            completedBtn.addEventListener('click', uncomplited); 
        } else if (activeTask.style.backgroundColor == 'gray') {
            completedBtn.addEventListener('click', completed);
        }
        
        

        activeTask.appendChild(completedBtn);
        
        
        let removeBtn = document.createElement('button');
        
        removeBtn.innerHTML = '-';
        removeBtn.className = 'removeBtn';
        removeBtn.addEventListener('click', removeTask);
        activeTask.appendChild(removeBtn);
    
    
      
    }
   
}
addLocalStorage ();

btnAdd.addEventListener('click', buttonAddTask);  

function buttonAddTask () {
    let activeTask = document.createElement('li');
    activeTask.innerHTML = '<span>' + input.value + '</span>' ;
    activeTask.className = 'activeTask';
    activeTask.style.backgroundColor = 'gray';

    if(input.value == '') {
        alert('ввод пустой');
        btnAdd.removeEventListener(buttonAddTask);
    }  
    let allTasksDebug = document.querySelectorAll('li');
    for(let i = 0; i < allTasksDebug.length; i++){
        let second = allTasksDebug[i].textContent.slice(0,-2);
        if(input.value == second){
            alert('у вас уже имеется такая задача');
            btnAdd.removeEventListener(buttonAddTask);
        }
    };
      
    
    let completedBtn = document.createElement('button');
    completedBtn.href = '';
    completedBtn.innerHTML = '^';
    completedBtn.className = 'completedBtn';
    completedBtn.addEventListener('click', completed );
    activeTask.appendChild(completedBtn);
    
    
    let removeBtn = document.createElement('button');
    removeBtn.href = '';
    removeBtn.innerHTML = '-';
    removeBtn.className = 'removeBtn';
    removeBtn.addEventListener('click', removeTask);
    activeTask.appendChild(removeBtn);



    /// редактирование тасков и обработка
    let elem = activeTask.querySelector('span');
    elem.addEventListener('click', function func() {
        let input = document.createElement('input');
        let eleminnerbackup = elem.textContent;
        input.value = elem.textContent;
        elem.innerHTML = '';

        elem.appendChild(input);

        input.addEventListener('blur', function redinpt() {

            elem.innerHTML = '<span>' + this.value + '</span>' ;
            elem.addEventListener('click', func);

            if(this.value == '') {
                alert('ввод пустой');
                elem.innerHTML = '<span>' + eleminnerbackup + '</span>' ;
            }  

            let allTasksDebug = document.querySelectorAll('li');

            for(let i = 0; i < allTasksDebug.length-1; i++){
                let second = allTasksDebug[i].textContent.slice(0,-2);
                if(input.value == second){
                    alert('у вас уже имеется такая задача');
                    elem.innerHTML = '<span>' + eleminnerbackup + '</span>' ;
                }


                let allTasks = document.querySelectorAll('.activeTask');
                let JsonSaved = `[]`;
            
                for(let i = 0; i < allTasks.length; i++ ){
                    let elem = (allTasks[i].textContent).slice(0,-2);
                    let color = (allTasks[i].style.backgroundColor);
                    let obj = {};
                    obj.text = elem;
                    obj.colored = color;
            
                   let json = JSON.parse(JsonSaved);
                   json.push(obj);
                   JsonSaved = JSON.stringify(json);
            
                }
            
                localStorage.setItem('savedtasks', JsonSaved);

    };

    });
        elem.removeEventListener('click', func);

    });
    

    tasks.appendChild(activeTask);


    let allTasks = document.querySelectorAll('.activeTask');
    let JsonSaved = `[]`;

    for(let i = 0; i < allTasks.length; i++ ){
        let elem = (allTasks[i].textContent).slice(0,-2);
        let color = (allTasks[i].style.backgroundColor);
        let obj = {};
        obj.text = elem;
        obj.colored = color;

       let json = JSON.parse(JsonSaved);
       json.push(obj);
       JsonSaved = JSON.stringify(json);

    }

    localStorage.setItem('savedtasks', JsonSaved);
    // console.log(localStorage.getItem('savedtasks'));

   
}

function completed () {
    this.parentElement.style.backgroundColor = 'green';
    let jsonLSComleted = JSON.parse(localStorage.getItem('savedtasks'));

    for(let i = 0; i < jsonLSComleted.length; i++ ){
        let elem = (this.parentElement.textContent).slice(0,-2);
       
        if(elem == jsonLSComleted[i].text){
            jsonLSComleted[i].colored = 'green';
            
        }
        let jsonsaved = JSON.stringify(jsonLSComleted);
            localStorage.setItem('savedtasks', jsonsaved);
    }

    this.removeEventListener('click', completed);
    this.addEventListener('click', uncomplited);
}

function uncomplited() {   
    this.parentElement.style.backgroundColor = 'gray';

    let jsonLSComleted = JSON.parse(localStorage.getItem('savedtasks'));

    for(let i = 0; i < jsonLSComleted.length; i++ ){
        let elem = (this.parentElement.textContent).slice(0,-2);
        
        if(elem == jsonLSComleted[i].text){
            jsonLSComleted[i].colored = 'gray';
            
        }
        let jsonsaved = JSON.stringify(jsonLSComleted);
            localStorage.setItem('savedtasks', jsonsaved);
    }

    this.removeEventListener('click', uncomplited);
    this.addEventListener('click', completed);
}

function removeTask () {
        let jsonLSComleted = JSON.parse(localStorage.getItem('savedtasks'));
       
            for(let i = 0; i < jsonLSComleted.length; i++ ){
                let elem = (this.parentElement.textContent).slice(0,-2);
               
                
                if(elem == jsonLSComleted[i].text){
                    jsonLSComleted.splice(i,1);
                    let jsonsaved = JSON.stringify(jsonLSComleted);
                    localStorage.setItem('savedtasks', jsonsaved);
                } 
            }
    this.parentElement.remove();
}

function redact () {
    let elems = document.querySelectorAll('span');
    for (let elem of elems) {
	
        elem.addEventListener('click', function func() {
            let input = document.createElement('input');
            let eleminnerbackup = elem.textContent;
            input.value = elem.textContent;
            
            elem.innerHTML = '';
            elem.appendChild(input);
            
            input.addEventListener('blur', function redinpt() {
                elem.innerHTML = '<span>' + this.value + '</span>' ;
                elem.addEventListener('click', func);

                if(this.value == '') {
                    alert('ввод пустой');
                    elem.innerHTML = '<span>' + eleminnerbackup + '</span>' ;
                }  
    
                let allTasks = document.querySelectorAll('.activeTask');
                let JsonSaved = `[]`;
            
                for(let i = 0; i < allTasks.length; i++ ){
                    let elem = (allTasks[i].textContent).slice(0,-2);
                    let color = (allTasks[i].style.backgroundColor);
                    let obj = {};
                    obj.text = elem;
                    obj.colored = color;
            
                   let json = JSON.parse(JsonSaved);
                   json.push(obj);
                   JsonSaved = JSON.stringify(json);
            
                }
            
                localStorage.setItem('savedtasks', JsonSaved);
    
            });
            elem.removeEventListener('click', func);
 
        });

        
    }


   

}
redact();

