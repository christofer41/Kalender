window.addEventListener("load", printDay)
window.addEventListener("load", printDate)
window.addEventListener("load", printTime)

window.addEventListener("load", loadPage) 
window.addEventListener("load", loadExistingTodo)

/**
 * When the page loads
 */
function loadPage() {
    let addTodoButton = document.getElementById("addTodo");
    let removeTodoButton = document.getElementById("removeTodo")
    toDoHolder = document.getElementById("toDoHolder");
    textPromptDiv = document.getElementById("textPromptDiv");
    promptButton = document.getElementsByClassName("textButton");

    textPrompt = document.getElementById("textPrompt");
    toDoText = document.getElementById("toDoText");

    promptDivAdd = document.getElementById("addPromptDiv");
    promptDivRemove = document.getElementById("removePromptDiv");

    addTodoButton.addEventListener("click", addTodoPrompt);
    removeTodoButton.addEventListener("click", removeTodoPrompt);
}


/**
 * We load existing todos
 */
function loadExistingTodo(){
    if (localStorage.currentToDo){
        toDoText.innerHTML = JSON.parse(localStorage.currentToDo);
    }
}

/**
 * When the user clicks the add button
 */
function addTodoPrompt() {

    textPromptDiv.style.display = "block";
    promptDivAdd.style.display = "block";
    promptDivRemove.style.display = "none";
    promptButton[0].addEventListener("click", addTodo)
}

/**
 * When the user clicks the remove button
 */
function removeTodoPrompt() {

    textPromptDiv.style.display = "block";
    promptDivAdd.style.display = "none";
    promptDivRemove.style.display = "block"
    promptButton[1].addEventListener("click", removeTodo)
}

/**
 * When the user has written in the text and presses the button
 */
function addTodo() {
    let textInput = textPrompt.value;
    toDoText.innerHTML = textInput;
    textPromptDiv.style.display = "none";

    localStorage.currentToDo = JSON.stringify(textInput);
    
    textPrompt.value = "";
}

/**
 * When the user has decided to remove the ToDo and presses the button
 */
function removeTodo() {
    textPromptDiv.style.display = "none";
    toDoText.innerHTML = "";
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
    document.getElementById('dateOfYear').innerHTML = date.getDate() + ' ' + '/' + ' ' + date.getMonth() + ' ' + '/' + ' ' + date.getUTCFullYear()
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