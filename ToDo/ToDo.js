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
    let removeTodoButton = document.getElementById("removeTodo");
    let changeTodoButton = document.getElementById("changeTodo");

    toDoHolder = document.getElementById("toDoHolder");
    textPromptDiv = document.getElementById("textPromptDiv");
    promptButton = document.getElementsByClassName("textButton");

    textPrompt = document.getElementById("textPrompt");
    changeTextPrompt = document.getElementById("changeTextPrompt");
    toDoText = document.getElementById("toDoText");

    promptDivAdd = document.getElementById("addPromptDiv");
    promptDivRemove = document.getElementById("removePromptDiv");
    promptDivChange = document.getElementById("changePromptDiv");

    addTodoButton.addEventListener("click", addTodoPrompt);
    removeTodoButton.addEventListener("click", removeTodoPrompt);
    changeTodoButton.addEventListener("click", changeTodoPrompt);
}


/**
 * We load existing todos
 */
function loadExistingTodo() {
    if (localStorage.currentToDo) {
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
    promptDivChange.style.display = "none";

    promptButton[0].addEventListener("click", addTodo)
}

/**
 * When the user clicks the remove button
 */
function removeTodoPrompt() {

    textPromptDiv.style.display = "block";

    promptDivAdd.style.display = "none";
    promptDivRemove.style.display = "block"
    promptDivChange.style.display = "none";

    promptButton[1].addEventListener("click", removeTodo)
}

/**
 * When the user has written in text that he/she wants to change to and presses the button
 */
function changeTodoPrompt() {

    textPromptDiv.style.display = "block";

    promptDivAdd.style.display = "none";
    promptDivRemove.style.display = "none"
    promptDivChange.style.display = "block";

    promptButton[2].addEventListener("click", changeTodo)
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
 * When the user has decided to change the Todo and presses the button
 */
function changeTodo() {
    let textInput = changeTextPrompt.value;
    toDoText.innerHTML = textInput;
    textPromptDiv.style.display = "none";

    localStorage.currentToDo = JSON.stringify(textInput);

    textPrompt.value = "";
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