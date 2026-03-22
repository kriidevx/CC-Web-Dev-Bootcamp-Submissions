const Task = document.getElementById("Task")
const container = document.getElementById("task_container")
function addTask(){
    if(Task.value == ""){
        alert('Enter your task')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" class="check"><span class="tasktext">${Task.value}</span><img class="delete" src="trash.png">`;
        container.appendChild(li);
        Task.value="";
        li.querySelector("img").addEventListener("click",remove);
        function remove(){
            li.remove()
        }
        li.querySelector(".check").addEventListener("change",strike);
        function strike(){
            let text = li.querySelector(".tasktext");
            if(this.checked){
                text.style.textDecoration = "line-through"
            }
            else{
                 text.style.textDecoration = "none";
            }
        }
    }
}