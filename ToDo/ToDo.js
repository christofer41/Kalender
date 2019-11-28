window.addEventListener("load", loadPage()) 

/**
 * When the page loads
 */
function loadPage(){    
    let addTodoButton = document.getElementById("addTodo");
    toDoHolder = document.getElementById("toDoHolder");
    textPromptDiv = document.getElementById("textPromptDiv");
    promptButton = document.getElementById("enterTheTextButton");
    textPrompt = document.getElementById("textPrompt");
    toDoText = document.getElementById("toDoText");

    addTodoButton.addEventListener("click", addTodoPrompt);
}

/**
 * When the user clicks the add button
 */
function addTodoPrompt(){
    textPromptDiv.style.display = "block";
    promptButton.addEventListener("click", addTodo)
}

/**
 * When the user has written in the text and presses the button
 */
function addTodo(){
    let textInput = textPrompt.value;
    toDoText.innerHTML = textInput;
    textPromptDiv.style.display = "none";

    textPrompt.value = "";
}