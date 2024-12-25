let input = document.querySelector("#input");
let saveIcon = document.querySelector("#saveIcon");
let newTask = document.querySelector("#newTask");
let newTaskInput = document.querySelector("#newTaskInput"); 
let edit = document.querySelector("#edit"); 
let delete_ = document.querySelector("#delete"); 

saveIcon.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = input.value;

  if (inputValue === "") {
    alert("enter your task");
    return;
  }
  let jsInput = document.createElement("input");
  jsInput.type = "text";
  jsInput.value = inputValue;
  jsInput.setAttribute("readonly", "readonly"); 
  newTask.appendChild(jsInput);

  let jsEdit = document.createElement("button");
  jsEdit.innerText = "edit";
  jsEdit.classList.add("button");
  newTask.appendChild(jsEdit);
  let JsDelete = document.createElement("button");
  JsDelete.innerText = "delete";
  JsDelete.classList.add("button");
  newTask.appendChild(JsDelete);
  input.value = '';
  jsEdit.addEventListener("click", () => { 
    if (jsEdit.innerText.toLowerCase() == "edit") {
      jsEdit.innerText = "save";
      jsInput.removeAttribute("readonly"); 
      jsInput.focus(); 
    } else {
      jsEdit.innerText = "edit";
      jsInput.setAttribute("readonly", "readonly"); 
    }
  });
  JsDelete.addEventListener('click',()=>{
    newTask.removeChild(jsInput);
    newTask.removeChild(jsEdit);
    newTask.removeChild(JsDelete);

  })
});