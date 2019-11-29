window.addEventListener("load", loadPage) 
window.addEventListener("load", loadExistingTodo)
/**
 * When the page loads
 */
function loadPage(){    
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
function addTodoPrompt(){

    textPromptDiv.style.display = "block";
    promptDivAdd.style.display = "block";
    promptDivRemove.style.display = "none";
    promptButton[0].addEventListener("click", addTodo)
}

/**
 * When the user clicks the remove button
 */
function removeTodoPrompt(){

    textPromptDiv.style.display = "block";
    promptDivAdd.style.display = "none";
    promptDivRemove.style.display = "block"
    promptButton[1].addEventListener("click", removeTodo)
}

/**
 * When the user has written in the text and presses the button
 */
function addTodo(){
    let textInput = textPrompt.value;
    toDoText.innerHTML = textInput;
    textPromptDiv.style.display = "none";

    localStorage.currentToDo = JSON.stringify(textInput);
    
    textPrompt.value = "";
}

/**
 * When the user has decided to remove the ToDo and presses the button
 */
function removeTodo(){
    textPromptDiv.style.display = "none";
    toDoText.innerHTML = "";
}