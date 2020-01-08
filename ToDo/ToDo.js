window.addEventListener("load", printDay)
window.addEventListener("load", printDate)
window.addEventListener("load", printTime)

window.addEventListener("load", loadPage)
window.addEventListener("load", loadExistingTodo)
window.addEventListener("load", theCurrentDateTodo);



//The selected array
let selectedDateArray;
//The selected Month for the array
let selectedMonthArray = currentMonth;
//The selected Day for the array
let selectedDayArray

/**
 * The list of all todos
 */
todoList = {
    todo: {},
    badge: {}
}

let chosenToDo;

/**
 * When the page loads
 */
function loadPage() {
    let addTodoButton = document.getElementById("addTodo");
    let removeTodoButton = document.getElementById("removeTodo");
    let changeTodoButton = document.getElementById("changeTodo");
    
    textInTodoBoxClass = document.getElementsByClassName("textInTodoBox");
    toDoHolder = document.getElementById("toDoHolder");
    textPromptDiv = document.getElementById("textPromptDiv");
    promptButton = document.getElementsByClassName("textButton");

    textPrompt = document.getElementById("textPrompt");
    changeTextPrompt = document.getElementById("changeTextPrompt");

    promptDivAdd = document.getElementById("addPromptDiv");
    promptDivRemove = document.getElementById("removePromptDiv");
    promptDivChange = document.getElementById("changePromptDiv");

    addTodoButton.addEventListener("click", addTodoPrompt);
    removeTodoButton.addEventListener("click", removeTodoPrompt);
    changeTodoButton.addEventListener("click", changeTodoPrompt);

    clickCurrentDate();
    selectToDoItem('textInTodoBox0');
}

function clickCurrentDate() {
    const firstDay = getFirstDayOfMonth(currentMonth);
    const day = new Date().getUTCDate();
    const id = 'd-' + (firstDay + day - 1);
    const div = document.getElementById(id);
    const dateElems = div.getElementsByClassName('date');
    if (dateElems && dateElems[0]) {
        selectDivHandler(dateElems[0]);
    }
}



/**
 * We load existing todos
 */
function loadExistingTodo() {
    if (localStorage.allArrays) {
        console.log(JSON.parse(localStorage.allArrays));
        todoList = JSON.parse(localStorage.allArrays);
    }
}


function clickTheToDo_OLD(event){

    chosenToDo = event.target.id;
    let changeTheColor = document.getElementById(chosenToDo);

    for (let i = 0; i < textInTodoBoxClass.length; i++) {
        textInTodoBoxClass[i].style.backgroundColor = "white";
    }

    changeTheColor.style.backgroundColor = "lightblue";
}

function clickTheToDo(event){
    chosenToDo = event.target.id;
    selectToDoItem(chosenToDo);
}

function selectToDoItem(id) {
    const changeTheColor = document.getElementById(id);
    if (changeTheColor == null) {
        return;
    }
    for (let i = 0; i < textInTodoBoxClass.length; i++) {
        textInTodoBoxClass[i].classList.remove('selected-todo-item');
    }
    changeTheColor.classList.add('selected-todo-item');
    chosenToDo = id;
}



/**
 * We load existing badges
 * @param {number} start When the days start
 * @param {number} end  When the days end
 */
function loadExistingBadges(start, end){
    let allTheBadges = document.getElementsByClassName("badge");
    for (let p = start; p < end; p++) {
        allTheBadges[p].innerHTML = "0";
        allTheBadges[p].style.display = "none";
    }
    let y = 0;
    for (let i = start; i <= end; i++) {
        y++;
        const array =  todoList["badge"];
        if (array != null &&  array[currentMonth.toString() + "-" + y.toString()] != null) {
            allTheBadges[i+1].innerHTML = todoList["badge"][currentMonth + "-" + y].length;
            console.log(allTheBadges[i].innerHTML);
            allTheBadges[i+1].style.display = "inline-block";
            if (todoList["badge"][currentMonth + "-" + y].length < 1) {
                allTheBadges[i+1].style.display = "none";
            }
        }
    }
}

/**
 * When the user clicks the add button
 */
function addTodoPrompt() {

    if (selectedDateArray != undefined){
        
        textPromptDiv.style.display = "block";
    
        promptDivAdd.style.display = "block";
        promptDivRemove.style.display = "none";
        promptDivChange.style.display = "none";
    
        promptButton[0].addEventListener("click", addTodo)
    }
    else{
        alert("Please select a date!");
    }

}

/**
 * When the user clicks the remove button
 */
function removeTodoPrompt() {

    //If a date has been selected
    if (selectedDateArray != undefined){

        //If the date doesn't have an todo
        if (!todoList["todo"][selectedDateArray]){
            alert("This date doesn't have an todo");
            textPromptDiv.style.display = "none";
        }
        else {
            textPromptDiv.style.display = "block";
        
            promptDivAdd.style.display = "none";
            promptDivRemove.style.display = "block"
            promptDivChange.style.display = "none";
        
            promptButton[1].addEventListener("click", removeTodo)
        }

    }
    //If a date hasn't been selected
    else{
        alert("Please select a date");
    }

}

/**
 * When the user has written in text that he/she wants to change to and presses the button
 */
function changeTodoPrompt() {
    if (selectedDateArray != null){

        //If the date doesn't have an todo
        if (!todoList["todo"][selectedDateArray]){
            alert("This date doesn't have an todo");
            textPromptDiv.style.display = "none";
        }
        else {
            textPromptDiv.style.display = "block";
    
            promptDivAdd.style.display = "none";
            promptDivRemove.style.display = "none"
            promptDivChange.style.display = "block";

            // const textElem = document.getElementById('changeTextPrompt');
            const chosenToDoElem = document.getElementById(chosenToDo);
            if (chosenToDoElem) {
                // textElem.innerText = chosenToDoElem.innerText;
                changeTextPrompt.value = chosenToDoElem.innerText;
            }

            promptButton[2].addEventListener("click", changeTodo)
        }
    }

    else{
        alert("Please select a date");
    }

}

/**
 * When the user has written in the text and presses the button
 */
function addTodo() {
    let textInput = textPrompt.value;

    textPromptDiv.style.display = "none";

   if (!todoList["todo"]) {
        todoList["todo"] = {}
    }
   if (!todoList["badge"]) {
       todoList["badge"] = {}
   }
    const array =  todoList["todo"]
    if (array[selectedDateArray] == null) {
        todoList["todo"][selectedDateArray] = []
        todoList["badge"][selectedDateArray] = []
    }

    todoList["todo"][selectedDateArray].push(textInput);
    console.log(todoList);
    
    removeTodoInBox();
    showTodoInBox();
    
    badgeNumber.innerHTML++;
    badgeNumber.style.display = 'inline-block';

    todoList["badge"][selectedDateArray].push(badgeNumber.innerHTML);

    localStorage.allArrays = JSON.stringify(todoList);


    textPrompt.value = "";

    selectFirstAvailableToDo();
}

function selectFirstAvailableToDo() {
    const todoElems = document.getElementsByClassName('textInTodoBox');
    if (todoElems.length > 0) {
        selectToDoItem(todoElems[0].id);
    }
}

/**
 * When the user has decided to remove the ToDo and presses the button
 */
function removeTodo() {

    if (!todoList["todo"]) {
        todoList["todo"] = {}
    }
   if (!todoList["badge"]) {
       todoList["badge"] = {}
   }

    if (chosenToDo != null) {
        let removeTheChosenToDo = document.getElementById(chosenToDo);
        textPromptDiv.style.display = "none";
        removeTheChosenToDo.remove();

        selectFirstAvailableToDo();
    }
    else{
        alert("Please select a todo to remove");
        textPromptDiv.style.display = "none";
    }

    let saveInArray = [];

    for (let i = 0; i < textInTodoBoxClass.length; i++) {
        saveInArray.push(textInTodoBoxClass[i].innerHTML);      
    }


    todoList["todo"][selectedDateArray] = null;
    todoList["badge"][selectedDateArray] = null;


    todoList["todo"][selectedDateArray] = []
    todoList["badge"][selectedDateArray] = []

    // fix error: badgeNumber is undefined
    // if (badgeNumber) {
        badgeNumber.innerHTML--;
    //}

    if(badgeNumber < 1) {
        badgeNumber.style.display = 'none';
    }

    for (let i = 0; i < saveInArray.length; i++) {
        todoList["todo"][selectedDateArray].push(saveInArray[i]);      
    }

    
    localStorage.allArrays = JSON.stringify(todoList);
    
    // console.log(todoList);

    // badgeNumber.innerHTML-- ; 
    // badgeNumber.style.display = 'inline-block';


}

/**
 * When the user has decided to change the Todo and presses the button
 */
function changeTodo() {
    if (todoList["todo"][selectedDateArray]) {

        if (todoList["todo"][selectedDateArray]) {

            if (chosenToDo != null) {
                let changeTheChosenToDo = document.getElementById(chosenToDo);
                let textInput = changeTextPrompt.value;
                changeTheChosenToDo.innerHTML = textInput;
                textPromptDiv.style.display = "none";
            }
            else{
                alert("Please select a todo to change");
                textPromptDiv.style.display = "none";
            }
    
    
            let saveInArray = [];
    
            for (let i = 0; i < textInTodoBoxClass.length; i++) {
                saveInArray.push(textInTodoBoxClass[i].innerHTML);      
            }
    
    
            todoList["todo"][selectedDateArray] = null;
    
    
            todoList["todo"][selectedDateArray] = []
    
            for (let i = 0; i < saveInArray.length; i++) {
                todoList["todo"][selectedDateArray].push(saveInArray[i]);      
            }
    
            localStorage.allArrays = JSON.stringify(todoList);
        }
    } 
}


/**
 * function to print out the day of the week
 * 
 */

function printDay() {
    const date = new Date()
    let day = date.getDay()

    switch (day) {
        case 1:
            document.getElementById('dayOfWeek').innerHTML = 'Måndag'
            break;
        case 2:
            document.getElementById('dayOfWeek').innerHTML = 'Tisdag'
            break;
        case 3:
            document.getElementById('dayOfWeek').innerHTML = 'Onsdag'
            break;
        case 4:
            document.getElementById('dayOfWeek').innerHTML = 'Torsdag'
            break;
        case 5:
            document.getElementById('dayOfWeek').innerHTML = 'Fredag'
            break;
        case 6:
            document.getElementById('dayOfWeek').innerHTML = 'Lördag'
            break;
        case 7:
            document.getElementById('dayOfWeek').innerHTML = 'Söndag'
            break;
    }
}


/**
 * function to print out the date
 *
 */
function printDate() {
    const date = new Date()
    let month = date.getMonth() + 1
    document.getElementById('dateOfYear').innerHTML = date.getDate() + ' ' + '/' + ' ' + month + ' ' + '/' + ' ' + date.getUTCFullYear()
}
/**
 * function to get real time
 * 
 */
function printTime() {
    const date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    minutes = checkTime(minutes)
    seconds = checkTime(seconds)
    document.getElementById('time').innerHTML = hour + ':' + minutes + ':' + seconds
    setTimeout(printTime, 500)
}
function checkTime(i) {
    if (i < 10) { i = '0' + i }
    return i
}

